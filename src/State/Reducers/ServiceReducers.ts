import {
  EService,
  ServiceDispatchType,
  ServiceType,
} from "../ActionTypes/ServiceActionTypes";

export interface defaultState {
  loading: boolean;
  error?: Error;
  current: ServiceType[];
}

const initialState: defaultState = {
  loading: false,
  current: [],
};

const ServiceReducer = (
  state: defaultState = initialState,
  action: ServiceDispatchType
) => {
  switch (action.type) {
    case EService.ADD_LOADING:
      return {
        loading: true,
        current: state.current,
      };

    case EService.ADD_SUCCESS:
      return {
        loading: false,
        current: [...state.current, action.payload],
      };

    case EService.ADD_ERROR:
      return {
        loading: false,
        current: state.current,
        error: action.error,
      };

    case EService.GET_LOADING:
      return {
        loading: true,
        current: state.current,
      };

    case EService.GET_SUCCESS:
      return {
        loading: false,
        current: action.payload,
      };

    case EService.GET_ERROR:
      return {
        loading: false,
        current: state.current,
        error: action.error,
      };

    default:
      return {
        loading: false,
        current: state.current,
      };
  }
};

export default ServiceReducer;
