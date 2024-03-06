<template>
  <div class="container">
    <h2>Список задач</h2>
    <ul class="taskList">
      <li v-for="task in tasks" :key="task.id" class="taskItem">
        <div class="taskContent">
          <h3 class="taskTitle">{{ task.title }}</h3>
          <p class="taskDescription">{{ task.description }}</p>
        </div>
        <div class="taskActions">
          <button @click="showDeleteModal(task.id)" class="deleteButton">Удалить</button>
          <router-link :to="`/edit/${task.id}`" class="editLink">Редактировать</router-link>
        </div>
      </li>
    </ul>
    <router-link to="/create" class="createLink">Создать задачу</router-link>
    <delete-modal :show="showModal" @confirm="confirmDelete" @cancel="cancelDelete" />
  </div>
</template>

<script>
import DeleteModal from './DeleteModal.vue';

export default {
  name: 'TaskList',
  components: {
    DeleteModal
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  data() {
    return {
      showModal: false,
      taskToDeleteId: null
    };
  },
  methods: {
    showDeleteModal(id) {
      this.taskToDeleteId = id;
      this.showModal = true;
    },
    confirmDelete() {
      this.$store.dispatch('deleteTask', this.taskToDeleteId);
      this.showModal = false;
    },
    cancelDelete() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.taskList {
  list-style: none;
  padding: 0;
}

.taskItem {
  background-color: #cfe2f3;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.taskContent {
  margin-bottom: 15px;
}

.taskTitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.taskDescription {
  font-size: 16px;
  color: #333;
}

.taskActions {
  display: flex;
  align-items: center;
}

.deleteButton {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.deleteButton:hover {
  background-color: #c82333;
}

.editLink {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.editLink:hover {
  color: #0056b3;
}

.createLink {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.createLink:hover {
  background-color: #0056b3;
}
</style>