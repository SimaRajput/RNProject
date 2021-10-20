import { createAction } from 'redux-actions';

export const FETCH_PROPERTY_LIST = 'FETCH_PROPERTY_LIST ';
export const fetchPropertyList = createAction(FETCH_PROPERTY_LIST);

export const FETCH_PROPERTY_LIST_FAILURE = 'FETCH_PROPERTY_LIST_FAILURE';
export const fetchPropertyListFailure = createAction(FETCH_PROPERTY_LIST_FAILURE);

export const FETCH_PROPERTY_LIST_REQUESTED = 'FETCH_PROPERTY_LIST_REQUESTED';
export const fetchPropertyListRequested = createAction(FETCH_PROPERTY_LIST_REQUESTED);

export const FETCH_PROPERTY_LIST_SUCCESS = 'FETCH_PROPERTY_LIST_SUCCESS';
export const fetchPropertyListSuccess = createAction(FETCH_PROPERTY_LIST_SUCCESS);

export const REFRESH_PROPERTY_LIST = 'REFRESH_PROPERTY_LIST';
export const refreshPropertyList = createAction(REFRESH_PROPERTY_LIST);