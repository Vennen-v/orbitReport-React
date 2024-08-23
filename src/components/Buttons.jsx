import satData from "./satData";

const satStuff = satData;
console.log(satStuff);

const Buttons = ({ filterByType, setSat, displaySats, handleAllOrbits }) => {
  return (
    <>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={handleAllOrbits}>All Orbits</button>
    </>
  );
};

export default Buttons;
