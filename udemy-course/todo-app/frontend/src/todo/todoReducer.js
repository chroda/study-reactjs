const INITIAL_STATE = {
  description: 'type something',
  list: [
    {
      _id: 1,
      description: 'an mocked example',
      done: true
    },
    {
      _id: 2,
      description: 'another simple mocky',
      done: false
    },
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return {...state, description: action.payload};
    default:
      return state;
  }
}
