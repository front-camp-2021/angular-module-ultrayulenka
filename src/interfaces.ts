interface Product {
    id: string,
    images: string[],
    title: string,
    rating: number,
    price: number,
    category?: string,
    brand?: string
}

interface Filter {
    value: string,
    title: string
}

interface Slider {
    title: string
    min: number,
    max: number,
    prefix?: string,
    selected: {
      from: number,
      to: number
    },
    precision?: number
}

interface CartItem extends Product {
  quantity: number
}
  

export {
    Product,
    Filter,
    Slider,
    CartItem
}