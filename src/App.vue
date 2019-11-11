<template>
  <v-app>
   <v-content>
      <Tabs/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from './components/Tabs.vue';

@Component({
  components: {
    Tabs,
  },
})
export default class App extends Vue {
}
</script>
