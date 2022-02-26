import { RootState } from "store";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { utilsCategoryNameValues } from "models";

const allCategoriesSelector = (state: RootState) => state.categories.categories;
export const useAllCategories = () => useSelector(allCategoriesSelector);

export const useAllUserCategories = () =>
  useSelector(
    createSelector(allCategoriesSelector, (categories) =>
      categories.filter((it) => !utilsCategoryNameValues.includes(it.name))
    )
  );
