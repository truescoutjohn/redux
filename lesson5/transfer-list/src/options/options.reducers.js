import { TOGGLE_OPTION } from './options.actions';

const initialState = {
  options: {
    optionsList: [
      {
        id: 'id-0',
        name: '19-inch wheels',
      },
      {
        id: 'id-1',
        name: 'Leather-trimmed Sport Seats',
      },
      {
        id: 'id-2',
        name: 'B&O Sound System',
      },
      {
        id: 'id-3',
        name: 'Adaptive Cruise Control',
      },
      {
        id: 'id-4',
        name: 'Daytime running lights',
      },
      {
        id: 'id-5',
        name: 'Auto High-Beam Headlamps',
      },
      {
        id: 'id-6',
        name: 'Carbon Sport Interior',
      },
    ],
    selected: [],
  },
};

export const toggleOption = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const { selected } = state.options;
      const newSelected = selected.includes(optionId)
        ? selected.filter(selectId => selectId !== optionId)
        : selected.concat(optionId);

      return {
        ...state,
        options: { ...state.options, selected: newSelected },
      };
    }
    default: {
      return state;
    }
  }
};
