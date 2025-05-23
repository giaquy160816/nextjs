// app/product/[slug]/page.tsx
import { Metadata } from "next";
import { getProductBySlug } from "@/lib/data";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
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

export default async function ProductPage({
    params,
}: {
    params: { slug: string };
}) {
    const product = await getProductBySlug(params.slug);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <p>{product?.description}</p>
        </div>
    );
}
