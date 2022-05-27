<script>

    import { createEventDispatcher } from 'svelte'
    import { TaskStore, TasksStore } from '../stores'
    import TasksService from '../$services/tasks.service'

    import Form from '../$components/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let error = null

    async function deleteTask() {

        loading = true
        const resp = await TasksService.deleteTask($TaskStore._id)
        loading = false

        if(resp.error)
            return error = resp.error.message

            TasksStore.remove($TaskStore._id)

        dispatch('deleted')
    }

</script>

{#if $TaskStore}
    <Form on:submit={deleteTask} {loading} >
        <div class="title">¿Seguro que deseas eleminar el curso?</div>
        <div class="subtitle">{ $TaskStore.name }</div>
    </Form>
{/if}
