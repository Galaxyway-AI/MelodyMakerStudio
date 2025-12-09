"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
    User,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import { createSessionCookie, deleteSessionCookie } from "@/lib/auth-helpers";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signInWithGithub: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("AuthProvider: Mounting...");
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("AuthProvider: Auth state changed", user ? "User logged in" : "No user");
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signIn = async (email: string, password: string) => {
        console.log("AuthContext: Attempting sign in for", email);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("AuthContext: Firebase sign in successful, getting token...");
            const idToken = await userCredential.user.getIdToken();
            console.log("AuthContext: Got token, creating session cookie...");
            const result = await createSessionCookie(idToken);
            if (!result.success) {
                console.error("AuthContext: Session cookie creation failed:", result.error);
                throw new Error(result.error || "Failed to create session");
            }
            console.log("AuthContext: Session cookie created successfully");
        } catch (error) {
            console.error("AuthContext: Sign in error:", error);
            throw error;
        }
    };

    const signUp = async (email: string, password: string) => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const idToken = await userCredential.user.getIdToken();
        await createSessionCookie(idToken);
    };

    const signOut = async () => {
        await firebaseSignOut(auth);
        await deleteSessionCookie();
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const idToken = await userCredential.user.getIdToken();
        await createSessionCookie(idToken);
    };

    const signInWithGithub = async () => {
        const provider = new GithubAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const idToken = await userCredential.user.getIdToken();
        await createSessionCookie(idToken);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                signIn,
                signUp,
                signOut,
                signInWithGoogle,
                signInWithGithub,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
