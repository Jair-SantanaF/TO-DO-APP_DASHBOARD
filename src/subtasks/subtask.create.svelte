<script>

    import { createEventDispatcher } from 'svelte'
    import { SubTasksStore } from '../stores'

    import SubTasksService from '../$services/subtasks.service'

    import Form from '../$components/form.svelte'
    import Input from '../$components/input.svelte'

    const dispatch = createEventDispatcher()

    let data = {}
    let loading = false
    let error = null

    async function createSubTask() {

        loading = true
        const resp = await SubTasksService.createSubTask(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

            SubTasksStore.append(resp.data)

        dispatch('created', resp.data)
    }

</script>

<Form on:submit={ createSubTask } { loading } >

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Titulo de la sub tarea" placeholder="Ingrese el titulo" icon="book" />
        </div>
    </div>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>