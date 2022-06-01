<script>
    import Moment from "moment"
    import { TasksStore, TaskStore, ModalStore } from "../stores"

    import TasksService from '../$services/tasks.service'

    import Input from '../$components/input.svelte'
    import Icon from '../$components/icon.svelte'
    import Button from "../$components/button.svelte"
    import CheckBox from "../$components/checkbox.svelte"

    let data = {}
    let query = {}
    let loading = false

    getTasks()

    async function getTasks() {
        
        loading = true
        const resp = await TasksService.getTasks(query)
        loading = false

        if (resp.error) 
            return error = resp.error.message
    
        TasksStore.set(resp.data.tasks)

    }

    async function updateTask(task) {

        data.status = !task.status
        const resp = await TasksService.updateTask(task._id, data)

        if(resp.error)
            return error = resp.error.message

        TasksStore.replace(resp.data)

    }

</script>


<div class="columns">
    <div class="column">
        <Input on:enter= { getTasks } bind:value={ query.find } placeholder="Buscar" icon="search"></Input>
    </div>
    <div class="column is-narrow">
        <Button text="Buscar" color="info" icon="search"/>
    </div>
</div>

<Button on:click={() => TaskStore.modalCreate()} text="Agregar nueva tarea" color="primary" icon="file-circle-plus"/>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Fecha de termino</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
            {#each $TasksStore as task, index}
                <tr>
                    <td>{ index + 1 }</td>
                    <td><CheckBox on:change={ () => updateTask(task) } bind:isCheck={ task.status }/></td>
                    <td>{ task.name }</td>
                    <td>{ task.category }</td>
                    <td>{ task.description }</td>
                    <td>{ Moment(task.endDate).format('DD/MM/YYYY') }</td>
                    <td>
                        <Icon on:click={() => TaskStore.modalDelete(task)} icon="book-skull"/>
                        <Icon on:click={() => TaskStore.modalUpdate(task)} icon="edit"/>
                        <Icon on:click={() => TaskStore.modalRead(task)} icon="book-open"/>

                    </td>
                </tr>
            {/each}
    </tbody>
</table>