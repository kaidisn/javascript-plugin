<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import Editor from "./components/Editor";

export default {
  name: "App",
  components: {
    Editor
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

textarea {
  width: 100%;
  padding: 16px;
  line-height: 1.4;
  resize: none;
  font-family: sans-serif;
}
</style>
