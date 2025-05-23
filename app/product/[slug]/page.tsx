// app/product/[slug]/page.tsx
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params
    return {
        title: `Slug: ${slug}`,
    };
}


export default async function Page({ params }: Props) {
    const { slug } = await params
    return (
        <div>
            <h1>Chi tiết sản phẩm: {slug}</h1>
        </div>
    );
}
