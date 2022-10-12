import { PricesChart } from "components/PricesChart";
// import { Header } from "components/Header";
// import { useSelector } from "react-redux";
// import { BTC_SELECTORS } from "store/btc";
import "./style.scss";

export const MainContainer = () => {
  // const btcError = useSelector(BTC_SELECTORS.getBTCError);
  return (
    <div className="container">
      <div className="chartContainer">
        {/* {btcError ? <h3 className="error-text">{btcError}</h3> : <Header />} */}
        <PricesChart />
      </div>
    </div>
  );
};
