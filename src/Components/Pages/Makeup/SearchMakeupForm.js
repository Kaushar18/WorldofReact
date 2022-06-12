import React, { useState } from 'react'
import { useEffect } from 'react'
import MakeupApi from '../../../api/MakeupApi'
import MakeupList from './MakeupList'

function SearchMakeupForm({products}){
    const [brand,setBrand] = useState('')
    const [category,setCategory] = useState('')
    const [filteredProducts,setFilteredProducts] = useState([])
    
    useEffect(()=>{
        const filterProducts = async() =>{
            const {data} = await MakeupApi.get('',{
                params:{
                    brand:brand,
                    product_type:category
                }
                
            })
            setFilteredProducts(data)
            
        }
        if(brand || category && !filterProducts.length){
            filterProducts();
        }else{
            const timeoutId = setTimeout(() => {
                if(brand || category){
                    filterProducts();
                }
            }, 1000);
            return ()=>{
                clearTimeout(timeoutId)
            }

        }
        
        
    },[brand,category])
    
    
    const onFormSubmit=(event)=>{
        event.preventDefault();
    }
    
        const unique = [...new Set(products.map(item => item.brand))];
        const optionbrand = unique.map((b) =>{
            return <option key={b} value={b}>{b}</option>
        })
        const uniqueProduct = [...new Set(products.map(item => item.product_type))];
        const optionproduct = uniqueProduct.map((b) =>{
            return <option key={b} value={b}>{b}</option>
        })
        
        return (
            <div>
                <div className="ui form">
                    <form onSubmit={onFormSubmit}>
                    <div className="two fields">
                        <div className="field">

                    <label>Select Makeup Brands: </label>
                    <select onChange={(e)=>setBrand(e.target.value)} value={brand}>
                        
                        {optionbrand}
                    </select>
                    </div>
                    <div className="field">
                    <label>Select Product Type: </label>
                    <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                        
                        {optionproduct}
                    </select>
                    </div>
                    </div>
                    </form>
            </div>
            <MakeupList filteredProducts={filteredProducts} />
            </div>
            
        )
    }


export default SearchMakeupForm
