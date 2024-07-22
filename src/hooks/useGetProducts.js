import { useEffect, useState } from "react"

const useGetProducts = (url , category = null) => {
  const [products , setProducts] = useState([])
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(true)
  const [filteredProducts , setFilteredProducts] = useState([])
  const [sortedProducts , setSortedProducts] = useState([])
  const [term , setTerm] = useState("");
  const [selectValue , setSelectValue] = useState("");
  
  useEffect(() => {
    const getProducts = async ( ) => {
      try {
        const response = await fetch(url , {
          method: "GET"
        })
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json();
        let filteredData = data
        if (category) {
          filteredData = data.filter((product) => product.category === category)
       
        }
        setProducts(filteredData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts(url , category)
  } ,[url , category])

  useEffect(() => {
    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [products, term]);

  useEffect(() => {
 const sortedProducts = [...filteredProducts].sort((a , b) => {
  switch(selectValue) {
    case "price-ascending":
      return parseFloat(a.price) - parseFloat(b.price);
     case "price-descending":
      return parseFloat(b.price) - parseFloat(a.price);
    case "reviews":
      return parseFloat(b.reviews) - parseFloat(a.price) 
      default: 
      return 0
  }
 })
 setSortedProducts(sortedProducts)
  } , [selectValue , filteredProducts])


 return {
  products ,
  setProducts,
  loading ,
  error ,
  filteredProducts , 
  sortedProducts , 
  term , 
  setTerm,
  selectValue , 
  setSelectValue,

 }
}
export default useGetProducts;

