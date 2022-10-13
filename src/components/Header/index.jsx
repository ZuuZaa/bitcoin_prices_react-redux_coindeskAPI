import "./style.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BTC_SELECTORS } from "../../store/btc";
import { CurrencyUnit } from "components/CurrencyUnit";
import { PRICES_SELECTORS } from "store/prices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "components/Loading";

export const Header = () => {

  const [unit, setUnit] = useState("EUR");
  const btc = useSelector(BTC_SELECTORS.getBTC);
  const prices = useSelector(PRICES_SELECTORS.getPices);
  const loading = useSelector(BTC_SELECTORS.getBTCLoading);

  return (
    <div className="header">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>
            Bitcoin to
            <CurrencyUnit setUnit={setUnit} />
          </h1>
          <h3>
            {btc.rates[unit].rate}
            {prices.difference ? (
              <FontAwesomeIcon icon={faArrowUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
          </h3>
          <small>{btc.updated_time}</small>
        </>
      )}
    </div>
  );
};
