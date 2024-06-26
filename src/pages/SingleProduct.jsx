import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const loader = async ({params}) => {
  const response = await customFetch(`/products/${params.id}`)

  return {product: response.data.data}
}

const SingleProduct = () => {
  const {product} = useLoaderData()
  const { image, title, description, price, colors, company } = product?.attributes
  const dollarsAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  return (
    <section>

      <div className="text-medium breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
        <div>
          <h1 className=' capitalize font-bold text-3xl'>{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className='mt-6 leading-8'>
            {description}
          </p>
          {/* Colors */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
            <div className="mt-2">
              {colors?.map((color) => {
                return (
                  <button type="button" key={color} className={`badge h-6 w-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div> 
          {/* Amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className=' font-medium tracking-wider capitalize text-md'>amount
              </h4>
            </label>
            <select className='select select-secondary select-bordered select-md' id="amount" value={amount} onChange={handleAmount}>
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* Cart Btn */}
          <div className="mt-10">
            <button type="button" className='btn btn-secondary btn-md' onClick={() => console.log('add to bag')}>add to bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct