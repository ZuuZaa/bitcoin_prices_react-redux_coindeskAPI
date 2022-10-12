import ReactLoading from "react-loading";
import "./style.scss";

export const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading
        type={"cubes"}
        color={"#4abfbfe6"}
        height={70}
        width={80}
      />
    </div>
  );
};
