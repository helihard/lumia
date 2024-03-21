import { useState } from "react"
import products from "../assets/products.jsx"

function Home() {
  const [searchProduct, setSearchProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setSearchProduct(searchTerm)

    const filteredItems = products.filter((product) => {
      const matchingName =
        product.name && product.name.toLowerCase().includes(searchTerm)
      const matchingKeywords =
        product.keywords &&
        product.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm)
        )
      return matchingName || matchingKeywords
    })

    setFilteredProducts(filteredItems)
  }

  return (
    <main>
      <div>
        <input
          className="flex-sm-fill text-sm-center nav-link"
          type="text"
          value={searchProduct}
          id="search"
          placeholder="Type to search"
          //data-change="search"
          onChange={handleInputChange}
        ></input>

        <div className="lamps">
          {filteredProducts.map((product) => (
            <div className="product clearfix" key={product.id}>
              <img src={product.image} alt={product.name}></img>
              <div className="content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button data-click="buy">Köp för {product.cost} kr</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
