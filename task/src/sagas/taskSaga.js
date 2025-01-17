import { call, put, takeLatest } from "redux-saga/effects";
import { taskActions } from "../redux/actions";
import { tasks } from "../services/json/taskList";

// Fetch tasks from API
const fetchTaskFromAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 2000); // Simulate API call delay
    });
};

// Worker Saga: Fetch tasks
function* fetchTask() {
    try {
        const task = yield call(fetchTaskFromAPI);
        yield put({ type: taskActions.LIST_SUCCESS, payload: task });
    } catch (error) {
        yield put({ type: taskActions.LIST_ERROR, payload: error.message });
    }
}

function* removeTask(action) {
    try {
        yield put({ type: taskActions.REMOVE_TASK_SC, payload: action.payload });
    } catch (error) {
        yield put({ type: taskActions.REMOVE_TASK_FL, payload: error.message });
    }
}

function* addTask(action) {
    try {
        yield put({ type: taskActions.ADD_TASK_SC, payload: action.payload });
    } catch (error) {
        yield put({ type: taskActions.ADD_TASK_FL, payload: error.message });
    }
}

// Watcher Saga: Triggers fetchTask on taskActions.LIST
export function* watchTaskList() {
    yield takeLatest(taskActions.LIST, fetchTask);
    yield takeLatest(taskActions.REMOVE_TASK, removeTask);
    yield takeLatest(taskActions.ADD_TASK, addTask);
}
