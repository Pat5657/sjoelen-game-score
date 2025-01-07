<script setup lang="ts">

import {useScoreboardStore} from "@/stores/scoreboard";
import {ref} from "vue";
import type {GoalMarker} from "@/types/goalMarker.ts";

interface Props {
  goalMarker: GoalMarker
}

const props = defineProps<Props>()

const scoreboardStore = useScoreboardStore()

const scored = ref(0)

function handleUp() {
  scored.value++
  scoreboardStore.increaseScore(props.goalMarker)
}
function handleDown() {
  scored.value = Math.max(0, scored.value - 1)
  scoreboardStore.decreaseScore(props.goalMarker)
}

</script>

<template>
  <div class="flex flex-col">
    <div class="text-center font-extrabold h-[75px] content-center flex flex-row flex-wrap gap-2 justify-center">
      <span
        v-for="i in goalMarker.points"
        :key="i"
        class="goal-point-icon"
      />
    </div>

    <button
      type="button"
      @click="handleUp"
      class="marker-btn marker-btn--up"
    >
      UP
    </button>

    <div class="flex-1 text-center content-center bg-background text-6xl font-bold">
      {{ scored }}
    </div>

    <button
      type="button"
      @click="handleDown"
      class="marker-btn marker-btn--down"
    >
      DOWN
    </button>
  </div>
</template>

<style scoped>
.marker-btn {
  @apply h-[150px] border-2 font-extrabold text-xl transition-colors duration-500 ease-out;
}
.marker-btn--up {
  @apply border-primary bg-primary-light active:bg-primary rounded-t-lg;
}
.marker-btn--down {
  @apply border-red-900 bg-red-500 active:bg-red-900 rounded-b-lg;
}

.goal-point-icon {
  @apply w-5 h-5 bg-textSecondary rounded-full inline-block;
}
</style>
