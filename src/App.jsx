import { useState } from "react";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  const handleAllOrbits = () => setSat(satData);

  // const satMap = satData.map((data) => {
  //   return (
  //     <tbody>
  //       <tr key={data.id}>{data.name}</tr>
  //       <tr key={data.id}>{data.type}</tr>
  //       <tr key={data.id}>{data.launchDate}</tr>
  //       <tr key={data.id}>{data.operational}</tr>
  //     </tbody>
  //   );
  // });

  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
        handleAllOrbits={handleAllOrbits}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
