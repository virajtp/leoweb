import { combineReducers } from 'redux';

import posts from './posts';
import blogs from './blogs';
import newsletter from './newsletter';

export const reducers = combineReducers({ posts , blogs , newsletter });
