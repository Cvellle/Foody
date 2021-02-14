export const fetchItems = () => (dispatch) => {
  const url = "data/items.json";
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setItems(json));
      dispatch(setLoading(false));
    });
};

export const setLoading = (loading) => {
  return {
    type: "SET_LOADING",
    loading,
  };
};

export const setItems = (items) => ({
  type: "SET_ITEMS",
  items,
});

export const setFiltered = (filtered) => {
  return {
    type: "SET_FILTERED",
    filtered,
  };
};

export const fiterByCategory = (category) => ({
  type: "FILTER_BY_CATEGORY",
  category,
});

export const filterItems = (critreria) => ({
  type: "FILTER_ITEMS",
  critreria,
});

export const filterItemsSearch = (fiterSearch) => ({
  type: "FILTER_ITEMS_SEARCH",
  fiterSearch,
});

export const fiterByCatInSearch = (ctg) => ({
  type: "FILTER_BY_CAT_IN_SEARCH",
  ctg,
});

export const selectItem = (selected) => ({
  type: "SELECT_ITEM",
  selected,
});

export const clickItem = (selected) => (dispatch) => {
  dispatch(selectItem(selected));
};

export const setSearchingTrue = (setSearch) => ({
  type: "SET_SEARCH_TRUE",
  setSearch,
});

export const showSearchDesc = (searchDesc) => ({
  type: "SHOW_SEARCH_DESC",
  searchDesc,
});

export const aboutScrollAction = (about) => ({
  type: "ABOUT_SCROLL",
  about,
});

export const contactScrollAction = (contact) => ({
  type: "CONTACT_SCROLL",
  contact,
});

export const homeSrollAction = (homescr) => ({
  type: "HOME_SCROLL",
  homescr,
});
