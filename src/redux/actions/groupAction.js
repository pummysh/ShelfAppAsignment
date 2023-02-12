import {CONTACT} from '../configs/types';

export const setGroupData = payload => ({
  type: CONTACT.SET_GROUP_DATA,
  payload,
});
