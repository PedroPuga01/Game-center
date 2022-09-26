import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';

const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, phone: phone, email: email },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateprod();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(db, 'orders', 'DvCjzFflk9zDGLGaIORToaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Phone..."
                    name="phone"
                    value={phone}
                    onChange={handleChangePhone}
                />
                <input
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;