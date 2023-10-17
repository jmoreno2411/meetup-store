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
