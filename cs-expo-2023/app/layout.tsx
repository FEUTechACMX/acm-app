import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "CS Expo 2023 2.0",
    description: "", //to follow
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Add the Inter font link here */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
                />

                {/* GlideJS's two CDN (both required) */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css"
                />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css"
                />

                <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
            </head>
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
