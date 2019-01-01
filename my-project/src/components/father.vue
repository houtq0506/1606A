<template>
    <div>
        <div v-bind:name="name">father</div>
    </div>
</template>

<script>
export default {
    name:'Father',
    data(){
        return {
            name:'zs'
        }
    }
}
</script>

<style>

</style>
