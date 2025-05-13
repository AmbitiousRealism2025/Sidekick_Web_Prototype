# Project Structure Summary

Based on the files listed, this appears to be a Next.js web application project with TypeScript. Here's a summary of its likely structure:

## Root Directory:

*   `README.md`: Project documentation.
*   `components.json`: Likely configuration for a component library (e.g., Shadcn/ui).
*   `next.config.ts`: Configuration file for Next.js.
*   `package.json` & `package-lock.json`: Node.js project manifest and lock file, defining dependencies and scripts.
*   `postcss.config.mjs`: Configuration for PostCSS (CSS processing).
*   `tailwind.config.ts`: Configuration for Tailwind CSS.
*   `tsconfig.json`: Configuration file for TypeScript.

## .idx/ and .vscode/:

These directories contain configuration files specific to the development environment (Project IDX/Firebase Studio and VS Code respectively).

## docs/:

*   `blueprint.md`: Contains documentation, possibly design or architectural notes.

## src/ (Source Code):

*   **`ai/`**:
    *   `dev.ts`, `genkit.ts`: Suggests integration with AI functionalities, possibly using a framework like Genkit.
*   **`app/`**: This is the core of the Next.js application using the App Router.
    *   `favicon.ico`: The icon for the website.
    *   `globals.css`: Global CSS styles.
    *   `layout.tsx`: The main layout component for the application.
    *   `page.tsx`: The main page component for the root route.
*   **`components/`**: Contains React components.
    *   `landing-page/`: Components specifically for the landing page (e.g., `cta-section.tsx`, `features-section.tsx`, `hero-section.tsx`).
    *   `ui/`: Reusable UI components (e.g., `accordion.tsx`, `button.tsx`, `card.tsx`, `dialog.tsx`, `input.tsx`, `sidebar.tsx`, `toast.tsx`). This structure is common when using a UI library like Shadcn/ui.
*   **`hooks/`**:
    *   `use-mobile.tsx`, `use-toast.ts`: Custom React hooks for shared logic.
*   **`lib/`**:
    *   `utils.ts`: Utility functions used across the project.

In summary, it's a modern web application built with Next.js, TypeScript, and Tailwind CSS, featuring a component-based architecture and potentially AI integrations.
