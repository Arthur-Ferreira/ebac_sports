import { configureStore } from '@reduxjs/toolkit'
import carrinho from '../slice/carrinhoSlice'
import favorito from '../slice/favoritoSlice'
import { produtos } from '../slice/produtoSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    carrinho: carrinho,
    favorito: favorito,
    [produtos.reducerPath]: produtos.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtos.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
