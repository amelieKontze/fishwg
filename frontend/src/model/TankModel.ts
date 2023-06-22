import {Fish} from "./FishModel";

export type Tank = {
    id: string,
    name: string,
    waterType: string,
    tankSizeInLitres: number,
    tankTemperature: number,
    residentFish: Fish[],
    tankPh: number
}