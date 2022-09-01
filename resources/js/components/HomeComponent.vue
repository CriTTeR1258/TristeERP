<template>
  <div class="row">
	</div>
</template>

<script>

    export default {
        data: function() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                url_report: '',
            };
        },
        props: {
            errors: Array,
        },
        methods: {
        },
        mounted() {
          console.log('Component mounted.');
        }
    }
</script>
