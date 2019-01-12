import { Meal } from '../Meal';
import { User } from '../User';
import { Recipe } from '../Recipe';
import { Ingredient } from '../Ingredient';

export const MEALS: Meal[] = [
    {
        id: -1,
        date: new Date(2018, 8, 10),
        participants: User[4] = [
            {
                id: -1,
                name: 'Milly',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Sugar', amount: 20, unit: 'g' }, { id: 0, name: 'Salt', amount: 10, unit: 'g' }, { id: 0, name: 'Milk', amount: null, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Guest',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            },
            {
                id: -1,
                name: 'Lea',
                image: '../../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Salt', amount: 10, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Erika',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            }],
        recipe: new Recipe('Pasta', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
    {
        id: -1,
        date: new Date(2018, 8, 11),
        participants: User[4] = [
            {
                id: -1,
                name: 'Milly',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Sugar', amount: 20, unit: 'g' }, { id: 0, name: 'Salt', amount: 10, unit: 'g' }, { id: 0, name: 'Milk', amount: null, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Guest',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            }],
        recipe: new Recipe('soup', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
    {
        id: -1,
        date: new Date(2018, 8, 12),
        participants: User[4] = [
            {
                id: -1,
                name: 'Milly',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Sugar', amount: 20, unit: 'g' }, { id: 0, name: 'Salt', amount: 10, unit: 'g' }, { id: 0, name: 'Milk', amount: null, unit: 'g' }]
            }],
        recipe: new Recipe('More Soup', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
    {
        id: -1,
        date: new Date(2018, 8, 13),
        participants: User[4] = [
            {
                id: -1,
                name: 'Lea',
                image: '../../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Salt', amount: 10, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Erika',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            }],
        recipe: new Recipe('Steak thing', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
    {
        id: -1,
        date: new Date(2018, 8, 14),
        participants: User[4] = [
            {
                id: -1,
                name: 'Guest',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            },
            {
                id: -1,
                name: 'Lea',
                image: '../../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Salt', amount: 10, unit: 'g' }]
            }],
        recipe: new Recipe('Pancakes', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
    {
        id: -1,
        date: new Date(2018, 8, 15),
        participants: User[4] = [
            {
                id: -1,
                name: 'Milly',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Sugar', amount: 20, unit: 'g' }, { id: 0, name: 'Salt', amount: 10, unit: 'g' }, { id: 0, name: 'Milk', amount: null, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Lea',
                image: '../../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Salt', amount: 10, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Erika',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            }],
        recipe: new Recipe('Dinnerfood', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
    {
        id: -1,
        date: new Date(2018, 8, 16),
        participants: User[4] = [
            {
                id: -1,
                name: 'Lea',
                image: '../../../assets/blank-avatar.png',
                foodRestrictions: [{ id: 0, name: 'Salt', amount: 10, unit: 'g' }]
            },
            {
                id: -1,
                name: 'Erika',
                image: '../../assets/blank-avatar.png',
                foodRestrictions: Array<Ingredient>()
            }],
        recipe: new Recipe('Casserole', 'teeest', new Array<Ingredient>(
            new Ingredient('Sugar', 10, 'g'),
            new Ingredient('Milk', 50, 'g'),
            new Ingredient('Milk', 50, 'g')))
    },
];
