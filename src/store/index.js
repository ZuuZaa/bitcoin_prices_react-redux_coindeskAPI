import { configureStore } from '@reduxjs/toolkit'
import { setBTC, setBTCError, setBTCLoading } from './btc/actions';
import { btcReducer } from './btc/reducer'
import axios from 'axios';
import { pricesReducer } from './prices/reducer';
import { setPrices, setPricesError, setPricesLoading } from './prices/actions';
import { getTimeFromDate } from 'utils';


const store = configureStore({
  reducer: {
    btc: btcReducer,
    prices: pricesReducer
  },
})

const fetchData = async (dispatch, getstate) => {

  dispatch(setBTCLoading())
  dispatch(setPricesLoading())

  try {
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    const btc = response.data
    const data = {
      rates: btc.bpi,
      updated_time: btc.time.updated
    }
    dispatch(setBTC(data));
  }
  catch (error) {
    dispatch(setBTCError(error.message))
  }

  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m");
    const resData = response.data
    const data = { index: [], prices: [], difference:'' };
    resData.prices.map((item) => {
      data.index.push(getTimeFromDate(item[0]));
      data.prices.push(item[1]);
    });
    const difference = data.prices[data.prices.length -1] > data.prices[data.prices.length -1];
    data.difference = difference
    dispatch(setPrices(data));
  }
  catch (error) {
    dispatch(setPricesError(error.message))
  }

  const store = getstate();
  console.log("store",store)
}

store.dispatch(fetchData)

export { store };



