<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">I'm an example component.</div>
          <button type="button" class="btn btn-primary" @click="setMessage">
            Set Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomEventComponent',

  methods: {
    setMessage() {
      this.$emit('onMessage', 'hihi hai pro');
    },
  },
};
</script>

<style lang="scss" scoped></style>
