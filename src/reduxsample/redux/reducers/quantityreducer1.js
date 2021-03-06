import { ADD_ITEM, DEL_ITEM } from "../actions/actiondef";

const initialState = {
  itemTitles: ["default title", "Title1"]
};

const quantityReducer = (state = initialState, action) => {
  console.log(
    "3.a Quantity Reducer : ~~~ " + action.type + " :: " + action.itemTitle
  );
  switch (action.type) {
    case DEL_ITEM: {
      console.log("4.1.a Delete Title : " + state.itemTitles);

      let length = state.itemTitles.length;

      let returnState = {
        itemTitles: state.itemTitles.slice(0, length - 1)
      };

      console.log("4.2.a Delete State : : " + returnState.itemTitles);

      return returnState;
    }

    default: {
      console.log(" Reducer initialization : " + state.itemTitles);
      return state;
    }
  }
};

export default quantityReducer;
