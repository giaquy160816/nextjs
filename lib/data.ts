// lib/data.ts
export async function getProductBySlug(slug: string) {
    return {
        name: `Sản phẩm ${slug}`,
        description: `Mô tả chi tiết về sản phẩm ${slug}.`,
        thumbnail: "https://via.placeholder.com/800x600.png?text=Product",
    };
}
