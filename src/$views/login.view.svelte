<script>

    import UserLogin from "../users/user.login.svelte";

</script>

<style>

    .center {
        height: 100vh;
        display: grid;
        align-content: center;
    }

</style>

<div class="columns">
    <div class="column"></div>
        <div class="column is-4 center">
            <UserLogin/>
        </div>
    <div class="column"></div>
</div>

