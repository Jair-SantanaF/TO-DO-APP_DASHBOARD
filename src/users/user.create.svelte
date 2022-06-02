<script>

    import { navigateTo } from "svelte-router-spa"
    import UserService from "../$services/users.service"

    import Input from "../$components/input.svelte"
    import InputPassword from "../$components/input.password.svelte"
    import Form from "../$components/form.svelte"

    let data = {}
    let loading = false
    let error = null

    async function userCreate() {

        loading = true
        const resp = await UserService.userCreate(data)
        loading = false

        if (resp.error) 
            return error = resp.error.message

        navigateTo('login')

    }

</script>

<Form on:submit={ userCreate } loading = { loading }>

    <Input bind:value={ data.firstName } label="Nombre" placeholder="Ingrese su Primer Nombre" />
    <Input bind:value={ data.lastName } label="Apellido" placeholder="Ingrese su Primer Apellido" />
    <Input bind:value={ data.phone } label="Telefono" placeholder="Ingrese su Numero Telefonico" />
    <Input bind:value={ data.description } label="Ocupacion" placeholder="Ingrese su actual ocupacion" />
    <Input bind:value={ data.email } label="Correo" placeholder="Ingrese su Correo" />
    <InputPassword bind:value={ data.password }/>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>