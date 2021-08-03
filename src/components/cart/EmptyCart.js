import React from 'react';
import '../../assets/Css/cart.scss';

const EmptyCart = () => {
    return(
        <>
            <div className="position-relative empty-cart-body d-flex justify-content-center">
                {/* <div className="d-flex justify-content-center align-items-center"> */}
                    <div className="text-uppercase text-muted">cart is empty <br/> Fill the cart </div>
                    <div className=""></div>
                {/* </div> */}
            </div>
        </>
    )
}
export default EmptyCart;