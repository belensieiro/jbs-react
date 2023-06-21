import Product from "../products/products"

const ProductsList = ({ items }) => {
    return (
        <div className="row">
          {items.map((prod) => (
            <Product key={prod.id} {...prod} />
          ))}
        </div>
    )
  }
  
export default ProductsList
  