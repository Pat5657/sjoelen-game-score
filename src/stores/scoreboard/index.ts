import { defineStore } from 'pinia'
import state from "@/stores/scoreboard/state.ts";
import {type GoalMarker} from "@/types/goalMarker.ts";

export const useScoreboardStore = defineStore('scoreboard', {
  state,
  actions: {
    increaseScore(value: GoalMarker) {
      const index = this.goals.findIndex(goal => goal.points === value.points)

      if (index === -1) {
        return
      }

      this.goals[index].scored++
    },
    decreaseScore(value: GoalMarker) {
      const index = this.goals.findIndex(goal => goal.points === value.points)

      if (index === -1 || this.goals[index].scored <= 0) {
        return
      }

      this.goals[index].scored--
    }
  },
  getters: {
    getScore(): number {
      const minBonus = this.getMinimumScoredGoals

      return this.goals.reduce((acc, curr) => {
        return acc + ((curr.scored - minBonus) * curr.points)
      }, minBonus * 20)
    },
    getMinimumScoredGoals(): number {
      const goals = [...this.goals]

      return goals.sort((a, b) => a.scored - b.scored)[0].scored
    }
  }
})
