import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalList = {
    goals: CGoal[]
    onDeleteGoal: (id:number) => void
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalList) {
    return (
        <ul>
            {goals.map(goal => {
                return (
                    <li key={goal.id}>
                        <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                )
            })}
        </ul>
    )
}