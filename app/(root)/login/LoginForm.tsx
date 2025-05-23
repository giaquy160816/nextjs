"use client";
import { signIn } from "next-auth/react";
export function LoginForm() {
    return (
        <div className="min-h-screen  flex items-center justify-center px-4">
            <div className="bg-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-700/30 backdrop-blur-lg w-full max-w-md relative transition-transform hover:scale-[1.02]">
                <div className="flex flex-col items-center mb-8">
                    {/* Logo Google hoặc app */}
                    <div className="bg-white rounded-full p-3 shadow-lg mb-4 border-4 border-blue-100">
                        <svg className="w-14 h-14" viewBox="0 0 48 48">
                            <g>
                                <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.87-6.87C36.68 2.13 30.7 0 24 0 14.82 0 6.71 5.13 2.18 12.93l7.98 6.21C12.13 13.13 17.62 9.5 24 9.5z" />
                                <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.74H24v9.01h12.41c-.54 2.9-2.18 5.36-4.66 7.01l7.2 5.6C43.98 37.13 46.1 31.36 46.1 24.55z" />
                                <path fill="#FBBC05" d="M9.16 28.14c-1.09-3.23-1.09-6.74 0-9.97l-7.98-6.21C-1.13 17.13-1.13 30.87 1.18 35.07l7.98-6.21z" />
                                <path fill="#EA4335" d="M24 46c6.7 0 12.68-2.13 17.06-5.86l-7.2-5.6c-2.01 1.35-4.56 2.16-7.86 2.16-6.38 0-11.87-3.63-14.84-8.64l-7.98 6.21C6.71 42.87 14.82 48 24 48z" />
                                <path fill="none" d="M0 0h48v48H0z" />
                            </g>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Welcome Back!</h1>
                    <p className="text-neutral-200 text-base mb-2 text-center max-w-xs">Đăng nhập để tiếp tục sử dụng hệ thống quản trị của bạn.</p>
                </div>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="w-full bg-white text-gray-900 py-3 px-4 rounded-full flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 cursor-pointer"
                >
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Đăng nhập với Google
                </button>
            </div>
        </div>
    );
} 