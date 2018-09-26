import { Meal } from '../Meal';
import { User } from '../User';
import { Recipe } from '../Recipe';
import { Ingredient } from '../Ingredient';

export const MEALS: Meal[] = [
    {
        date: new Date(2018, 8, 10),
        participants: User[4] = [
            // tslint:disable-next-line:max-line-length
            { name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Sugar', amount: 20 }, { name: 'Salt', amount: 10 }, { name: 'Milk', amount: null }] },
            { name: 'Guest', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() },
            { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Salt', amount: 10 }] },
            // tslint:disable-next-line:max-line-length
            { name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }],
        recipe: new Recipe('Wraps', 'teeest')
    },
    {
        date: new Date(2018, 8, 11),
        participants: User[4] = [
            // tslint:disable-next-line:max-line-length
            { name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Sugar', amount: 20 }, { name: 'Salt', amount: 10 }, { name: 'Milk', amount: null }] },
            { name: 'Guest', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }],
        recipe: new Recipe('Soup', 'teeest')
    },
    {
        date: new Date(2018, 8, 12),
        participants: User[4] = [
            // tslint:disable-next-line:max-line-length
            { name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Sugar', amount: 20 }, { name: 'Salt', amount: 10 }, { name: 'Milk', amount: null }] }],
        recipe: new Recipe('soup', 'teeest')
    },
    {
        date: new Date(2018, 8, 13),
        participants: User[4] = [
            { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Salt', amount: 10 }] },
            // tslint:disable-next-line:max-line-length
            { name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }],
        recipe: new Recipe('Pasta', 'teeest')
    },
    {
        date: new Date(2018, 8, 14),
        participants: User[4] = [
            { name: 'Guest', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() },
            { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Salt', amount: 10 }] }],
        recipe: new Recipe('Pizza', 'teeest')
    },
    {
        date: new Date(2018, 8, 15),
        participants: User[4] = [
            // tslint:disable-next-line:max-line-length
            { name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Sugar', amount: 20 }, { name: 'Salt', amount: 10 }, { name: 'Milk', amount: null }] },
            { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Salt', amount: 10 }] },
            // tslint:disable-next-line:max-line-length
            { name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }],
        recipe: new Recipe('Toast', 'teeest')
    },
    {
        date: new Date(2018, 8, 16),
        participants: User[4] = [
            { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Salt', amount: 10 }] },
            // tslint:disable-next-line:max-line-length
            { name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }],
        recipe: new Recipe('Fancy Pasta!', 'teeest')
    },
];
