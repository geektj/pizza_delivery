import React, { useState } from 'react';
import '../../assets/Css/home.scss';
import { Category } from '../../utils/constant/constants';

const ItemListing = (props) => {
    const {data} = props;
    // console.log(data);

    const qtyDecrement = (categoryId, itemInfo) => {
        props.qtyDecrement(categoryId,itemInfo);
        // console.log('decremetn')
    }
    const qtyIncrement = (categoryId, itemInfo) => {
        props.qtyIncrement(categoryId,itemInfo);
        // console.log('inc')
    }
    
    
    return(
        <>      
                <div className="col-12">
                    
                    <div className="category-bar">
                        <div className="bar"></div>
                        <div className="category-name">
                            <div className="name">{data.name}</div>
                        </div>
                    </div>
                    <div className="mr-n">
                        <div className="item-list col-12 d-flex flex-wrap">
                        {data.items.map((info , i) => ( 
                            <div className="items" key={i}>
                                <div className="items-box">
                                    <div className="image position-relative">
                                        <div className="product-image">
                                            {/* <div className="bg-image"> */}
                                                <img src={info.img} className="" />
                                            {/* </div> */}
                                        </div>
                                        <div className="shadow"></div>
                                        <div className="price">
                                            <span className="ruppee">{info.price}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="item-desc">
                                        <div className="item-name-desc">
                                            <div className="name">{info.itemName}</div>
                                            <div className="desc">{info.itemDesc} <span className="read-more pointer"  data-toggle="tooltip"  title="Tooltip on right">More</span></div>

                                        </div>
                                        <div className="d-flex justify-content-between size-qty">
                                            <div className="sizes">
                                                <div className="text">Size</div>
                                                <select className="my-2 pointer">
                                                    <option>Small</option>
                                                    <option>Medium</option>
                                                    <option>Large</option>
                                                </select>
                                            </div>
                                            <div className="qty-counter d-flex flex-column">
                                                <div className="text">Quantity</div>
                                                <div className="d-flex justify-content-between align-items-center my-2 box pointer">
                                                    <div className="minus px-2"  onClick={(e) => qtyDecrement(data.id,info)}>-</div>
                                                    <span className="qty px-2" >{info.qty}</span>
                                                    <div className="plus px-2" onClick={(e) => qtyIncrement(data.id,info)}>+</div>
                                                </div>
                                                
                                            </div>

                                        </div>
                                        <div className="d-flex justify-content-end button">
                                            <button className="cart-btn btn pointer" disabled={!info.qty} onClick={(e)=>props.cartBtn(data.id,info)} type="submit"> Add To Cart</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                            

                        </div>
                    </div>
                </div>
        </>
    )
}
export default ItemListing;