<template>
  <v-container>
<div v-for="task in tasks" :key="task.id">
 <v-card>
  <v-card-title
   class="headline"
   v-text="task.name">
  </v-card-title>
 </v-card>
</div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Task {
  id:number;
 name:string;
 isFinished:boolean;
 updatedTimeStamp:number;
}
@Component
export default class Todo extends Vue {
  tasks:Task[] = [
    {
      id: 0,
      name: 'ゴミ出し(もえるごみ)',
      isFinished: false,
      updatedTimeStamp: 1573482935,
    },
    {
      id: 1,
      name: 'ゴミ出し(もえないごみ)',
      isFinished: true,
      updatedTimeStamp: 1573482936,
    },
    {
      id: 2,
      name: 'ゴミ出し(ペットボトル)',
      isFinished: false,
      updatedTimeStamp: 1573482933,
    },

  ];
}
</script>
