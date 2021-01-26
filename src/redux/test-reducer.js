import autodux from 'autodux';

const {
  reducer,
  actions: {
    setCount,
  },
} = autodux({
  slice: 'test',
  initial: {
    count: 0,
  },
});

export {
  setCount,
};

export default reducer;
