import {
  EReports,
  IReportDispatchType,
  ReportsType,
} from "../ActionTypes/ReportsActionTypes";

export interface defaultState {
  loading: boolean;
  error?: Error;
  current: ReportsType[];
  rootData: ReportsType[];
}

const initialState: defaultState = {
  loading: false,
  current: [],
  rootData: [],
};

const ReportsReducers = (
  state: defaultState = initialState,
  action: IReportDispatchType
) => {
  switch (action.type) {
    case EReports.GET_LOADING:
      return {
        loading: true,
        current: state.current,
        rootData: state.current,
      };

    case EReports.GET_SUCCESS:
      return {
        loading: false,
        current: action.payload,
        rootData: action.payload,
      };

    case EReports.GET_ERROR:
      return {
        loading: false,
        current: state.current,
        rootData: state.rootData,
        error: action.error,
      };

    case EReports.GET_WITH_FILTER_LOADING:
      return {
        loading: true,
        current: state.current,
        rootData: state.rootData,
      };

    case EReports.GET_WITH_FILTER_SUCCESS:
      return {
        loading: false,
        current: action.payload,
        rootData: state.rootData,
      };

    case EReports.GET_WITH_FILTER_ERROR:
      return {
        loading: false,
        current: state.current,
        rootData: state.rootData,
        error: action.error,
      };

    default:
      return {
        loading: false,
        current: state.current,
        rootData: state.rootData,
      };
  }
};

export default ReportsReducers;
