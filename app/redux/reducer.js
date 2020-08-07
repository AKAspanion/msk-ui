import {
  SELECT_COMPONENT,
  SELECT_MODULE,
  SELECT_VARIANT,
  DESELECT_COMPONENT,
  SET_FORM_FACTOR
} from './actions';

import initialState from './initial-state';

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_COMPONENT: {
      localStorage.setItem('selected_component', action.value);

      const newState = {
        ...state,
        selectedComponent: action.value
      };
      return newState;
    }
    case DESELECT_COMPONENT: {
      localStorage.setItem('selected_component', null);
      localStorage.setItem('selected_variant', null);

      const newState = {
        ...state,
        selectedComponent: null,
        selectedVariant: null
      };
      return newState;
    }
    case SELECT_MODULE: {
      localStorage.setItem('selected_module', action.value);

      const newState = {
        ...state,
        selectedModule: action.value
      };
      return newState;
    }
    case SELECT_VARIANT: {
      localStorage.setItem('selected_variant', action.value);

      const newState = {
        ...state,
        selectedVariant: action.value
      };
      return newState;
    }
    case SET_FORM_FACTOR: {
      localStorage.setItem('form_factor', action.value);
      const newState = {
        ...state,
        formFactor: action.value
      };
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
