<script>
    import TasksService from '../$services/tasks.service'

    import Input from '../$components/input.svelte'

    let query = {}
    let loading = false
    let tasks = []

    getTasks()

    async function getTasks() {
        
        loading = true
        const resp = await TasksService.getTasks(query)
        loading = false

        if (resp.error) 
            return error = resp.error.message
    
        tasks = resp.data.tasks

    }

</script>

<Input on:enter= { getTasks } bind:value={ query.find } placeholder="Buscar" icon="search"></Input>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Fecha de termino</th>
        </tr>
    </thead>
    <tbody>
            {#each tasks as task, index}
                <tr>
                    <td>{ index + 1 }</td>
                    <td>{ task.name }</td>
                    <td>{ task.category }</td>
                    <td>{ task.description }</td>
                    <td>{ task.endDate }</td>
                </tr>
            {/each}
    </tbody>
</table>