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

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            catgories: Category, 
            cart:[],
            // getCart:[],
            // itemPrice: Category.items.price,
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
        console.log('cartminus',cartData);
        let cartParse = JSON.parse(JSON.stringify(this.state.cart));
        console.log('cartparse',cartParse);
        let cartFilter = cartParse.filter((cartItem) => cartItem.item.id === cartData.item.id)[0];
        console.log('cartfilter',cartFilter);

        // cartFilter.item.map((el,i) =>{
        //     if(el.item.id === cartData.item.id){
        //         let cartQty = el.item.qty - 1;
        //         el.item.qty = cartQty;
        //     }
        //     return el;
        // });
        // this.setState({cart: cartParse});
        
    }

    addqty = (cartData) => {
        // debugger
        console.log('cartplus',cartData);
        let cartParse = JSON.parse(JSON.stringify(this.state.cart));
        console.log('cartparse',cartParse); 
        let cartFilter = cartParse.filter((cartItem) => cartItem.item.id === cartData.item.id)[0];
        console.log('cartfilter',cartFilter);

        // let cartmap = cartFilter.map((el,i) =>{
        //     // if(el.item.id === cartData.item.id){
        //     //     let cartQty = el.item.qty + 1;
        //     //     el.item.qty = cartQty;
        //     // }
        //     return el;
        // });
        // console.log('map',cartmap)
        // this.setState({cart: cartParse});
    }
    render(){
        // console.log('render', this.state.cart);
        const {catgories} = this.state;
        
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
                                            {this.state.cart.length === 0 ? <EmptyCart /> : <AddToCart cartData={this.state.cart} minusqty={this.minusqty} addqty={this.addqty}/>}
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