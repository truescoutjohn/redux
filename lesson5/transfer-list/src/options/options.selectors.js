export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = state => {
  const options = optionsListSelector(state);
  const selected = selectedIdsSelector(state);

  return options.filter(option => selected.includes(option.id));
};

export const availableOptionsSelector = state => {
  const options = optionsListSelector(state);
  const selected = selectedIdsSelector(state);

  return options.filter(option => !selected.includes(option.id));
};
