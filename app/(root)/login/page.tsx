import { SEO } from "@/lib/seo";
import { LoginForm } from "@/app/(root)/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO.login.title,
    description: SEO.login.description,
};

export default function LoginPage() {
    return <LoginForm />;
}
