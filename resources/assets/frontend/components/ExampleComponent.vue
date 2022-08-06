<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Example Component</div>

            <div class="card-body">
              I'm an example component.
              <h1 class="text-red text-center">{{ message }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ref-component ref="modal"></ref-component>
  </div>
</template>

<script>
import RefComponent from '@/components/example/RefComponent.vue';

export default {
  name: 'ExampleComponent',

  components: {
    RefComponent,
  },

  data() {
    return {
      message: 'hai pro',
    };
  },

  mounted() {
    this.$refs.modal.showModal();
  },

  methods: {
    setMessage(message) {
      this.message = message;
    },
  },
};
</script>
