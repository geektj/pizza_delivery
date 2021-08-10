import React, { useEffect, useState } from 'react';
import '../../assets/Css/cart.scss';

const AddToCart = (props) => {
    const {cartData}  = props;
    // console.log('data',cartData);

    const minusqty = (cartData) => {
        props.minusqty(cartData);
    }
    const addqty = (cartData) => {
        props.addqty(cartData);
    }
    
    const[totalPrice,setTotalPrice] = useState(0);
    const[totalQty,setTotalQty] = useState(0);
    useEffect(() => {
        caluclateTotal();
    },[cartData]);

    const caluclateTotal = () => {
        let cartTotalPrice = 0;
        let cartTotalQty = 0;
        for(let i=0; i < cartData.length; i++ ){
            cartTotalPrice += cartData[i].item.price * cartData[i].item.qty;
            cartTotalQty += cartData[i].item.qty;
        }
        setTotalPrice(cartTotalPrice);
        setTotalQty(cartTotalQty);
    }

    
    return (
        <>
            <div className="cart-items-remove">
                <button className="remove-items" onClick={(e) => props.clearCart()}>
                    <i className="far fa-trash-alt"></i>
                    <div className="remove-text">Remove All</div>
                </button>
            </div>
            <div className="cart-body px-2">
                {cartData.map((info,i) => ( 
                // style={info.item.qty === 0 ? {display:'none'} : {display:'block'} }
                <div className="cart-item" key={i} >
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
                                        <div className="price"><span>₹</span> {info.item.qty === 0 ? info.item.price : info.item.price * info.item.qty}</div>
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
                            
                        </div>
                        <div className="my-3"></div>
                    </div>
                </div>
                ))} 
            </div>
                
            <div className="checkout-box">
                <div className="checkout-total">
                    <div className="checkout-amt d-flex justify-content-between">
                        <div className="text checkout-text">Subtotal</div>
                        <div className="total-amt checkout-text"><span>₹&nbsp;</span>{totalPrice}.00</div>
                    </div>
                    <div className="total-items d-flex justify-content-between">
                        <div className="total-items-text">Total items :&nbsp;<span>{totalQty}</span></div>
                      
                    </div>
                    <button className="checkout-btn pointer">
                        <span className="d-flex justify-content-center align-items-center text-uppercase">checkout</span>
                    </button>
                </div>
            </div>
                    
        </>
    )
}
export default AddToCart;