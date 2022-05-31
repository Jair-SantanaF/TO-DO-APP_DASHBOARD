<script>

    import MenuLayout from "../$layouts/menu.svelte"
    import CheckBox from "../$components/checkbox.svelte"
    export let currentRoute = null

</script>

<MenuLayout route = { currentRoute.path }/>
<CheckBox/>