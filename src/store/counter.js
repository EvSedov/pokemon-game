export const plusAction = (amound) => {
  return {
    type: 'PLUS',
    pyload: amound
  };
};

export const minusAction = (amound) => {
  return {
    type: 'MINUS',
    pyload: amound
  };
};

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'PLUS':
      return {
        ...state,
        value: state.value + action.pyload
      };
    case 'MINUS':
      return {
        ...state,
        value: state.value - action.pyload
      };
    default:
      return state;
  }
};

export default counter;
