import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import { favoritar } from '../../slice/favoritoSlice'
import { addToCart } from '../../slice/carrinhoSlice'
import * as GlobalStyles from './styles'
import { RootState } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootState) => state.favorito)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((fav) => fav.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <GlobalStyles.Produto>
      <GlobalStyles.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </GlobalStyles.Capa>
      <GlobalStyles.Titulo>{produto.nome}</GlobalStyles.Titulo>
      <GlobalStyles.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </GlobalStyles.Prices>
      <GlobalStyles.BtnComprar
        onClick={() => dispatch(favoritar(produto))}
        type="button"
      >
        {produtoEstaNosFavoritos(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </GlobalStyles.BtnComprar>
      <GlobalStyles.BtnComprar
        onClick={() => dispatch(addToCart(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </GlobalStyles.BtnComprar>
    </GlobalStyles.Produto>
  )
}

export default ProdutoComponent
