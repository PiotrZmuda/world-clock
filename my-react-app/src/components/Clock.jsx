// komponent wyświetlający czas dla konkretnej strefy czasowej.

// Clock:

//stwóż zegar

// komponent wyświetlający czas dla konkretnej strefy czasowej
// - Otrzymuje strefę czasową jako props.
// - Wykorzystuje useEffect i useState do zarządzania czasem


import { useEffect, useState } from "react";

function Clock({ timeZone, removeItem }) {
  const [time, setTime] = useState(calculateTime(timeZone));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime(timeZone));
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  function calculateTime(utc) {
    return new Date(Date.now() + utc * 60 * 60 * 1000);
  }

  function pad(item) {
    return String(item).padStart(2, "0");
  }

  return (
    <>
      <div>
        <div>
          <div>
            {pad(time.getHours())}:{pad(time.getMinutes())}:
            {pad(time.getSeconds())}
          </div>
        </div>
        <div onClick={() => removeItem(timeZone)}>
          <button>Usuń Zegar</button>
        </div>
      </div>
    </>
  );
}

export default Clock;
