export const state = () => ({
  theme: "dark",
});

export const mutations = {
  setTheme(state, theme) {
    console.log({ theme });
    state.theme = theme;
  },
};
