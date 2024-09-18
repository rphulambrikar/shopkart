
import { createStore } from 'redux';

const initialState = {
  isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      sessionStorage.setItem('isLoggedIn', 'true'); // Store in session storage
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      sessionStorage.removeItem('isLoggedIn'); // Remove from session storage
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};




const store = createStore(authReducer);
export default store;
