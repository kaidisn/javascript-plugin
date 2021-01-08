<script>
import { GrammarlyTextArea } from "@grammarly/vue-textarea";
import { demoText } from "./demo";

export default {
  data: () => ({ text: demoText }),
  components: { GrammarlyTextArea },
};
</script>

<template>
  <GrammarlyTextArea v-model="text" apiKey="5c891c34-55b1-4504-b1a2-5215d35757ba" />
</template>