export const setTitle = (title) => ({
    type: 'SET_TITLE',
    payload: title,
  });
  
  export const setAmount = (amount) => ({
    type: 'SET_AMOUNT',
    payload: amount,
  });
  
  export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category,
  });

  export const deleteExpense = (id) => {
    return {
        type: 'DELETE_EXPENSE',
        payload: id
    };
};
  