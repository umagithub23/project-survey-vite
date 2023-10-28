export const Season = ({ value, updateSeason }) => {
  const handleFavoriteSeasonChange = (e) => updateSeason(e.target.value);

  return (
    <div>
      <label>Favorite Season:</label>
      <select value={value} onChange={handleFavoriteSeasonChange}>
        <option value="">Select a Season</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
      </select>
    </div>
  );
};
