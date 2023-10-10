// dodaj komponent do wybierania i dodawania nowych stref czasowych.



//TimezoneSelector:
// - Posiada własny stan dla aktualnie wybranej strefy czasowej.
// - Umożliwia wybór strefy czasowej z rozwijanej listy (zwykły input select).
// - Przycisk "Dodaj" dodaje wybraną strefę do listy w komponencie App.


import React, { useState } from "react";

function TimezoneSelector({ onAddUTC, availableUTCS }) {
  const [selectedUTC, setSelectedUTC] = useState(""); // Zmienna do przechowywania wybranej strefy czasowej UTC

  // Funkcja obsługująca zmiany w elemencie select
  function handleSelectChange(e) {
    setSelectedUTC(e.target.value);
  }

  // Funkcja dodająca wybraną strefę czasową do listy w głównym komponencie
  function addUTCToList() {
    if (selectedUTC) {
      onAddUTC(selectedUTC);
      setSelectedUTC(""); // Czyszczenie wyboru w elemencie select po dodaniu
    }
  }

  return (
    <div>
      <select value={selectedUTC} onChange={handleSelectChange}>
        <option value="">Wybierz strefę czasową</option>
        {availableUTCS.map((utc) => (
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
