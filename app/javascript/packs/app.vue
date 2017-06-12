<template>
  <div id="hello">
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "I change it  Vue!",
      name: "john"
    }
  }
}
</script>

