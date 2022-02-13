import { IconName } from "components/Icon";

const CategoryTypeCodeValues = ["INCOME", "EXPENSES"] as const;

type CategoryTypeCode = typeof CategoryTypeCodeValues[number];

const categoryNameValues = [
  "food delivery",
  "groceries",
  "salary",
  "transport",
  "gifts",
  "gadgets",
  "bills",
  "coffee"
] as const;

type CategoryName = typeof categoryNameValues[number];

export interface Category {
  name: CategoryName;
  type: CategoryTypeCode;
  icon: IconName;
}
