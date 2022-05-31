<script>
    import Moment from "moment"
    import { TasksStore, TaskStore, SubTasksStore } from "../stores"

    import SubTasksService from '../$services/subtasks.service'

    import Input from '../$components/input.svelte'
    import Icon from '../$components/icon.svelte'
    import Button from "../$components/button.svelte"

    let query = {}
    let loading = false

    getSubTasks()

    async function getSubTasks() {
        
        loading = true
        const resp = await SubTasksService.getSubTasks()
        loading = false

        if (resp.error) 
            return error = resp.error.message
    
            SubTasksStore.set(resp.data.subtasks)

    }
    
    async function deleteSubTask(SubTaskId) {

    const resp = await SubTasksService.deleteSubTask(SubTaskId)

    if(resp.error)
        return error = resp.error.message

        SubTasksStore.remove(SubTaskId)

}

</script>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Titulo</th>
        </tr>
    </thead>
    <tbody>
            {#each $SubTasksStore as subtask, index}
                <tr>
                    <td>{ index + 1 }</td>
                    <td>{ subtask.name }</td>
                    <td>
                        <Icon on:click={() => deleteSubTask(subtask._id)} icon="book-skull"/>
                    </td>
                </tr>
            {/each}
    </tbody>
</table>