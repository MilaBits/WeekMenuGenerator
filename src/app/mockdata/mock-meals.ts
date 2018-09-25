import { Meal } from '../Meal';
import { User } from '../User';
import { Recipe } from '../Recipe';

export const MEALS: Meal[] = [
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('Wraps', 'teeest') },
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('Soup', 'teeest') },
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('soup', 'teeest') },
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('Pasta', 'teeest') },
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('Pizza', 'teeest') },
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('Toast', 'teeest') },
    { date: new Date(), participants: Array<User>(), recipe: new Recipe('Fancy Pasta!', 'teeest') },
];
