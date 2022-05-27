<script>

    import { ModalStore, TaskStore } from "../stores";
    import Tasks from '../tasks/tasks.svelte'
    import Task from '../tasks/task.svelte'
    import TasksCreate from '../tasks/task.create.svelte'
    import TaskDelete from '../tasks/task.delete.svelte'
    import TaskUpdate from '../tasks/task.update.svelte'

    import Modal from "../$components/modal.svelte";

</script>

<Modal  id="TaskCreate">
    <TasksCreate on:created={ TaskStore.modalClose }/>
</Modal>

<Modal  id="TaskRead">
    <Task/>
</Modal>

<Modal  id="TaskDelete">
    <TaskDelete on:deleted={ TaskStore.modalClose }/>
</Modal>

<Modal  id="TaskUpdate">
    <TaskUpdate on:updated={ TaskStore.modalClose }/>
</Modal>

<div class="container">
    <div class="columns">
        <div class="column">
            <Tasks/>
        </div>
    </div>
</div>