<script>

    import Moment from "moment"
    import { TaskStore } from "../stores"

</script>

{#if $TaskStore}
    
    <div class="columns">
        <div class="column">
            <div class="title is-4">Titulo</div>
            <div class="subtitle is-5">{ $TaskStore.name }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Descripcion</div>
            <div class="subtitle is-5">{ $TaskStore.description }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Categoria</div>
            <div class="subtitle is-5">{ $TaskStore.category }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Fecha de finalizacion</div>
            <div class="subtitle is-5">{ Moment($TaskStore.endDate).format('DD/MM/YYYY') }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Recordatorio</div>
            <div class="subtitle is-5">{ $TaskStore.reminder }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Fecha de creacion</div>
            <div class="subtitle is-5">{ Moment($TaskStore.created).format('DD/MM/YYYY') }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">status</div>
            <div class="subtitle is-5">{($TaskStore.status)}</div>
        </div>
    </div>

{/if}