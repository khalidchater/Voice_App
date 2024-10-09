import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react";

const VITE_CLERK_PUBLISHABLE_KEY =
  "pk_test_aW50ZXJuYWwtY295b3RlLTYwLmNsZXJrLmFjY291bnRzLmRldiQ";

const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
