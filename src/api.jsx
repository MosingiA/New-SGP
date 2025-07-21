const BASE = "http://localhost:3000/goals";

export function fetchGoals() {
  return fetch(BASE).then(r => r.json());
}

export function createGoal(goal) {
  return fetch(BASE, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(goal)
  }).then(r=>r.json());
}

export function updateGoal(id, data) {
  return fetch(`${BASE}/${id}`, {
    method: "PATCH",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  }).then(r=>r.json());
}

export function deleteGoal(id) {
  return fetch(`${BASE}/${id}`, { method: "DELETE" });
}
