import { useState } from "react";

const Modal = ({ create, count, modal, setModal }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: count + 1,
      ...task,
    };
    create(newTask);
    setTask({ title: "", description: "" });
    setModal(false)
  };

  return (
    <div className="modal" style={{display:`${modal ? 'flex' : 'none'}`}} onClick={()=>setModal(false)}>
      <form className="form" onClick={(e) => e.stopPropagation()}>
        <input
          value={task.title}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, title: e.target.value }))
          }
          className="form__input"
          type="text"
          placeholder="Write here title..."
        />
        <input
          value={task.description}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, description: e.target.value }))
          }
          className="form__input"
          type="text"
          placeholder="Write here description..."
        />
        <button
          onClick={(e) => addTask(e)}
          className="form__button"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>

  );
};

export default Modal;
