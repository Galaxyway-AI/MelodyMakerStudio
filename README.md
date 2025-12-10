# MelodyMakerStudio

## What is this App?
MelodyMakerStudio is a comprehensive web application designed for music studios, producers, and artists. It acts as both a public-facing portfolio and a powerful management tool.

*   **For Visitors**: It offers a premium, immersive experience to explore featured songs, view artist profiles, and submit requests for custom songs.
*   **For Admins**: It provides a secure, feature-rich dashboard to manage the entire website. You can update the homepage hero carousel, upload and edit songs, manage artist information, and review user requests—all without touching a line of code.

## Technology Stack
We used the latest, most performant technologies to build this app:

### Core Framework
*   **Next.js 16**: The most advanced React framework, providing speed, SEO optimization, and server-side capabilities.
*   **React 19**: The latest version of the core UI library.
*   **TypeScript**: Ensures code reliability and robustness.

### Design & UI
*   **Tailwind CSS v4**: For a modern, responsive, and highly customizable design system.
*   **Shadcn UI / Radix UI**: Accessible, professional-grade UI components.

### Backend & Data
*   **PostgreSQL**: The primary database for structured data, managed easily with **Drizzle ORM**.
*   **Firebase**: Used for secure **Authentication** (Login/Signup), **File Storage** (uploading images & audio), and **Firestore** (for specific real-time data needs).
*   **Upstash Redis**: Used for high-performance caching and rate limiting.

## Hosting Requirements
To host this application, your environment must support **Node.js**.

### Recommended Hosting Setup
1.  **Web Application (The Code)**
    *   **Vercel**: (Most Recommended) Seamless integration with Next.js, handling deployments automatically.
    *   **Alternatives**: DigitalOcean App Platform, AWS Amplify, or any VPS with Docker/Node.js installed.

2.  **Database (The Data)**
    *   You need a hosted **PostgreSQL** instance.
    *   **Providers**: Neon.tech (Serverless Postgres), Supabase, or AWS RDS.

3.  **External Services (Connectors)**
    *   **Firebase Project**: Essential for user logins and storing media files. You will need a standard Firebase project setup.
    *   **Upstash**: Recommended for Redis usage if you are using rate-limiting features.

### Environment Variables
When hosting, you must provide your secrets (API Keys, Database URLs) via Environment Variables. Key variables include:
*   `DATABASE_URL`: Connection string for your PostgreSQL database.
*   `NEXT_PUBLIC_FIREBASE_...`: Various keys for connecting to your Firebase project.
*   `AUTH_SECRET`: For securing user sessions.

## Getting Started Locally
To run this app on your computer:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) in your browser.
