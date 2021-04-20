import "./styles.css";
const List = (props) => {
  return (
    <div>
      <li>
        {props.text}
        <button
          className="delete-button"
          onClick={() => props.delete(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
export default List;
