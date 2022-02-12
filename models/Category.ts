
const CategoryTypeCodeValues = [
    'INCOME',
    'OUTCOME'
] as const;

type CategoryTypeCode = typeof CategoryTypeCodeValues[number]


const categoryCodeValues = [
    'FOOD_DELIVERY',
    'GROCERIES',
] as const;

type CategoryCode = typeof categoryCodeValues[number]

export interface Category {
    code: CategoryCode;
    name: string;
    typeCode: CategoryTypeCode;
}