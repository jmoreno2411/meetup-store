export interface Product {
    title: string;
    slug: string;
    price: number;
    category: 'men' | 'women' | 'kids';
    description?: string;
    imageSrc?: string;
    colors?: string[];
    sizes?: number[];
    tag?: string;
}
