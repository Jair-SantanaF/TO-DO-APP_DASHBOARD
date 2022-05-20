<script>

    import Button from '../$components/button.svelte'

    export let isLoading = false

</script>


<form on:submit|preventDefault>
    <slot></slot>

    <Button type='submit' text='Confirmar' color='primary'/>
    <Button text='Cancelar' color='danger' isLoading={ isLoading }/>
</form>