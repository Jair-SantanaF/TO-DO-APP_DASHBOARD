<script>

    export let value = ''

</script>

<div class="select">
    <select bind:value={ value }>
        <slot></slot>
    </select>
</div>