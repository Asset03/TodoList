  import { faCheck, faTrash,faX } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ tasks, onDeleteAction, onCompleted }) => {
  return (
    <div className="list">
      {tasks.length > 0 ? (
        tasks.map((el) => (
          <div key={el.id} className={`item item${el.completed ? '_done': ''}`}>
            <p className="item__title">{el.id} {el.title}</p>
            <div className="item__actions">
              <FontAwesomeIcon
                onClick={() => onCompleted(el.id)}
                icon={el.completed ? faX : faCheck}
                className="custom__icon"
              />
              <FontAwesomeIcon
                onClick={() => onDeleteAction(el.id)}
                icon={faTrash}
                className="custom__icon"
              />
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ color: "white", fontSize: "24px" }}>Tasks not exits!</h1>
      )}
    </div>
  );
};

export default List;
