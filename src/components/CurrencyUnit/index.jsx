import { useEffect, useState } from "react";
import "./style.scss";
import { units } from "utils";
import { useSelector } from "react-redux";
import { BTC_SELECTORS } from "store/btc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


export const CurrencyUnit = ({setRate}) => {

  const [unit, setUnit] = useState("EUR");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(
    units.filter((item) => item.selected)[0]
  );
  const btc = useSelector(BTC_SELECTORS.getBTC);

  useEffect(() => {
    setRate(btc.rates[unit].rate);
  }, [unit]);

  const openSelectBox = () => setShowOptions(!showOptions);

  const switchCurrency = (id) => {
    const currentUnit = units.filter((item) => item.id === id)[0];
    selectedUnit.selected = false;
    currentUnit.selected = true;
    setSelectedUnit(currentUnit);
    setShowOptions(!showOptions);
    setUnit(currentUnit.value)
  };

  return (
    <ul name="units" className="units">
    <li onClick={openSelectBox}>
      {selectedUnit.value}
      {showOptions ? <FontAwesomeIcon icon={faChevronUp} />:  <FontAwesomeIcon icon={faChevronDown}/>}
    </li>
    <li className="optionsWrapper">
      <ul className="options">
        {showOptions &&
          units.map((item) => (
            <li
              value={item.value}
              key={item.id}
              className="option"
              onClick={() => switchCurrency(item.id)}
            >
              {item.value}
            </li>
          ))}
      </ul>
    </li>
  </ul>
  );
};