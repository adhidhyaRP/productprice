import React, { createContext, useContext, useState } from 'react'
import './App.css';
const CreatedContext = createContext()

const App = () => {
  const [quantity,setquantity] = useState(0)
  
 

function setquantityfunc(){
  setquantity(quantity+1)
 
}
function setquantityfuncminus(){
  setquantity(quantity-1)
}
 const product = 
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": "https://th.bing.com/th/id/OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa?rs=1&pid=ImgDetMain",
            
        
    } 

   

  return (
    
<CreatedContext.Provider value={{product,quantity,setquantityfunc,setquantityfuncminus}} >

<Product  />

</CreatedContext.Provider>
  )
}

const Product = () =>{
  const {product,quantity,setquantityfunc,setquantityfuncminus} = useContext(CreatedContext)
  return(
  
    <div className='productbox'>
      <div className='product'>
      <div>
        <img src={product.images} alt="" />
      </div>
      <div>
        <h2 className='Title'>{product.title}</h2>
        <br /><br />
        <p className='description'>Description & Details <br/>{product.description}</p>

      </div>
      <div className='quantity'>
        
        {/* <input type="text" value={quantity}/> */}
        <button className='quantity' >{quantity}</button>
        <button onClick={()=>{setquantityfuncminus()}}>-</button>
      <button className='button' onClick={()=>{setquantityfunc()}}>+</button></div>
      <div><h3>${product.price}</h3></div>
      </div>
      <div className='subtotal'>
        <span>SUBTOTAL</span>
        <span className='price'><h3>${product.price*quantity}</h3></span>
      </div>
      <div className='shipping'>
        <span>DISCOUNT</span>
        <span className='price'><h3>{product.discountPercentage}%</h3></span>
      </div>
      <div className='total'>
        <span>TOTAL</span>
        <span className='price'><h3>${parseInt(product.price-(12/100*product.price.toFixed(2)))*quantity }</h3></span>
      </div>

    </div>

    
  

)

}

export default App