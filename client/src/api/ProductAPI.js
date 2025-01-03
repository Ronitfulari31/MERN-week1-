import axios from 'axios'
import { useEffect, useState } from 'react'

const ProductAPI = () => {

    const [products,setProducts]=useState([])

    const getProducts = async()=> {
        const res = await axios.get('/api/products')
        setProducts(res.data.products)
    }

    useEffect(()=> {
        getProducts()
    },[])

  return {
    products : [products,setProducts]
  }
}

export default ProductAPI
