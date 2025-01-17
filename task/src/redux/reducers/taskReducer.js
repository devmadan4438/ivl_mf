import { taskActions } from '../actions';

const initialState = {
    loading: true,
    list: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case taskActions.LIST_SUCCESS:
            return {
                ...state,
                list: action.payload || [],
                loading: false
            };

        case taskActions.REMOVE_TASK_SC:
            let tasks = state.list.filter(task => task.id !== action.payload.id)

            return {
                ...state,
                list: tasks || [],
                loading: false
            };

        case taskActions.ADD_TASK_SC:
            state.list.push({
                id: state.list.length + 1,
                title: action.payload.title
            })
            return {
                ...state,
                list: state.list || [],
                loading: false
            };
        default:
            return state;
    }
};

export default taskReducer;