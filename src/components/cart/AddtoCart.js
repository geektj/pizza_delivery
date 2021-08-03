import React, { useState } from 'react';
import '../../assets/Css/cart.scss';

const AddToCart = (props) => {
    const {cartData}  = props;
    console.log('data',cartData);

    const minusqty = (cartData) => {
        console.log('minus');
        props.minusqty(cartData);
    }
    const addqty = (cartData) => {
        console.log('add');
        props.addqty(cartData);
    }
    
    return (
        <>

            <div className="cart-body px-2">
                {cartData.map((info,i) => ( 
                <div className="cart-item" key={i}>
                    <div className="cart-content">
                        <div>
                            <div className="col-12 d-flex justify-content-between">
                                <div className="images col-5">
                                    <div className="product-images">
                                        <img src={info.item.img} />
                                    </div>
                                </div>
                                <div className="crt-cnt-qty-prc col-5 d-flex flex-column-reverse justify-content-between">
                                    
                                    <div className="qty-m-p d-flex pointer justify-content-end align-items-center">
                                        <div className="delete px-2" onClick={(e) => minusqty(info)}><i className="far fa-trash-alt"></i></div>
                                        <span className="qty px-2">{info.item.qty}</span>
                                        <div className="add px-2" onClick={(e) => addqty(info)}><i className="fas fa-plus"></i></div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-end">
                                        <div className="price"><span>₹</span> {info.item.price}</div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-12 crt-cnt-descrptn">
                                <div className="product-desc">
                                    <div className="item-name">{info.item.itemName}</div>
                                    <div className="item-desc">{info.item.itemDesc}</div>
                                    <div className="item-size">Size: <span>Medium</span></div>
                                </div>
                            </div>
                            {/* <div className="crt-cnt-qty-prc col-12 d-flex justify-content-between">
                                <div className="col-4">
                                    <div className="qty d-flex ">
                                        <div className="delete px-2"><i className="far fa-trash-alt"></i></div>
                                        <span className="qty px-2">1</span>
                                        <div className="add px-2"><i className="fas fa-plus"></i></div>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-end">
                                    <div className="price"><span>₹</span> 199</div>
                                </div>
                            </div> */}
                        </div>
                        <div className="my-3"></div>
                    </div>
                </div>
                ))} 
            </div>
                
            <div className="checkout-box">
                <div className="checkout-total">
                    <div className="text checkout-text">Subtotal</div>
                    <div className="total-amt checkout-text"><span>₹</span>790.00</div>
                </div>
                <div className="checkout-btn">
                    <a href="" className="d-flex justify-content-center align-items-center">checkout</a>
                </div>
            </div>
        
        </>
    )
}
export default AddToCart;