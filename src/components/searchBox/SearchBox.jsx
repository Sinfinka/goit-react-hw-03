import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}
