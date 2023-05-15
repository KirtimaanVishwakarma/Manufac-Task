import { useEffect, useState } from "react";
import FlavanoidsTable from "./components/FlavanoidsTable";
import GammaTable from "./components/GammaTable";
import wineList from "./data/Wine-Data.json";

function App() {
  // alcoholNameList: array of Alcohol name
  const [alcoholNameList, setAlcoholNameList] = useState([]);

  // alcohalListByCategory: array of alcohal list by name
  const [alcohalListByName, setAlcohalListByName] = useState([]);

  // function to find the Alcohol name
  const alcoholName = () => {
    return wineList
      .map((ele) => ele.Alcohol)
      .filter((ele, ind, arr) => arr.indexOf(ele) === ind);
  };

  useEffect(() => {
    // alcoholNameList is array which contains the alohocol name
    const alcoholNameList = alcoholName();

    setAlcoholNameList(alcoholName());

    // alcoholListByName is a function to create arrays by alcohol name
    const alcoholListByName = () => {
      const arr = [];

      for (let i = 0; i < alcoholNameList.length; i++) {
        const newData = wineList.filter(
          (ele) => ele.Alcohol === alcoholNameList[i]
        );
        arr.push(newData);
      }

      setAlcohalListByName(arr);
    };

    alcoholListByName();
  }, []);

  return (
    <>
      <div className="container">
        <FlavanoidsTable
          alcoholNameList={alcoholNameList}
          alcohalListByName={alcohalListByName}
        />

        <GammaTable
          alcoholNameList={alcoholNameList}
          alcohalListByName={alcohalListByName}
        />
      </div>
    </>
  );
}

export default App;
