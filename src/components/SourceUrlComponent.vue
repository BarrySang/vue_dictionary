<template>
    <div class="container">
        <h3 @click="toggleVisibility">Source url
            <span v-if="!isVisible">+</span>
            <span v-else>-</span>
        </h3>
        <p v-show="isVisible">Source url: {{ url }}</p>
    </div>
</template>

<script>
export default {
    name: 'SourceUrlComponent',
    props: {
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
    .container {
        display: block !important;
        font-size: 12px;
    }

    .container p {
        margin: 0;
    }

    .container h3 {
        margin: 0;
        font-size: 18px;
    }
</style>