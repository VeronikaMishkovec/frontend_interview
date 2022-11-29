import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CategoryType } from '../types'

export interface CategoryReducerType {
  list: CategoryType[];
}

const initialState: CategoryReducerType  = {
  list: []
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesListRequestAction:
      (state, action) => {}

  }
})

export const {
  categoriesListRequestAction,
} = categorySlice.actions

export default categorySlice.reducer
