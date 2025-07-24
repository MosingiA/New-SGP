import React from "react";

export default function GoalItem({ goal, onDelete }) {
  const { id, name, targetAmount, savedAmount, deadline, category } = goal;
  const pct = Math.floor((savedAmount / targetAmount) * 100);
  const remain = targetAmount - savedAmount;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000*60*60*24));
  const warning = daysLeft <= 30 && savedAmount < targetAmount;
  const overdue = daysLeft < 0 && savedAmount < targetAmount;


  return (
    <div style={{border:"1px solid #ccc", padding:10, margin:10}}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>${savedAmount} / ${targetAmount} ({pct}%)</p>
      <progress value={savedAmount} max={targetAmount}></progress>
      <p>Remaining: ${remain}</p>
      <p>
        {daysLeft >= 0 ? `${daysLeft} days left` : "Deadline passed"}
        {warning && <span> ⚠️</span>}
        {overdue && <span> ❌ Overdue</span>}
      </p>
       <button type="submit">Edit</button>    <button id="delete" onClick={()=>onDelete(id)}>Delete</button>
    </div>
  );
}
