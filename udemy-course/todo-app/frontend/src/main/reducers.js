import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'read a book',
    list: [
      {
        _id: 1,
        description: 'pay card bill',
        done: true
      },
      {
        _id: 2,
        description: 'pay card bill',
        done: false
      },
      {
        _id: 3,
        description: 'pay card bill',
        done: false
      },
    ]
  })
});

export default rootReducer;
