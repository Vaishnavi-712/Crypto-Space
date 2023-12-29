import React from 'react'
import { useState, useEffect } from 'react'
import {baseURL} from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import Header from './Header'
import {Link} from 'react-router-dom'
import './Res.css'

const Coins = () => {
    const [loading, setLoading]=useState(true)
    const [coins,setCoins]=useState([])
    const [currency, setCurrency]=useState('INR')
    const [search, setSearch]=useState('')
    const currencySymbol= currency==='INR'? '₹':'$'
    useEffect(()=>{
        const getcoinsData=async()=>{
            const {data}=await axios.get(`${baseURL}/coins/markets?vs_currency=${currency}`)
            console.log(data);
            setCoins(data)
            setLoading(false);
        }
        getcoinsData();
    },[currency])
  return (
    <>
      {
        loading?<Loader/>:<>
        <Header/>
        <div className="search-bar">
        <input type='text' placeholder='Search Cryptocurrencies' 
        onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className='Coins-heading'> 
            <p>Pricing-Panorama: Crypto Prices in Real Time</p>
            </div>
        <div className="btns">
            <button onClick={()=>setCurrency('INR')}>INR</button>
            <button onClick={()=>setCurrency('USD')}>USD</button>
        </div>
        <div className='CoinsContainer'>
        {
            coins.filter((data)=>{
                if (data==''){return data}
                else if (data.name.toLowerCase().includes(search.toLowerCase())){
                    return data
                }

            }).map((coindata,i)=>{
                return(
                    
                        <CoinCard key={i} coindata={coindata} id={coindata.id} i={i} currencySymbol={currencySymbol} />

                    
                )
            })
        }
        </div>

        
        </>
      }
    </>
  )
}

const CoinCard=({coindata,currencySymbol,i,id})=>{
    const profit=coindata.price_change_percentage_24h>0
    return(
        <Link to ={`/coins/${id}`} style={{color:'white', textDecoration:'none'}}>
    <div className='ex-cards'>
                    <div className="image">
                        <img height={"80px"} src={coindata.image} alt=""/>
                    </div>
                    <div className="name">{coindata.name}</div>
                    <div className="price">{currencySymbol}{coindata.current_price.toFixed(0)}</div>
                    <div className="rank" style={profit?{color:'green'}:{color:'red'}}>
                        {profit?"+"+coindata.price_change_percentage_24h.toFixed(2):coindata.price_change_percentage_24h.toFixed(2)}
                    </div>
    </div>
    </Link>
    )
}

export default Coins
