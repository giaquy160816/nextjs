import { Metadata } from "next";
import { getProductBySlug } from "@/lib/data";

type Props = {
    params: { slug: string };
};

// ✅ Hàm này chạy trên server để tạo <title>, <meta> động
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = await getProductBySlug(params.slug);

    return {
        title: product?.name || "Sản phẩm",
        description: product?.description?.slice(0, 160) || "Chi tiết sản phẩm",
        openGraph: {
            title: product?.name,
            description: product?.description,
            images: [
                {
                    url: product?.thumbnail || "/default.jpg",
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

// ✅ Trang hiển thị chi tiết
export default async function ProductPage({ params }: Props) {
    const product = await getProductBySlug(params.slug);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <p>{product?.description}</p>
        </div>
    );
}
