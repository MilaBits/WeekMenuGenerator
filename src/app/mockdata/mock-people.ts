import { User } from '../User';
import { Ingredient } from '../Ingredient';

export const PEOPLE: User[] = [
    // tslint:disable-next-line:max-line-length
    { id: -1, name: 'Milly', image: '../../assets/blank-avatar.png', foodRestrictions: [{ id: 0, name: 'Sugar', amount: 20, unit: 'g' }, { id: 0, name: 'Salt', amount: 10, unit: 'mg' }, { id: 0, name: 'Milk', amount: 25, unit: 'ml' }] },
    { id: -1, name: 'Guest', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() },
    { id: -1, name: 'Lea', image: '../../../assets/blank-avatar.png', foodRestrictions: [{ id: 0, name: 'Salt', amount: 10, unit: 'mg' }] },
    { id: -1, name: 'Erika', image: '../../assets/blank-avatar.png', foodRestrictions: Array<Ingredient>() }];
