<script setup lang="ts">
import GoalMarker from "@/components/HomeView/GoalSection/GoalMarker.vue";
import {useScoreboardStore} from "@/stores/scoreboard";
import {computed} from "vue";

const scoreboardStore = useScoreboardStore()

const goals = computed(() => scoreboardStore.goals)
</script>

<template>
  <section class="container mx-auto bg-secondary py-4 px-2 rounded-2xl h-full">
    <div class="grid grid-cols-4 gap-2 h-full">
      <GoalMarker v-for="g in goals" :key="g.points" :goalMarker="g" />
    </div>
  </section>
</template>

<style scoped>

</style>
