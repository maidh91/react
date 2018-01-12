import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');  // convert array to object, { id: arr[0], id: arr[1], ... }
    case FETCH_POST:
      const post = action.payload.data;
      // newState[post.id] = post
      return { ...state, [post.id]: post };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
