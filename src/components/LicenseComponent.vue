<template>
    <div class="container">
        <h3 @click="toggleVisibility" class="title">License
            <span v-if="!isVisible">+</span>
            <span v-else>-</span>
        </h3>
        <div class="license-content" v-show="isVisible">
            <p>{{ name }}</p>
            <p>{{ url }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LicenseComponent',
    props: {
        name: String,
        url: String
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        }
    },
    data() {
        return {
            isVisible: false
        }
    }
}
</script>

<style scoped>
.container h3 {
    margin: 0;
}
.container p {
    font-size: 12px;
    margin: 0;
}
</style>