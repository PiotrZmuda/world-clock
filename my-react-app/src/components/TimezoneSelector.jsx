import React, { useState } from "react";

function TimezoneSelector({ onAddUTC, availableTimezones }) {
  const [selectedUTC, setSelectedUTC] = useState("");

  function handleSelectChange(e) {
    setSelectedUTC(e.target.value);
  }

  function addUTCToList() { 
    if (selectedUTC) { 
      onAddUTC(selectedUTC);
      setSelectedUTC("");
    }
  }

  return (
    <div>
      <select value={selectedUTC} onChange={handleSelectChange}>
        <option value="">Wybierz strefę czasową</option>
        {availableTimezones.map((utc) => (
          <option key={utc} value={utc}>
            {utc}
          </option>
        ))}
      </select>
      <button onClick={addUTCToList}>Dodaj</button>
    </div>
  );
}

export default TimezoneSelector;

