import { User } from '../User';
import { Ingredient } from '../Ingredient';

export const PEOPLE: User[] = [
    // tslint:disable-next-line:max-line-length
    { name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Sugar', amount: 20 }, { name: 'Salt', amount: 10 }, { name: 'Milk', amount: null }] },
    { name: 'Guest', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() },
    { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ name: 'Salt', amount: 10 }] },
    { name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }];
