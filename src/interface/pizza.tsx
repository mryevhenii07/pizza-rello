
export type PizzaSizes = 24 | 32 | 42;

export interface MyPizza {
    id: string,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[] // OR PizzaSizes[],
    price: number,
    category: number,
    rating: number,
    info:string,
    count?:number
    
}
