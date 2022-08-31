import React from 'react'

const ItemList = ({ items}) => {
  return (
    <div className={styles.containerCard}>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  )
}

export default ItemList;

