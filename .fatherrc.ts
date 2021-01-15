export default {
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
};
