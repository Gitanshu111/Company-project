import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: uuidv4(), text: action.payload },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.newTask }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
