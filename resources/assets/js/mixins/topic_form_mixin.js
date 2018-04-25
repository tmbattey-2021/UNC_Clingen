export default {
    props: ['value', 'errors'],
    data() {
        return {
            updatedTopic: {}
        }
    },
    watch: {
        updatedTopic: function (to, from) {
            this.$emit('input', this.updatedTopic);
        },
        value: function () {
            if (this.value != this.updatedTopic) {
                this.syncValue();
            }
        }
    },
    methods: {
        syncValue() {
            if (this.value) {
                this.updatedTopic = JSON.parse(JSON.stringify(this.value));
            }
        }
    },
    mounted() {
        this.syncValue();
    }
}