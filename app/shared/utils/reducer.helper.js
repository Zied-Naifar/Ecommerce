export const filteringListAfterDeleting = (list, id) =>
  list.filter(item => id !== item.id);
// generic func

export const updateList = (list, newItem) => {
  const a = list.map(item => {
    if (newItem.id === item.id) {
      return newItem;
    }
    return item;
  });
  return a;
};
