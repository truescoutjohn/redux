export const CHANGE_FILTER_TEXT = 'FILTER/CHANGE';

export const changeFilter = filterText => ({ type: CHANGE_FILTER_TEXT, payload: { filterText } });
