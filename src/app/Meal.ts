import { User } from './User';
import { Recipe } from './Recipe';

export class Meal {
    id: number;
    date: Date;
    participants: Array<User>;
    recipe: Recipe;
}
