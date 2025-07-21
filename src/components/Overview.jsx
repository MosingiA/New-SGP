import React from "react";

export default function Overview({ goals }) {
  const total = goals.length;
  const saved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g=>g.savedAmount >= g.targetAmount).length;

  return (
    <div style={{border:"1px dashed #666", padding:10, margin:10}}>
      <h2>Overview</h2>
      <p>Total Goals: {total}</p>
      <p>Total Saved: ${saved}</p>
      <p>Completed: {completed}</p>
    </div>
  );
}
