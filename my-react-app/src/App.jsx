// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//- Przechowuje listę stref czasowych, które mają być wyświetlane (np. ["UTC", "UTC+1", "UTC-1"]).
// - Dostarcza funkcje do dodawania i usuwania stref z listy.


import React, { useState } from "react";
import { ClockList } from "./components/ClockList";
import TimezoneSelector from "./components/TimezoneSelector";

function App() {
  const [UTCList, setUTCList] = useState([]);

  const UTCS = [
    "-03",
    "-02",
    "-01",
    " 00",
    "+01",
    "+02",
    "+03",
  ];

  // Funkcja dodająca wybraną strefę czasową do listy w głównym komponencie
  function addUTCToList(selectedUTC) {
    if (!UTCList.includes(selectedUTC)) {
      setUTCList([...UTCList, selectedUTC]);
    }
  }

  // Funkcja usuwająca strefę czasową z listy
  function removeItem(item) {
    setUTCList(UTCList.filter((utc) => utc !== item));
  }

  return (
    <div>
      <TimezoneSelector onAddUTC={addUTCToList} availableUTCS={UTCS} />

      <ul>
        {UTCList.map((utc) => (
          <li key={utc} onClick={() => removeItem(utc)}>
            {utc}
          </li>
        ))}
      </ul>

      <ClockList timeZoneList={UTCList} removeItem={removeItem} />
    </div>
  );
}

export default App;
