export default function SearchBox({ filter, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}