import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../../asyncMock';
import { useCart } from '../CartContext/CartContext'; // Importamos el contexto del carrito
import './ItemListContainer.css'; // Importamos el archivo de estilos CSS

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const { addToCart } = useCart(); // Obtenemos la función para agregar al carrito

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const categoryProducts = await getProductsByCategory(id);
          setFilteredProducts(categoryProducts);
        } else {
          const allProducts = await getProducts();
          setFilteredProducts(allProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container"> {/* Agregamos la clase de contenedor */}
      <ItemList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;
