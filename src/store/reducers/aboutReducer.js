const initialState = [];

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ABOUT_INFO':
      return (state = action.payload);

    default:
      return initialState;
  }
};
