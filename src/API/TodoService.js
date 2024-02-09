import axios from "axios";

export const getTasksPageAndLimit = async (page,limit) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos",{
        params: {
            _page: page,
            _limit: limit
        }
    });
    return response;

}