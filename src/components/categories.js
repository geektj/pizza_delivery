import React, { useState } from 'react';
import { Category } from '../utils/constant/constants';
// import { Link } from 'react-scroll';

const ProductCategory = (props) => {
   
    const {data} = props;
    return(
        <>
            <div className="col-2 category-font d-flex align-items-center pointer" >
                <a href={`#${data.name}`} className="category-text" ><span>{data.name}</span></a>
            </div>
                
        </>
    )    
}
export default ProductCategory;