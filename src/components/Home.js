import React from 'react';

function Home(){
    return(
        <>
            <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
               <div className="img-wrapper item">
                   <img src="https://m.media-amazon.com/images/I/413gDqZ10JL.jpg" />
               </div>
               <div className="text-wrapper item">
                   <span>
                   Samsung Guru Music 2 (SM-B310E, Blue)
                   </span><br/>
                   <span>
                       <strong>Price:</strong> $24.00
                   </span>
               </div>
               <div className="btn-wrapper item">
                   <button>Add To Cart</button>
               </div>
            </div>
        </>
    )
}

export default Home