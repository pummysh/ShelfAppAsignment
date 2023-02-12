import { CONTACT } from "../configs/types";

const initialState = {
  groupData: [],
};

export const groupReducer = (state = initialState, action) => {
  switch (action?.type) {
    case CONTACT.SET_GROUP_DATA:
      return {
        ...state,groupData:[...state.groupData,action.payload]
      }
    default:
      return state;
  }
};
