import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

const initialState: Produto[] = []

export const favorito = createSlice({
  name: 'produto',
  initialState,

  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      if (state.find((product) => product.id === action.payload.id)) {
        const favoritosVazio = state.filter(
          (product) => product.id !== action.payload.id
        )
        return favoritosVazio
      } else {
        return [...state, action.payload]
      }
    }
  }
})

export const { favoritar } = favorito.actions
export default favorito.reducer
