import { IconName } from "components";

const CategoryTypeCodeValues = ["INCOME", "EXPENSES"] as const;

type CategoryDirection = typeof CategoryTypeCodeValues[number];

export const utilsCategoryNameValues = ["unknown"];

type UtilsCategoryName = typeof utilsCategoryNameValues[number];

export interface Category {
  name: UtilsCategoryName | string;
  direction: CategoryDirection;
  icon: IconName;
}
