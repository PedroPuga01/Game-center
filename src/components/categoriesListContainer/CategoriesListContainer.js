import React from 'react';
import Item from '../Item/Item';

const CategoriesListContainer = ({ category, productos }) => {
  const filtro = productos.filter((producto) => producto.category === category);
  console.log(filtro[0].img);

  return (
    <div className="product-list-container">
      {filtro.map(({ title, price, img, description, stock, id }) => {
        return (
          <Item
            title={title}
            price={price}
            img={img}
            stock={stock}
            description={description}
            id={id}
          />
        );
      })}
      <Item />
    </div>
  );
};

export default CategoriesListContainer;
