<template>
  <div class="container">
    <h2 class="title">{{editItemId ? 'Редактировать' : 'Создать новую'}} задачу</h2>
    <form @submit.prevent="saveTask" class="taskForm">
      <div class="formGroup">
        <label for="title" class="formLabel">Заголовок:</label>
        <input type="text" id="title" v-model="task.title" class="formInput" >
      </div>
      <div class="formGroup">
        <label for="description" class="formLabel">Описание:</label>
        <textarea id="description" v-model="task.description" class="formTextarea" ></textarea>
      </div>
      <button :disabled="!task.description || !task.title" type="submit" class="createBtn createBtnPrimary">{{editItemId ? 'Сохранить' : 'Создать'}}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      editItemId: null,
      task: {
        title: '',
        description: ''
      }
    };
  },
  created() {
    if (this.$route.params.id) {
      this.editItemId = this.$route.params.id;
      this.task = this.$store.getters.getTaskById(this.$route.params.id);
    }
  },
  methods: {
    saveTask() {
      const url = this.editItemId ? 'saveEditedTask' : 'createTask'
      this.$store.dispatch(url, this.task)
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Ошибка сохранения задачи:', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.title{
  font-size: 24px;
  margin-bottom: 20px;
}

.taskForm {
  background-color: #cfe2f3;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.formGroup {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.formLabel {
  font-weight: bold;
}

.formInput,
.formTextarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.formInput:focus,
.formTextarea:focus {
  border-color: #007bff;
  outline: none;
}

.formTextarea {
  resize: vertical;
  min-height: 150px;
}

.createBtn{
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.createBtnPrimary {
  background-color: #007bff;
  color: #fff;
}

.createBtnPrimary:hover {
  background-color: #0056b3;
}

.createBtnPrimary:disabled{
  cursor: default;
  background-color: grey;
}
</style>