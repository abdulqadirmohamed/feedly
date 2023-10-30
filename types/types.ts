import { type } from "os"


export type TPosts = {
    id: string,
    title: string,
    content: string,
    categoryName?: string,
    author?: string,
    featureImage?: string
}

export type TCategory = {
    id: string,
    categoryName: string,
}