<script>
    export let placeholder = "Ingrese su contraseña";
    export let color = "primary";
    export let value = "";
    export let size = "";
    export let icon = "";
    export let iconRight = "";
    export let label = "Contraseña";
    export let isRounded = false;
    export let isDisabled = false;
    export let isHovered = false;
    export let isFocus = false;
    export let isLoading = false;
</script>

<div class="field">
    {#if label}
        <label for="" class="label">{ label }</label>
    {/if}

    <div
        class="control"
        class:is-loading={ isLoading }
        class:has-icons-left={ icon }
        class:has-icons-right={ iconRight }
    >
        {#if icon}
            <span class="icon"><i class="fas fa-{ icon }" /></span>
        {/if}

        <input
            bind:value
            type="password"
            class="input is-{ color } is-{ size }"
            placeholder={ placeholder }
            class:is-rounded={ isRounded }
            class:is-hovered={ isHovered }
            class:is-focused={ isFocus }
            class:is-loading={ isLoading }
            disabled={ isDisabled }
        />
    </div>
</div>
