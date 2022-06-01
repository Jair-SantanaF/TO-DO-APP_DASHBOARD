<script>

    import MenuLayout from "../$layouts/menu.svelte"
    import TasksStatus from "../tasks/tasks.status.svelte"
    export let currentRoute = null

</script>

<MenuLayout route = { currentRoute.path }/>
<TasksStatus/>