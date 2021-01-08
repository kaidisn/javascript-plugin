<script>
import { GrammarlyTextArea } from "@grammarly/vue-textarea";
import { demoText, demoApiKey } from "./demo";

export default {
  data: () => ({ text: demoText, apiKey: demoApiKey }),
  components: { GrammarlyTextArea },
};
</script>

<template>
  <GrammarlyTextArea v-model="text" rows="20" :apiKey="apiKey" />
</template>