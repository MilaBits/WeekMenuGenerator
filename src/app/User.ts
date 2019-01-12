import { Ingredient } from './Ingredient';

export class User {
    id: number;
    name: string;
    image: string;
    foodRestrictions: Array<Ingredient>;

    constructor(id: number, name: string, image: string, foodRestrictions: Array<Ingredient>) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.foodRestrictions = foodRestrictions;
    }
}
