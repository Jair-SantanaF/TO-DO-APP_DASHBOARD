<script>

    let isCheck = false

    function holamundo() {
        console.log(isCheck);
    }

</script>


<label class="checkbox">
    <input on:change={ holamundo } bind:checked={ isCheck } type="checkbox"> 
    Remember me
</label>