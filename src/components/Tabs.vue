<template>
  <v-container>
 <Todo />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from './Todo.vue';
// import Done from './Done.vue';
// import Member from './Member.vue';

@Component({
  components: {
    Todo,
    //  Done,
    // Member
  },
})
export default class Tabs extends Vue {
}
</script>
