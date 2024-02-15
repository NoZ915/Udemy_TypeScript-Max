import { useState } from "react";

import CourseGoal from "./components/CourseGoal";
import goalImg from "../public/goals.jpg";
import Header from "./components/Header";

type CourseGoal = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React & TS",
        description: "Learn it in depth!"
      }
      return [...prevGoals, newGoal];
    })
  }

  return (
    <main>
      <Header img={{ src: goalImg, alt: "A list of gaols" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map(goal => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          )
        })}
      </ul>
    </main>
  );
}
