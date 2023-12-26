import * as GlobalStyles from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'

const Header = () => {
  const carrinho = useSelector((state: RootState) => state.carrinho)
  const favorito = useSelector((state: RootState) => state.favorito)

  const valorTotal = carrinho.reduce((adicionar, item) => {
    adicionar += item.preco
    return adicionar
  }, 0)

  return (
    <GlobalStyles.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorito.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </GlobalStyles.Header>
  )
}

export default Header
