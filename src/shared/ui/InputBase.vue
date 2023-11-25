<template>
  <input
      type="text"
      class="input-base"
      :placeholder="placeholder"
      v-model.trim="value"
      @input="onInput()"
  >
</template>

<script>
export default {
  name: "InputBase",
  props:{
    placeholder:{
      type: String
    }
  },
  emits:['onInput'],
  data(){
    return{
      value: '',
    }
  },
  methods: {
    onInput: function () {
      this.$emit('onInput', this.value)
    },
  }
}
</script>

<style lang="scss" scoped>
.input-base{
  font-family: 'Montserrat';
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  background: $neutral-100;
  padding: 16px 24px;
  color: $primary-100;
  font-size: 14px;
  font-weight: 400;
  width: 100%;

  &::placeholder{
    @include text-secondary
  }
}
</style>