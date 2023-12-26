import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../slice/produtoSlice'

import * as GlobalStyles from './styles'

const ProdutosComponent = () => {
  const { data } = useGetProdutosQuery()

  return (
    <>
      <GlobalStyles.Produtos>
        {data &&
          data.map((produto) => <Produto key={produto.id} produto={produto} />)}
      </GlobalStyles.Produtos>
    </>
  )
}

export default ProdutosComponent
