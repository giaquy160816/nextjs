"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { sidebarMenus } from "@/lib/sidebar-menu";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Sidebar() {
    const { data: session } = useSession();
    const email = session?.user?.email || "";
    const displayEmail = email.length > 22 ? email.slice(0, 19) + "..." : email;

    return (
        <aside className="w-64 bg-[#181c2f] text-white flex flex-col min-h-screen border-r border-neutral-800">
            {/* User Info */}
            <div className="flex flex-col items-center py-8 border-b border-neutral-700">
                <div className="w-16 h-16 rounded-full bg-neutral-700 mb-2" />
                <div className="font-bold text-lg">
                    {displayEmail || <span className="text-neutral-400">Chưa đăng nhập</span>}
                </div>
                {email && (
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="mt-2 px-3 py-1 text-xs bg-red-600 hover:bg-red-700 rounded text-white"
                    >
                        Logout
                    </button>
                )}
            </div>

            {/* Menu */}
            <nav className="flex-1 px-4 py-6">
                <Accordion type="multiple" className="w-full space-y-6">
                    {sidebarMenus.map(({ group, items }) => {
                        const GroupIcon = items[0]?.icon;

                        return (
                            <AccordionItem key={group} value={group} className="border-none mb-0">
                                <AccordionTrigger className="flex justify-between items-center px-3 py-2 rounded hover:bg-neutral-800 w-full">
                                    <div className="flex items-center gap-2">
                                        {GroupIcon && <GroupIcon className="w-4 h-4" />}
                                        <span className="uppercase text-sm font-semibold tracking-wider">{group}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 flex flex-col gap-0.5">
                                    {items.map(({ label, href, icon: Icon }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="flex items-center gap-2 py-1 px-2 rounded hover:bg-neutral-800"
                                        >
                                            {Icon && <Icon className="w-4 h-4" />}
                                            {label}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </nav>

            {/* Footer */}
            <div className="text-xs text-neutral-500 text-center py-4 border-t border-neutral-800">
                2025© HoaTang
            </div>
        </aside>
    );
}
