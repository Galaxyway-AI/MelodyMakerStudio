"use client";

import { useAuth } from "@/contexts/auth-context";

import { Button } from "./ui/button";

const SignOutButton = () => {
  const { signOut } = useAuth();
  return (
    <Button
      variant="secondary"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
