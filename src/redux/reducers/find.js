/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

export const find = (state = [], action) => {
  let newArray;

  switch (action.type) {
    case 'ALL':
      state = action.payload;

      return state;

    case 'COMPL':
      state = action.payload;

      newArray = state.filter((data) => data.done === true);

      console.log(`COMPLETED ${newArray.length}`);

      return newArray;
  }
  return state;
};
