import { useState, useEffect } from "react"

function Home() {
  const [products, setProducts] = useState([])

  const getData = () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    }

    fetch("http://localhost:3000/products", requestOptions)
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("error", error))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main>
      <div>
        <input
          className="flex-sm-fill text-sm-center nav-link"
          type="text"
          id="search"
          placeholder="Type to search"
          data-change="search"
        ></input>

        <div className="lamps">
          {products.map((product) => (
            <div className="product clearfix" key={product.id}>
              <img src={product.image} alt={product.name}></img>
              <div className="content">
                <h2>{product.title}</h2>
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
