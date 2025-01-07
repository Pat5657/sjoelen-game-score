<script setup lang="ts">

import {useScoreboardStore} from "@/stores/scoreboard";
import {computed} from "vue";

const scoreboardStore = useScoreboardStore()

const score = computed(() => scoreboardStore.getScore)

</script>

<template>
  <section class="container mx-auto bg-secondary py-4 px-6 rounded-b-2xl h-[80px]">
    <div class="font-bold text-xl uppercase flex flex-row items-center leading-none">
      Score <span class="ml-2 text-4xl">{{ score }}</span>
    </div>
  </section>
</template>
