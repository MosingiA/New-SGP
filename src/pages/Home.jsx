import React, { useState, useEffect } from "react";
import { fetchGoals, deleteGoal, updateGoal } from "../api";
import Overview from "../components/Overview";
import DepositForm from "../components/DepositForm";
import GoalList from "../components/GoalList";

export default function Home() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleDelete = id => {
    deleteGoal(id).then(() => setGoals(goals.filter(g => g.id !== id)));
  };

  const handleDeposit = (id, amt) => {
    const goal = goals.find(g => g.id === id);
    const updated = {...goal, savedAmount: goal.savedAmount + amt};
    updateGoal(id, { savedAmount: updated.savedAmount }).then(() => {
      setGoals(goals.map(g => g.id === id ? updated : g));
    });
  };

  return (
    <>
      <Overview goals={goals} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList goals={goals} onDelete={handleDelete} />
    </>
  );
}
