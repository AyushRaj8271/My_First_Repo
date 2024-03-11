import React, { useState } from "react";

export default function UserInput({onChangeInput,userValue}) {
  

  return (
    <section id="user-input">
    <div className="input-group">
    <p>
      <label>INITIAL INVESTMENT</label>
      <input
        type="number"
        required
        value={userValue.initialInvestment}
        onChange={(event) =>onChangeInput('initialInvestment',event.target.value)}
      />
    </p>
    </div>
    <div className="input-group">
    <p>
      <label>ANNUAL INVESTMENT</label>
      <input
        type="number"
        required
        value={userValue.annualInvestment}
        onChange={(event) =>onChangeInput('annualInvestment',event.target.value)}
      />
    </p>
    </div>
    <div className="input-group">
    <p>
        <label>EXPECTED RETURN</label>
      <input
        type="number"
        required
        value={userValue.expectedReturn}
        onChange={(event) =>onChangeInput('expectedReturn',event.target.value)}
      />
    </p>
    </div>
    <div className="input-group">
    <p>
      <label>DURATION</label>
      <input
        type="number"
        required
        value={userValue.duration}
        onChange={(event) =>onChangeInput('duration',event.target.value)}
      />
    </p>
    </div>
    </section>
    
  );
}
