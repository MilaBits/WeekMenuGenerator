export class Ingredient {

    id: number;
    name: string;
    amount: number;
    unit: string;
    // Ingredients

    constructor(name: string, amount: number, unit: string) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
    }
}
