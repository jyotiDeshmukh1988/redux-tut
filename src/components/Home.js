import React from 'react';

function Home(props){
    //console.log("home",props.data.length)
    return(
        <>
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
                   <button onClick={()=>props.addToCartHandler({price:1000,name:'Samsung Guru Music 2'})}>Add To Cart</button>
               </div>
               <div className="btn-wrapper removeitem">
                   <button onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
               </div>
            </div>
        </>
    )
}

export default Home