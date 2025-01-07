import {type GoalMarker, GoalPoint} from "@/types/goalMarker.ts";

export interface IScoreboardState {
  goals: GoalMarker[]
}

export const defaultGoals = (): GoalMarker[] => {
  return [
    { points: GoalPoint.TWO, scored: 0 },
    { points: GoalPoint.THREE, scored: 0 },
    { points: GoalPoint.FOUR, scored: 0 },
    { points: GoalPoint.ONE, scored: 0 },
  ]
}

export default (): IScoreboardState => {
  return {
    goals: defaultGoals()
  }
}
