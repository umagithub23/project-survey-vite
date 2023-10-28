export const TravelDestinationInput = ({ value, updateDestination }) => {
  const handleDestinationChange = (e) => updateDestination(e.target.value);

  return (
    <div>
      <label>Travel Destination:</label>
      <input type="text" value={value} onChange={handleDestinationChange} />
    </div>
  );
};
