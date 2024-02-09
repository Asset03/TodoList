import { useMemo } from "react";

const useFilter = (tasks, filter) => {
  const sortedTasks = useMemo(() => {
    if (filter.sortBy) {
      return [...tasks].sort((a, b) =>{
        if (a[filter.sortBy] === b[filter.sortBy]) {
          return 0;
        }
        if (typeof a[filter.sortBy] === 'string') {
          return a[filter.sortBy].localeCompare(b[filter.sortBy]);
        }
        return a[filter.sortBy] - b[filter.sortBy]; 
      });
    }
    return tasks;
  }, [filter.sortBy, tasks]);

  const filteredAndSortedTasks = useMemo(() => {
    return sortedTasks.filter((el) =>
      el.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedTasks]);

  return filteredAndSortedTasks;
};
export default useFilter;
