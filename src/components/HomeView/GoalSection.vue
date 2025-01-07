<script setup lang="ts">
import GoalMarker from "@/components/HomeView/GoalSection/GoalMarker.vue";
import {useScoreboardStore} from "@/stores/scoreboard";
import {computed} from "vue";

const scoreboardStore = useScoreboardStore()

const goals = computed(() => scoreboardStore.goals)
</script>

<template>
  <section class="container mx-auto py-4 rounded-2xl h-full flex flex-col gap-4">
    <div class="flex-1 bg-secondary rounded-2xl p-4 min-h-[100px]">

    </div>
    <div class="grid grid-cols-4 gap-3">
      <GoalMarker v-for="g in goals" :key="g.points" :goalMarker="g" />
    </div>
  </section>
</template>

<style scoped>

</style>
