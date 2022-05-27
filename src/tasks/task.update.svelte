<script>

    import { createEventDispatcher } from 'svelte'
    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Form from '../$components/form.svelte'
    import Input from '../$components/input.svelte'
    import InputDate from '../$components/input.date.svelte'
    import Select from '../$components/select.svelte'

    const dispatch = createEventDispatcher()

    $: $TaskStore && updateData()

    let data = {}
    let loading = false
    let error = null

    async function updateTask() {

        loading = true
        const resp = await TasksService.updateTask($TaskStore._id, data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.replace(resp.data)

        dispatch('updated', resp.data)
    }

    function updateData() {
        data = {
            name: $TaskStore.name,
            description: $TaskStore.description,
            endDate: $TaskStore.endDate,
            reminder: $TaskStore.reminder,
            category: $TaskStore.category,
        }
    }

</script>

<Form on:submit={ updateTask } { loading } >

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Titulo de la tarea" placeholder="Ingrese el titulo de la tarea" icon="book" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.description } label="Descripcion de la tarea" placeholder="Descricpion" icon="file-lines" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <InputDate bind:value={ data.endDate } label="Fecha de termino" placeholder="Ingrese la fecha" icon="calendar-days" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Select bind:value={ data.reminder } label="Recordatorio" placeholder="Recordatorio" icon="bell" >
                <option value="">Recordatorio</option>                
                <option value="hour">1 hora antes</option>
                <option value="day">1 dia antes</option>
                <option value="week">1 semana antes</option>
            </Select>        
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Select bind:value={ data.category } label="Categoria" placeholder="Categoria" icon="circle-nodes" >
                <option value="">Selecciona una opcion</option>
                <option value="Home">Casa</option>
                <option value="Work">Trabajo</option>
                <option value="School">Escuela</option>
            </Select>
        </div>
    </div>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>