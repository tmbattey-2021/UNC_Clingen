<style></style>
<template>
    <div class="clingen-app-container container">
        <router-view></router-view>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions('curationStatuses', {
                getAllCurationStatuses: 'getAllItems'
            }),
            ...mapActions('rationales', {
                getAllRationales: 'getAllItems'
            }),
            ...mapActions({
                getFeatures: 'getFeatures'
            })
        },
        mounted: function () {
            if (this.$store.state.curations.items.length == 0) {
                this.getAllCurationStatuses();
                this.getAllRationales();
            }
            if (
                !this.$store.state.features.transferEnabled
                || !this.$store.state.features.sendToGciEnabled
            ) {
                this.getFeatures();
            }
        }
    }
</script>