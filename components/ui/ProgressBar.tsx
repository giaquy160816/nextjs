"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, trickleSpeed: 100 });
    NProgress.start();
    // Kết thúc progress sau một khoảng delay nhỏ để tránh nháy
    const timer = setTimeout(() => {
      NProgress.done();
    }, 400);
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
} 