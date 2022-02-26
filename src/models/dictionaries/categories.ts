import { Category } from "../Category";

export const unknownCategory: Category = {
  name: "unknown",
  icon: "help-circle-outline",
  direction: "EXPENSES"
};

export const categoryDictionary: Category[] = [
  unknownCategory,
  {
    name: "food delivery",
    direction: "EXPENSES",
    icon: "moped"
  },
  {
    name: "groceries",
    direction: "EXPENSES",
    icon: "cart"
  },
  {
    name: "salary",
    direction: "INCOME",
    icon: "cash"
  },
  {
    name: "bills",
    direction: "EXPENSES",
    icon: "file-document-outline"
  },
  {
    name: "coffee",
    direction: "EXPENSES",
    icon: "coffee"
  },
  {
    name: "gadgets",
    direction: "EXPENSES",
    icon: "tablet-cellphone"
  },
  {
    name: "transport",
    direction: "EXPENSES",
    icon: "bus"
  },
  {
    name: "gifts",
    direction: "EXPENSES",
    icon: "hand-heart"
  }
];
