import { useEffect, useState } from "react";
import FlavanoidsTable from "./components/FlavanoidsTable";
import GammaTable from "./components/GammaTable";
import wineList from "./data/Wine-Data.json";

function App() {
  // alcoholNameList: array of Alcohol name
  const [alcoholNameList, setAlcoholNameList] = useState([]);

  // alcohalListByCategory: array of alcohal list by name
  const [alcohalListByName, setAlcohalListByName] = useState([]);

  useEffect(() => {
    const alcoholName = [];
    for (const ele of wineList) {
      if (alcoholName.indexOf(ele.Alcohol) === -1) {
        alcoholName.push(ele.Alcohol);
      }
    }
    // alcoholNameList is array which contains the alohocol name
    setAlcoholNameList(alcoholName);

    // alcoholListByName is a function to create arrays by alcohol name
    const alcoholListByName = () => {
      const arr = [];

      for (let i = 0; i < alcoholName.length; i++) {
        const newData = wineList.filter(
          (ele) => ele.Alcohol === alcoholName[i]
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
