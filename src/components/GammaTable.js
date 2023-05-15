import React, { useEffect, useState } from "react";
import { Mean, Median, Mode } from "./Calculation";

const GammaTable = ({ alcoholNameList, alcohalListByName }) => {
  const [gammaDataList, setGammaDataList] = useState([]);

  // gammaFunction is used to be calculated Gamma using Gamma = (Ash * Hue) / Magnesium.
  const gammaFunction = (ele) => (ele.Ash * ele.Hue) / ele.Magnesium;

  useEffect(() => {
    const arr = [];
    alcohalListByName.forEach((ele) => {
      const gammaValue = ele.map((curEle) => gammaFunction(curEle));
      arr.push(gammaValue);
    });

    setGammaDataList(arr);
  }, [alcohalListByName]);

  return (
    <div className="table-container">
      <div className="row">
        <h2>Gamma Table</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {alcoholNameList.map((ele) => (
              <th key={ele}>Alcohol {ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gamma Mean</th>
            {gammaDataList &&
              gammaDataList.map((ele, ind) => (
                <td key={ind}>{Mean(ele).toFixed(3)}</td>
              ))}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {gammaDataList &&
              gammaDataList.map((ele, ind) => (
                <td key={ind}>{Median(ele).toFixed(3)}</td>
              ))}
          </tr>
          <tr>
            <th>Gamma Mode</th>
            {gammaDataList &&
              gammaDataList.map((ele, ind) => (
                <td key={ind}>{Mode(ele).toFixed(3)}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaTable;
