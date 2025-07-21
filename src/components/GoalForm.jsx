import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGoal } from "../api";

export default function GoalForm() {
  const [form, setForm] = useState({ name:"", targetAmount:"", savedAmount:0, category:"", deadline:"", createdAt:new Date().toISOString().split("T")[0] });
  const nav = useNavigate();

  const change = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => {
    e.preventDefault();
    createGoal(form).then(()=>nav("/"));
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Goal Name" onChange={change} required />
      <input name="targetAmount" type="number" placeholder="Target Amount" onChange={change} required />
      <input name="category" placeholder="Category" onChange={change} required />
      <input name="deadline" type="date" onChange={change} required />
      <button type="submit">Create Goal</button>
    </form>
  );
}
