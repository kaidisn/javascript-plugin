<script>
import { GrammarlyTextArea } from "@grammarly/vue-textarea";
import { demoText, demoClientId } from "./demo";

export default {
  data: () => ({ text: demoText, clientId: demoClientId }),
  components: { GrammarlyTextArea },
};
</script>

<template>
  <GrammarlyTextArea v-model="text" rows="20" :clientId="clientId" />
</template>