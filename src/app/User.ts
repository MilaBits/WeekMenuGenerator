import { Ingredient } from './Ingredient';

export class User {
    name: string;
    image: string;
    foodRestrictions: Array<Ingredient>;

    constructor(name: string, image: string, foodRestrictions: Array<Ingredient>) {
        this.name = name;
        this.image = image;
        this.foodRestrictions = foodRestrictions;
    }
}
