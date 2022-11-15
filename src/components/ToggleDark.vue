<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-1">
                <i class="fa-sharp fa-solid fa-lightbulb"></i>
            </div>
            <div class="col-sm">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                        :checked="(mode === 'dark') ? 'checked' : false" @change="$emit('Toggle')">
                    <label class="form-check-label Toggle" for="flexSwitchCheckDefault"> </label>
                    <i class="fas fa-moon"></i>
                </div>
            </div>
            <div class="col-sm">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style>


.form-check-input:checked {
    background-color: #EF233C;
    border-color: #EF233C;

}
</style>