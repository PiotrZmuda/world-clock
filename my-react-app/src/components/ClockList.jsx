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
