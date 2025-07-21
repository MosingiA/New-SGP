import React from "react";
import GoalItem from "./GoalItem";

export default function GoalList({ goals, onDelete }) {
  return (
    <div>
      {goals.map(g => (
        <GoalItem key={g.id} goal={g} onDelete={onDelete} />
      ))}
    </div>
  );
}
