// app/product/[slug]/page.tsx
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    return {
        title: `Slug: ${params.slug}`,
    };
}

export default async function Page({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div>
            <h1>Chi tiết sản phẩm: {params.slug}</h1>
        </div>
    );
}
