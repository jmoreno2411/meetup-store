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

export const productCategories: Category[] = [
    {
        id: 'women',
        name: 'Mujer'
    },
    {
        id: 'men',
        name: 'Hombre'
    },
    {
        id: 'kids',
        name: 'Niño'
    }
]

export interface Category {
    id: 'men' | 'women' | 'kids';
    name: string;
}
