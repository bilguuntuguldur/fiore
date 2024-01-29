export interface Flower {
    id: number;
    flowerCode: string;
    flowerTitle: string | null;
    flowerImage: string;
    flowerPrice: number;
    isActive: boolean | null;
    flowerType: string | null;
    flowerCategory: number;
    flowerDesc: string;
}