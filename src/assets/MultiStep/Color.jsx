export const Color = ({ value, updateColor }) => {
  const handleFavoriteColorChange = (e) => updateColor(e.target.value);

  return (
    <div>
      <label>Favorite Color:</label>
      <section className="radioGroup">
        <label style={{ color: "violet" }}>
          <input
            type="radio"
            value="violet"
            checked={"violet" === value}
            onChange={handleFavoriteColorChange}
          />
          Violet
        </label>
        <label style={{ color: "indigo" }}>
          <input
            type="radio"
            value="indigo"
            checked={"indigo" === value}
            onChange={handleFavoriteColorChange}
          />
          Indigo
        </label>
        <label style={{ color: "blue" }}>
          <input
            type="radio"
            value="blue"
            checked={"blue" === value}
            onChange={handleFavoriteColorChange}
          />
          Blue
        </label>
        <label style={{ color: "green" }}>
          <input
            type="radio"
            value="green"
            checked={"green" === value}
            onChange={handleFavoriteColorChange}
          />
          Green
        </label>
        <label style={{ color: "yellow" }}>
          <input
            type="radio"
            value="yellow"
            checked={"yellow" === value}
            onChange={handleFavoriteColorChange}
          />
          Yellow
        </label>
        <label style={{ color: "orange" }}>
          <input
            type="radio"
            value="orange"
            checked={"orange" === value}
            onChange={handleFavoriteColorChange}
          />
          Orange
        </label>
        <label style={{ color: "red" }}>
          <input
            type="radio"
            value="red"
            checked={"red" === value}
            onChange={handleFavoriteColorChange}
          />
          Red
        </label>
      </section>
    </div>
  );
};
