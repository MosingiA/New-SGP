import React, { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [sel, setSel] = useState("");
  const [amt, setAmt] = useState("");

  function submit(e) {
    e.preventDefault();
    if (sel && amt > 0) {
      onDeposit(sel, Number(amt));
      setAmt(""); setSel("");
    }
  }

  return (
    <form onSubmit={submit}>
      <select value={sel} onChange={e=>setSel(e.target.value)} required>
        <option value="">--Select Goal--</option>
        {goals.map(g=>(
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Amount" value={amt} onChange={e=>setAmt(e.target.value)} required />
      <button type="submit">Deposit</button>
    </form>
  );
}
