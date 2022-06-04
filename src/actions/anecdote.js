import { FETCH_ALL_PAGES, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPages();
    console.log("pages fetch");
    dispatch({ type: FETCH_ALL_PAGES, payload: data });
  } catch (error) {
    console.log("pages fetch error");
    console.log(error.message);
  }
};

export const createPages = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPages(post);
    dispatch({ type: CREATE, payload: data });
    console.log("action came");
  } catch (error) {
    console.log("action error");
    console.log(error.message);
  }
};

export const updatePages = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProject(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
