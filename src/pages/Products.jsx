import React from 'react'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import { Filters, PaginationContainer, ProductsContainer } from '../components'

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  
  const response = await customFetch('/products', {
    params
  })
  const products = response.data.data
  const meta = response.data.meta

  return {products, meta, params}
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