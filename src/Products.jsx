import React, {useState, useEffect} from 'react';






export default function Products({ addToCart }) {

    const [items, setitems] = useState([])
    const [isLoaded, setisLoaded] = useState(false)


    useEffect(()=> {
        async function fetchData(){
          const res = await fetch('https://fakestoreapi.com/products');
            res
              .json()
              .then(res => setitems(res))
              .catch(err => setisLoaded(err));
        }
    
        fetchData();
      });
    return (
        
            <>
                <h1>Products</h1>
                <div className="products">
                    {items.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <h4>{item.price}</h4>
                        <h5>{item.category}</h5>
                        <button onClick={()=> addToCart(item)}>Add to Cart</button>
                    </div>
                    ))}
                </div>
            </>
       
    )
}
