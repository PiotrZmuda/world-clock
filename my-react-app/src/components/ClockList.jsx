//komponent wyświetlający listę zegarów

// ClockList:
// - Otrzymuje listę stref czasowych z App i dla każdej strefy renderuje komponent Clock.
// - Dla każdego zegara jest przycisk "Usuń", który usuwa zegar ze strefą z listy.

// Komponent ClockList
import Clock from "./Clock";

export const ClockList = ({ timeZoneList, removeItem }) => {
  return (
    <>
      {timeZoneList.map((timeZone) => (
        <Clock key={timeZone} timeZone={timeZone} removeItem={removeItem} />
      ))}
    </>
  );
};
