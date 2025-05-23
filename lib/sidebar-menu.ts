import { LayoutDashboard, Layers, FileText, BookOpen, ImageIcon, Mail, UserPlus } from "lucide-react";

export const sidebarMenus = [
    {
        group: "DASHBOARD",
        items: [
            { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        ],
    },
    {
        group: "DATA",
        items: [
            { label: "Product", href: "/product", icon: Layers },
            { label: "Category", href: "/product-category", icon: FileText },
            { label: "Attribute", href: "/product-attribute", icon: FileText },
            { label: "Value", href: "/product-attribute-value", icon: ImageIcon },
        ],
    },
    {
        group: "ACCOUNT",
        items: [
            { label: "User", href: "/user", icon: Mail },
            { label: "Profile", href: "/profile", icon: UserPlus },
        ],
    },
];
