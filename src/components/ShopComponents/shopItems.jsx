import React from 'react'
import ShopProducts from './shopProducts'
import { Products } from '../products'

const shopItems = ({ sortBy }) => {

  const [sortedProducts, setSortedProducts] = React.useState([...Products]);

  // Utiliza un efecto para ordenar los productos cuando sortBy cambia
  React.useEffect(() => {
    if (sortBy === 20) {
      // Ordenar por Price High To Low (de mayor a menor precio)
      const sorted = [...Products].sort((a, b) => b.price - a.price);
      setSortedProducts(sorted);
    } else if (sortBy === 30) {
      // Ordenar por Price Low To High (de menor a mayor precio)
      const sorted = [...Products].sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
    } else if (sortBy === 10) {
      // Ordenar aleatoriamente
      const shuffled = [...Products].sort(() => Math.random() - 0.5);
      setSortedProducts(shuffled);
    } else {
      // No hacer ninguna ordenación si no se selecciona una opción válida
      setSortedProducts([...Products]);
    }
  }, [sortBy]);

  return <>
    <div className="col d-flex flex-wrap">
      {sortedProducts.map((product) => (
        <ShopProducts key={product.id} data={product} />
      ))}
    </div>
  </>
}

export default shopItems