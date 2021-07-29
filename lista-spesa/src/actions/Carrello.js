const ADDING_PRODUCT_SUCCESS = "ADDING_PRODUCT_SUCCESS";
const ADDING_PRODUCT = "ADDING_PRODUCT";
const BOUGHT_ITEMS = "BOUGHT_ITEMS";
const BOUGHT_ITEMS_SUCCESS = "BOUGHT_ITEMS_SUCCESS";

export const addingProduct = (payload) => ({
  type: ADDING_PRODUCT,
  payload,
});

export const addingProductSuccess = (payload) => ({
  type: ADDING_PRODUCT_SUCCESS,
  payload,
});

export const buyItems = () => ({
  type: BOUGHT_ITEMS,
});
export const buyItemsSuccess = () => ({
  type: BOUGHT_ITEMS_SUCCESS,
});
