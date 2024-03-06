import { createStore } from 'vuex';

const TASKS_STORAGE_KEY = 'tasks';

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getTaskById: state => id => {
      return state.tasks.find(task => task.id === id);
    }
  },
  mutations: {
    initializeStore(state) {
      const savedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
    addTask(state, task) {
      const taskId = Date.now().toString();
      const taskWithId = { ...task, id: taskId };
      state.tasks.push(taskWithId);
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask) {
      if (updatedTask && updatedTask.id) {
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          state.tasks.splice(index, 1, updatedTask);
          localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(state.tasks));
        }
      } else {
        console.error('Ошибка обновления задачи: объект updatedTask не содержит идентификатора');
      }
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('addTask', task);
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
    },
    saveEditedTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask);
    }
  }
});