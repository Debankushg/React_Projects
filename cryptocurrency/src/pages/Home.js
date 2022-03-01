import React , {useState , useEffect} from 'react'
import axios from 'axios'
import CoinPage from './CoinPage';
import './Home.css';
import Paginat  from "../components/Paginat"





const Home = () => {

  const[coins, setCoins] = useState([]);
  const [search , setSearch] = useState('')

  const [currentPage , setCurrentPage] = useState(1)

 const [showPerPage ,setShowPerPage] = useState(20)



  
 // Change Page
 const paginate = (pageNumber) => {setCurrentPage(pageNumber)};





 const indexOfLastPost = currentPage * showPerPage;
 const indexOfFirstPost = indexOfLastPost - showPerPage;




  

  useEffect (() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res => {
      setCoins(res.data);
      
    }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }



  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    )



  return (
    <>
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form action="">
          <input type="text" placeholder='Search' className= 'coin-input'  onChange={handleChange}/>
        </form>
      </div>
      <div className="head">
        <ul>
          <li>Name </li>
          <li>Volume </li>
          <li>Price </li>
          <li>PriceChange </li>
          <li>Percentage</li>
          <li>MarketCap</li>
        </ul>
      </div>
      {filteredCoins.slice(indexOfFirstPost , indexOfLastPost).map(coin => {
        return(
          <CoinPage key= {coin.id}
          name={coin.name} 
          image={coin.image}
           symbol={coin.symbol}
           volume={coin.total_volume} 
            price={coin.current_price}
             priceChange={coin.price_change_percentage_24h} 
             marketcap={coin.market_cap}

            />
        )
      })}
    </div>



      <Paginat
      showPerPage={showPerPage}  paginate={paginate}
          total={coins.length}
           />
      

    </>
  )
}

export default Home;