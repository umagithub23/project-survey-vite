export const FavoriteActivity = ({ value, updateActivity }) => {
  const handleActivityChange = (e) => updateActivity(e.target.value);

  return (
    <div>
      <label>Favourite Activity:</label>
      <input type="text" value={value} onChange={handleActivityChange} />
    </div>
  );
};

// <label>
//   What is your favorite activity when you travel there?
//   <select
//     name="favoriteActivity"
//     value={responses.favoriteActivity}
//     onChange={handleInputChange}
//   >
//     <option value="">Select an option</option>
//     <option value="Exploring the local culture">
//       Exploring the local culture
//     </option>
//     <option value="Relaxing on the beach">Relaxing on the beach</option>
//     <option value="Adventure and outdoor activities">
//       Adventure and outdoor activities
//     </option>
//     <option value="Shopping and dining">Shopping and dining</option>
//     <option value="Other">Other</option>
//   </select>
// </label>;
