<script>

    import { navigateTo } from "svelte-router-spa";
    import UserService from '../$services/users.service'

    import Input from "../$components/input.svelte";
    import InputPassword from "../$components/input.password.svelte";
    import Form from "../$components/form.svelte";

    let data = {}
    let loading = false
    let error = null

    async function userLogin() {

        loading = true
        const resp = await UserService.userLogin(data)
        loading = false

        if (resp.error) 
            return error = resp.error.message

        const token = resp.data.session.token
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(resp.data.user))

        navigateTo('home')

    }

</script>

<Form on:submit={ userLogin } loading = { loading }>

    <Input bind:value={ data.email } label="Correo" placeholder="Ingrese su correo" />
    <InputPassword bind:value={ data.password }/>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>
