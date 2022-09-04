import React from 'react'
import '../ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <div className='itemDetail'>
  
      <h2>{product}</h2>
      <h3>aca va el precio</h3>
      <button>agregar al carrito</button>

    </div>
  )
}

export default ItemDetail
