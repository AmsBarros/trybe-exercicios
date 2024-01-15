type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
    clicks: 0,
    count: 0,
};

function counterReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'INCREMENT_CLICKS':
      return {
        ...state,
        clicks: state.clicks + 1,
      }
    default:
      return state;
  }
}

export default counterReducer;
