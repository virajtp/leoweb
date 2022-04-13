import { FETCH_ALL_PAGES, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (newsletters = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PAGES:
      return action.payload;
    case LIKE:
      return newsletters.map((newsletter) => (newsletter._id === action.payload._id ? action.payload : newsletter));
    case CREATE:
      return [...newsletters, action.payload];
    case UPDATE:
      return newsletters.map((newsletter) => (newsletter._id === action.payload._id ? action.payload : newsletter));
    case DELETE:
      return newsletters.filter((newsletter) => newsletter._id !== action.payload);
    default:
      return newsletters;
  }
};

