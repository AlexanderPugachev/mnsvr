import { RootState } from "store";
import { useSelector } from "react-redux";

const allCategoriesSelector = (state: RootState) => state.categories.categories;
export const useAllCategories = () => useSelector(allCategoriesSelector);
