const { createSlice } = require('@reduxjs/toolkit')

const localData = localStorage.getItem('theme')

console.log(localData)

const initialState = {
  theme: localData ?? 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, { payload }) {
      state.theme = payload
    },
  },
})

export const themeActions = themeSlice.actions

export default themeSlice.reducer
