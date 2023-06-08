export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const setSelectedTabSuccess = setSelectedTab => ({
  type: SET_SELECTED_TAB,
  payload: {
    selectedTab: setSelectedTab,
  },
});
export function setSelectedTab(selectedTab) {
  return dispatch => {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
}
