import { User } from '../User';
import { Ingredient } from '../Ingredient';

export const PEOPLE: User[] = [
    // tslint:disable-next-line:max-line-length
    { name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{id: 0, name: 'Sugar', amount: 20 , unit: 'g'}, {id: 0, name: 'Salt', amount: 10 , unit: 'mg'}, {id: 0, name: 'Milk', amount: 25 , unit: 'ml'}] },
    { name: 'Guest', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() },
    { name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{id: 0, name: 'Salt', amount: 10 , unit: 'mg'}] },
    { name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }];
