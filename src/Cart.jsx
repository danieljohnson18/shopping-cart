import React from 'react'

export default function Cart({ cart,removeFromCart}) {
    return (
        <>
            <h1>Cart</h1>
            <div className="products">
                {cart.map((item) => (
                <div className="product" key={item.id}>
                    <img src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <h4>{item.price}</h4>
                    <h5>{item.category}</h5>
                    <button onClick={()=> removeFromCart(item)}>Remove</button>
                </div>
                ))}
            </div>
        </>
    )
}
