import React from 'react'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import { Filters, PaginationContainer, ProductsContainer } from '../components'

export const loader = async ({request}) => {
  const response = await customFetch('/products')
  const products = response.data.data
  const meta = response.data.meta

  return {products, meta}
}

const Products = () => {
  const { products } = useLoaderData()

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products