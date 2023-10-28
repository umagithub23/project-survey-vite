export const ReasonTravel = ({ value, updateReason }) => {
  const handleTravelReasonChange = (e) => updateReason(e.target.value);

  return (
    <div>
      <label>Travel Reason:</label>
      <input type="text" value={value} onChange={handleTravelReasonChange} />
      {/* <input type="radio" value={value}>
        Personal{" "}
      </input> */}
    </div>
  );
};
