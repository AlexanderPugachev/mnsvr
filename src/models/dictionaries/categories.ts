import { Category } from "../Category";

export const categoryDictionary: Category[] = [
  {
    name: "unknown",
    icon: "help-circle-outline",
    type: "EXPENSES"
  },
  {
    name: "food delivery",
    type: "EXPENSES",
    icon: "moped"
  },
  {
    name: "groceries",
    type: "EXPENSES",
    icon: "cart"
  },
  {
    name: "salary",
    type: "INCOME",
    icon: "cash"
  },
  {
    name: "bills",
    type: "EXPENSES",
    icon: "file-document-outline"
  },
  {
    name: "coffee",
    type: "EXPENSES",
    icon: "coffee"
  },
  {
    name: "gadgets",
    type: "EXPENSES",
    icon: "tablet-cellphone"
  },
  {
    name: "transport",
    type: "EXPENSES",
    icon: "bus"
  },
  {
    name: "gifts",
    type: "EXPENSES",
    icon: "hand-heart"
  }
];
