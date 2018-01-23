<template>
  <div>
    <img src="./../assets/logo.png" />
    <h1>Up soon!</h1>
  </div>
</template>
<script>
  export default {
    data: {}
  }
</script>
<style>
  body {
    background-color: #333; 
  }
  img {
    position: absolute;
    top: calc(50% - 280px);
    left: calc(50% - 256px);
    box-shadow: 0 0 2px #111;
  }
  h1 {
    position: absolute;
    top: calc(50% + 256px);
    left: calc(50% - 256px);
    width: 512px;
    text-align: center;
    color: #888;
    font-size: 80px;
    margin-top: 0;
  }
</style>
