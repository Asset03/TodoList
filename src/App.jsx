import "./App.css";
import List from "./components/List";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Modal from "./components/Modal";
import SortFilter from "./components/SortFilter";
import useFilter from "./hooks/useFilter";
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading/Loading";
import { getTasksPageAndLimit } from "./API/TodoService";


function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({ sortBy: "", query: "" });
  const [modal, setModal] = useState(false)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5)
  const [totalPages, setTotalPages] = useState(1);
  const filteredAndSortedTasks = useFilter(tasks, filter);

  const [fetchTasks, taskError] = useFetch(async (page,limit)=>{
    setLoading(true)
    const response = await getTasksPageAndLimit(page,limit)
    setTasks(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(Math.ceil(totalCount/limit))
    setLoading(false);
  }) 

  useEffect(() => {
    fetchTasks(page,limit);
  }, [page,limit]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const onDeleteAction = (id) => {
      setTasks(tasks.filter((el) => el.id !== id));
  };

  const onCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id){
        return {...task,completed: !task.completed}
      }
      return task
    }))
  };

  return (
    <div className="container">
      <Modal create={addTask} count={tasks.length} modal={modal} setModal={setModal} />
      <div className="card card__block">
        <h1 className="title">Get Things Done!</h1>
        <button
          onClick={(e) => setModal(true)}
          className="button"
          type="button"
        >
          Add Task
        </button>
        <SortFilter filter={filter} setFilter={setFilter} />
        {loading ? (
          <Loading />
        ) : (
          <List
            tasks={filteredAndSortedTasks}
            onDeleteAction={onDeleteAction}
            onCompleted={onCompleted}
          />
        )}
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default App;
