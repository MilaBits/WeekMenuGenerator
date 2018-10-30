import { Ingredient } from './Ingredient';

export class Recipe {

    name: string;
    description: string;
    ingredients: Array<Ingredient>;

    constructor(name: string, description: string, ingredients: Array<Ingredient>) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
    }
}
