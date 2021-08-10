import React from 'react';
//import components
import Header from '../../components/Header/Header';
import ItemListing from '../../components/products/Item_listing';
import AddToCart from '../../components/cart/AddtoCart';
import EmptyCart from '../../components/cart/EmptyCart';
import { Category } from '../../utils/constant/constants';
import ProductCategory from '../../components/categories';
//import scss
import '../../assets/Css/home.scss';
import '../../assets/Css/styles.scss';
import '../../assets/Css/cart.scss';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            catgories: Category, 
            cart:[],
        }
    }

    qtyDecrement = (categoryId, itemInfo) => {
        if(itemInfo.qty > 0){
            let categories = JSON.parse(JSON.stringify(this.state.catgories))
            let category = categories.filter((category) => category.id === categoryId)[0];
        
        category.items.map((el,i) => {
            if(el.id === itemInfo.id){
                let qty = el.qty - 1;
                el.qty = qty;
                
            }
            return el;
        });
        this.setState({catgories: categories})
        }
        

    }

    qtyIncrement = (categoryId, itemInfo) => {
        
        let categories = JSON.parse(JSON.stringify(this.state.catgories))
        let category = categories.filter((category) => category.id === categoryId)[0];
        
        category.items.map((el,i) => {
            if(el.id === itemInfo.id){
                let qty = el.qty + 1;
                el.qty = qty;
                
            }
            return el;
        });
        this.setState({catgories: categories})
    }

    cartBtn = (categoryId, item) => {
        // console.log('categoryid',categoryId);
        // console.log('itemid',item);
        let categoryObj = {
            catId: categoryId,
            item: item,
        }
        let arr = JSON.parse(JSON.stringify(this.state.cart));
        arr.push(categoryObj);
        this.setState({cart:arr});
    }

    minusqty = (cartData) => {
        // console.log('cartminus',cartData);
        if(cartData.item.qty > 0){
            let cartParse = JSON.parse(JSON.stringify(this.state.cart));
        // console.log('cartparse',cartParse);
       
        cartParse.map((cart) => {
            if(cart.item.id === cartData.item.id){
                cart.item.qty = cart.item.qty - 1;
            }
            return cart;
        });

        let categories = JSON.parse(JSON.stringify(this.state.catgories))
        let category = categories.filter((category) => category.id === cartData.catId)[0];
        // console.log('xyz',category);
        category.items.map((el,i) => {
            if(el.id === cartData.item.id){
                let qty = el.qty - 1;
                el.qty = qty;
                // console.log('abc',);
                
            }
            // console.log('el',el);
            return el;
            
        });
        this.setState({cart:cartParse , catgories: categories});
        }
        
               
    }

    addqty = (cartData) => {
        // console.log('cartplus',cartData);
        let cartParse = JSON.parse(JSON.stringify(this.state.cart));
        // console.log('cartparse',cartParse); 
        
        cartParse.map((cart) => {
            if(cart.item.id === cartData.item.id) {
                cart.item.qty = cart.item.qty + 1;
                
            }
            return cart;
        });
          
        let categories = JSON.parse(JSON.stringify(this.state.catgories))
        let category = categories.filter((category) => category.id === cartData.catId)[0];
        // console.log('xyz',category);
        category.items.map((el,i) => {
            if(el.id === cartData.item.id){
                let qty = el.qty + 1;
                el.qty = qty;
                // console.log('abc',);
                
            }
            // console.log('el',el);
            return el;
            
        });
        // console.log('el',el);
        
        this.setState({cart: cartParse, catgories: categories});

        
    }
    
    // ItemRemoveInCart = (catid,item) => {
    //     if(cartData.item.qty === 0){
    //         let ItemRemove = cartData;
    //         console.log('ItemRemove',ItemRemove);
    //     }
    // }
    
    clearCart = () => {
        this.setState({cart:[]});
    }
    
    render(){
        // console.log('render', this.state.cart);
        const {catgories} = this.state;
        // console.log('itemRemoveInCart',ItemRemoveInCart());    
        return(
            <div className="bg-color">
                <Header />
                <div className="col-12 d-flex align-items-center categories">
                    <div className="container">
                        <div className="row">
                            {catgories.map((el, i) => <ProductCategory data={el} key={i}/>)}                            
                        </div>
                    </div>
                            
                </div>
                
                <div className="col-12 main-page">
                    <div className="container d-flex justify-content-between py-5">
                        <div className="col-9">
                            {catgories.map((el, i) => <ItemListing cartBtn={this.cartBtn} qtyIncrement={this.qtyIncrement} qtyDecrement={this.qtyDecrement} data={el} key={i}/>)}
                        </div>
                        <div className="col-3">
                            <div className="add-to-cart col-12 d-flex justify-content-end">
                                <div className="col-10 d-flex"> 
                                    <div className="position-fixed d-flex">
                                        <div className="cart-box">
                                            {this.state.cart.length === 0 ? <EmptyCart /> : <AddToCart cartData={this.state.cart} minusqty={this.minusqty} addqty={this.addqty} clearCart={this.clearCart}/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Home;