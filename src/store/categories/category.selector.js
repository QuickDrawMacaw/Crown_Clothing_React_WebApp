export const selectCategoriesMap = (state) => {
  console.log("selector fired");
  return state.categories.categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
};
