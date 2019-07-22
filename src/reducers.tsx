import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

interface SearchFieldAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: string;
}

interface searchRobots {
  searchField: string;
}

const initialSearch: searchRobots = {
  searchField: ""
};

export const searchRobots = (
  state = initialSearch,
  action: SearchFieldAction
): searchRobots => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

interface requestRobots {
  isPending: boolean;
  robots: Array<{
    id: number;
    name: string;
    username: string;
    email: string;
  }>;
  error: string;
}

const initialRequest: requestRobots = {
  isPending: true,
  robots: [],
  error: ""
};

export const requestRobots = (
  state = initialRequest,
  action: any = {}
): requestRobots => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};
