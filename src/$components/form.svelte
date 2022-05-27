<script>

    import { ModalStore } from "../stores";
    import Button from '../$components/button.svelte'

    export let loading = false

</script>


<form on:submit|preventDefault>

    <slot></slot>

    <Button type='submit' text='Confirmar' color='primary' isLoading={ loading }/>
    <Button on:click={ ModalStore.close } text='Cancelar' color='danger'/>

</form>