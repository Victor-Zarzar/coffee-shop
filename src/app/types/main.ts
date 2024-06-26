type Products = {
    photo: string;
    link: string;
};

type ProductType = {
    name: string;
    id: string,
    price: number | null;
    quantity?: number | 1;
    image: string; 
    description: string | null;
    currency: string;
}

export type { Products, ProductType };