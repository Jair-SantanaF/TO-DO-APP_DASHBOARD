<script>

    export let type = 'button'
    export let text = ''
    export let color = ''
    export let size = ''
    export let icon = ''

    export let isLight = false
    export let isFullwidth = false
    export let isOutlined = false
    export let isInverted = false
    export let isRounded = false
    export let isLoading = false
    export let isDisabled = false

</script>

<button
    on:click
    type={ type }
    class="button is-{ color } is-{ size } "
    disabled={ isDisabled }
    class:is-light={ isLight }
    class:is-fullwidth={ isFullwidth }
    class:is-outlined={ isOutlined }
    class:is-inverted={ isInverted }
    class:is-rounded={ isRounded }
    class:is-loading={ isLoading }
>
    {#if icon != ''}
        <span class="icon">
            <i class="fas fa-{ icon }"></i>
        </span>
    {/if}
    <span>{ text }</span>
</button>