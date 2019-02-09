const initialState = {
    issData: {},
    googleData: {}
  }
  
  const iss = (state = initialState, action) => {
    switch (action.type) {
        case 'ISS_FETCH_SUCCESS':
        console.log(action);
        return {
            ...state,
            issData: action.payload
        };
        case 'ISS_FETCH_FAILED':
        console.log(action);
        return {
            ...state,
            issDataError: action.message
        };
        case 'GOOGLE_FETCH_SUCCESS':
        console.log('GOOGLE_FETCH_SUCCESS', action.payload);
        return {
            ...state,
            googleData: action.payload
        };
        case 'GOOGLE_FETCH_FAILED':
        return {
            ...state,
            issDataError: action.message
        };
      default:
        return state;
    }
  };
  
  export default iss;