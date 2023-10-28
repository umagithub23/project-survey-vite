export const Age = ({ value, updateAge }) => {
  const handleAgeChange = (e) => updateAge(e.target.value);

  return (
    <div>
      <label>Age:</label>
      <input
        type="number"
        value={value}
        onChange={handleAgeChange}
        min={0}
        max={120}
      />
    </div>
  );
};
