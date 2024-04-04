import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import './Checkout.css'; 

const Checkout = () => {
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [pedidoId, setPedidoId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: precioTotal()
        };

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear el pedido: ", error);
            })
            .finally(() => {
              vaciarCarrito();
          });
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                {cart.map((product) => (
                    <div key={product.id} className="producto">
                        <img src={product.image} alt={product.name} className="producto-img" />
                        <p>{product.name}</p>
                        <p>Precio: ${product.price}</p>
                        <p>Cantidad: {product.quantity}</p>
                    </div>
                ))}
                <p className="total">Total: ${precioTotal()}</p>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} className="input-field" />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} className="input-field" />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} className="input-field" />
                <button className="enviar" type="submit" onClick={() => { handleSubmit(comprar); vaciarCarrito(); }}>Comprar</button>

            </form>
        </div>
    );
};

export default Checkout;
