<script>

    import MenuLayout from "../$layouts/menu.svelte";
    import { ModalStore, TaskStore } from "../stores";
    import Tasks from '../tasks/tasks.svelte'
    import Task from '../tasks/task.svelte'
    import TasksCreate from '../tasks/task.create.svelte'
    import TaskDelete from '../tasks/task.delete.svelte'
    import TaskUpdate from '../tasks/task.update.svelte'
    import SubTasks from '../subtasks/subtasks.svelte'
    import SubTasksCreate from '../subtasks/subtask.create.svelte'

    import Modal from "../$components/modal.svelte";

    export let currentRoute = null

</script>

<Modal  id="TaskCreate">
    <TasksCreate on:created={ TaskStore.modalClose }/>
</Modal>

<Modal  id="TaskRead">
    <Task/>
    <SubTasksCreate/>
    <SubTasks/>
</Modal>

<Modal  id="TaskDelete">
    <TaskDelete on:deleted={ TaskStore.modalClose }/>
</Modal>

<Modal  id="TaskUpdate">
    <TaskUpdate on:updated={ TaskStore.modalClose }/>
</Modal>

<MenuLayout route = { currentRoute.path }/>

<div class="container is-mobile">
    <div class="columns">
        <div class="column">
            <Tasks/>
        </div>
    </div>
</div>