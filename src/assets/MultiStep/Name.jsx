export const Name = ({ value, updateName }) => {
  const handleNameChange = (e) => updateName(e.target.value);

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={value} onChange={handleNameChange} />
    </div>
  );
};
