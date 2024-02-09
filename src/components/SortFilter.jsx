const SortFilter = ({filter, setFilter }) => {
  return (
    <div className="sort-filter">
      <div className="sort-block">
        Sort By:
        <select
          value={filter.sortBy}
          onChange={(e) => setFilter({...filter,sortBy: e.target.value})}
          className="sort__selector"
        >
          <option disabled value="">
            Select
          </option>
          <option value={"title"}>By title</option>
          <option value={"completed"}>By completed</option>
        </select>
      </div>
      <div className="filter-block">
        <input
          value={filter.query}
          onChange={(e) => setFilter({...filter,query: e.target.value})}
          className="filter__input"
          type="text"
          placeholder="Search filter..."
        />
      </div>
    </div>
  );
};

export default SortFilter;
