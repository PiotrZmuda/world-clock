import React, { useState } from "react";
import { ClockList } from "./components/ClockList";
import TimezoneSelector from "./components/TimezoneSelector";

function App() {
  const [UTCList, setUTCList] = useState([]);

  const UTCS = ["-03", "-02", "-01", " 00", "+01", "+02", "+03"];

  function addUTCToList(selectedUTC) {
    if (!UTCList.includes(selectedUTC)) {
      setUTCList([...UTCList, selectedUTC]);
    }
  }

  function removeItem(item) {
    setUTCList(UTCList.filter((utc) => utc !== item));
  }
  function renderUTCList(UTCList, removeItem) {
    return (
      <div >
        {UTCList.map((utc) => (
          <li key={utc} onClick={() => removeItem(utc)}>
            UTC{utc} &nbsp; 
          </li>
        ))}
      </div>
    );
  }

  return (
    <div>
      <TimezoneSelector onAddUTC={addUTCToList} availableTimezones={UTCS} />
      <div className="timezone-display">
        <div>{renderUTCList(UTCList, removeItem)}</div>
        <div>
          <ClockList timeZoneList={UTCList} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
