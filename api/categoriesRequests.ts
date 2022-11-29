import { API } from '../constants/api'

import api, { METHOD_POST } from './axois'

export const categoriesListRequest = () => {
  return api(API.CATEGORIES_LIST, METHOD_POST, {}, 'categories list');
};
