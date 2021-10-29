interface Product {
    id: string,
    images: string[],
    title: string,
    rating: number,
    price: number,
    category: string,
    brand: string
}

interface Filter {
    value: string,
    title: string
}

export {
    Product,
    Filter
}