import { User } from './User';
import { Recipe } from './Recipe';

export class Meal {
    date: Date;
    participants: Array<User>;
    recipe: Recipe;
}
