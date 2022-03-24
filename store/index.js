export const state = () => ({
  theme: "light",
});

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  },
};
