const initialState = {
  itemsList: [],
  loading: false,
  boughtItems: false,
};
const ShoppingChartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADDING_PRODUCT":
      return {
        ...state,
        loading: true,
      };
    case "ADDING_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        itemsList: [...state.itemsList, payload],
      };
    case "BOUGHT_ITEMS":
      return {
        ...state,
        boughtItems: true,
      };
    case "BOUGHT_ITEMS_SUCCESS":
      return {
        ...state,
        itemsList: [],
        boughtItems: false,
      };

    default:
      return state;
  }
};

export default ShoppingChartReducer;
