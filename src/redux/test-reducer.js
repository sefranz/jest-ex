import autodux from 'autodux';

const {
  reducer,
} = autodux({
  slice: 'test',
  initial: {
    count: 0,
  },
});

export default reducer;
