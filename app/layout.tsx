import "@/app/globals.css";
import { AuthProvider } from "@/app/providers";
import ConditionalLayout from "@/components/main/ConditionalLayout";
import { SEO } from "@/lib/seo";
import ProgressBar from "@/components/ui/ProgressBar";


export const metadata = {
    title: SEO.dashboard.title,
    description: SEO.dashboard.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-neutral-900">
                <ProgressBar />
                <AuthProvider>
                    <ConditionalLayout>{children}</ConditionalLayout>
                </AuthProvider>
            </body>
        </html>
    );
}
