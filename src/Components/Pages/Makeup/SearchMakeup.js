import React, { useState } from 'react'
import MakeupApi from '../../../api/MakeupApi'
import SearchMakeupForm from './SearchMakeupForm'
import MakeupList from './MakeupList'
import { useEffect } from 'react'

function SearchMakeup(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const searchProducts = async() =>{
            const {data} = await MakeupApi.get('',{
                params:{

                }
            })
            setProducts(data)

        }
        searchProducts();
    },[])


    return(
        <div>
            <SearchMakeupForm products={products}/>

        </div>
    )
}

export default SearchMakeup
