import React, { useState } from 'react';

const ProductCategory = (props) => {
    const [name,setName] = useState('')
    function handleClick(e) {
        console.log('ths',e);
        setName('');

        
    }
    
    const {data} = props;
    return(
        <>
            <div className="col-2 category-font d-flex align-items-center pointer" >
                <a className="category-text" onClick={handleClick}><span>{data.name}</span></a>
            </div>
                
        </>
    )    
}
export default ProductCategory;