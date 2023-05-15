import React, { useEffect, useState } from "react";
import { Mean, Median, Mode } from "./Calculation";

const FlavanoidsTable = ({ alcoholNameList, alcohalListByName }) => {
  const [flavanoidsDataList, setFlavanoidsDataList] = useState([]);

  useEffect(() => {
    const arr = [];

    alcohalListByName.forEach((ele) => {
      const flavanoidsArray = ele.map((curEle) => curEle.Flavanoids);
      arr.push(flavanoidsArray);
    });

    setFlavanoidsDataList(arr);
  }, [alcohalListByName]);

  return (
    <>
      <div className="table-container">
        <div className="row">
          <h2>Flavanoids Table</h2>
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
              <th>Flavanoids Mean</th>
              {flavanoidsDataList &&
                flavanoidsDataList.map((ele, ind) => (
                  <td key={ind}>{Mean(ele).toFixed(3)}</td>
                ))}
            </tr>
            <tr>
              <th>Flavanoids Median</th>
              {flavanoidsDataList &&
                flavanoidsDataList.map((ele, ind) => (
                  <td key={ind}>{Median(ele).toFixed(3)}</td>
                ))}
            </tr>
            <tr>
              <th>Flavanoids Mode</th>
              {flavanoidsDataList &&
                flavanoidsDataList.map((ele, ind) => (
                  <td key={ind}>{Mode(ele).toFixed(3)}</td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FlavanoidsTable;
