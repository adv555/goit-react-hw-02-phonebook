const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Filter by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
