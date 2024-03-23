import { useState, useEffect } from "react"
import ProductsList from "../components/ProductsList.jsx"
import products from "../assets/products.jsx"

function Home() {
  //const [products, setProducts] = useState(products)
  const [searchProduct, setSearchProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)

  /* useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/products")
        const result = await response.json()
        setProducts(result)
        setFilteredProducts(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])*/

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

        <ProductsList filteredProducts={filteredProducts} />
      </div>
    </main>
  )
}

export default Home
