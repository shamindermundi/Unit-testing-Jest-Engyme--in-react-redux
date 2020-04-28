import { applyMiddleware, createStore } from "redux";
import rootreducer from "./../src/reducers/Index";
import { middlewares } from "./../src/createStore";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootreducer, initialState);
};
