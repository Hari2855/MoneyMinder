const initialState = {
    title: '',
    amount: '',
    category: '',
  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TITLE':
        return { ...state, title: action.payload };
      case 'SET_AMOUNT':
        return { ...state, amount: action.payload };
      case 'SET_CATEGORY':
        return { ...state, category: action.payload };
      default:
        return state;
    }
  };
  
  export default expenseReducer;
  