import Link from 'next/link'
import { Button } from "@/components/ui/button"


export default function NotFoundPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-900">Trang không tồn tại</p>
            <p className="mt-2 text-gray-600">Bạn có thể đã nhập sai URL hoặc trang đã bị xoá.</p>

            <Link href="/" className="mt-6">
                <Button variant="default">Quay lại trang chủ</Button>
            </Link>

            <div className="mt-10 w-[320px] md:w-[500px]">
                hinh 404
            </div>
        </div>
    )
}