import { useState } from "react";

import goalImg from "../public/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal];
    })
  }

  function handleDeletGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header img={{ src: goalImg, alt: "A list of gaols" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={(goal, summary) => handleAddGoal(goal, summary)}/>
      <CourseGoalList onDeleteGoal={handleDeletGoal} goals={goals} />
    </main>
  );
}
