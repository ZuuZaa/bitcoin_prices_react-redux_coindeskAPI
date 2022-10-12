import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { PRICES_SELECTORS } from "store/prices";
import { chartData } from "utils";
import { Loading } from "components/Loading";

Chart.register(CategoryScale);

export const PricesChart = () => {

    const chartItems = useSelector(PRICES_SELECTORS.getPices);
    const loading = useSelector(PRICES_SELECTORS.getPricesLoading);
    const error = useSelector(PRICES_SELECTORS.getPricesError);
    console.log("chart", loading)

    return (
      <div className="prices-chart">
      {
        loading ? <Loading/>  :
        <>
        <Line
        data={chartData(chartItems.index, chartItems.prices)}
        width={4}
        height={2}
      />
      {error && <small className="error-text">BTC rate float: {error}</small>}
       </>
      }
      </div>

    )
}