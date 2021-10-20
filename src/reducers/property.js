import { 
    FETCH_PROPERTY_LIST_REQUESTED,
    FETCH_PROPERTY_LIST_FAILURE,
    FETCH_PROPERTY_LIST_SUCCESS,
    REFRESH_PROPERTY_LIST
 } 
  from '../actions/property-action-types';

const initialState = {
  propertyListData: [],
  fetchPropertyListStatus: 'fetching',

};

export default function property(state = initialState, {
    payload, type,
  }) {
    switch (type) {
       case FETCH_PROPERTY_LIST_REQUESTED:
        return {
          ...state,
          fetchPropertyListStatus: "fetching",
        };
  
      case FETCH_PROPERTY_LIST_FAILURE:
        return {
          ...state,
          fetchPropertyListStatus: "failure",
        };
  
      case FETCH_PROPERTY_LIST_SUCCESS:
        return {
          ...state,
          propertyListData: payload,
          fetchPropertyListStatus: 'success'
        };
      
      case REFRESH_PROPERTY_LIST:
        return {
          ...state,
          propertyListData: [],
          fetchPropertyListStatus: "fetching",
        }
    
    default:
        return state;
    }
  }
