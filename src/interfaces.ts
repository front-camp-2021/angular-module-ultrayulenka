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
    min: number,
    max: number,
    prefix?: string,
    selected: {
      from: number,
      to: number
    },
    precision?: number
  }
  

export {
    Product,
    Filter,
    Slider
}