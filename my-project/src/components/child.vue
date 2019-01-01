<template>
    <div>
        <div>{{name}}</div>
    </div>
</template>

<script>
export default {
    name:'Child',
    props:{
        name:{
            type:'String',
            value:''
        }
    }
}
</script>

<style>

</style>
