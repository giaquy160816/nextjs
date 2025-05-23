"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/main/Sidebar";
import HeaderBar from "@/components/main/HeaderBar";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const excludeLayoutRoutes = ["/login", "/register", "/forgot-password"];
    const isAuthPage = excludeLayoutRoutes.includes(pathname);


    if (isAuthPage) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-900">
                {children}
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-neutral-900">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
                <HeaderBar />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
