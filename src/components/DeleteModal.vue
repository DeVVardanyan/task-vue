<template>
    <div v-if="show" class="modal">
        <div class="modalContent">
            <p>Вы уверены, что хотите удалить эту задачу?</p>
            <div class="buttons">
                <button class="confirmButton" @click="confirmDelete">Да</button>
                <button class="cancelButton" @click="cancelDelete">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeleteModal',
    props: {
        show: Boolean
    },
    methods: {
        confirmDelete() {
            this.$emit('confirm');
        },
        cancelDelete() {
            this.$emit('cancel');
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.buttons {
    display: flex;
    justify-content: center;
}

.modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
}

.confirmButton,
.cancelButton {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

}

.confirmButton {
    background-color: #28a745;
    color: white;
}

.confirmButton:hover {
    background-color: #218838;
}

.cancelButton {
    background-color: #dc3545;
    color: white;
}

.cancelButton:hover {
    background-color: #c82333;
}
</style>