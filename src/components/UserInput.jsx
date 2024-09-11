export default function UserInput({ userinput, onchange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userinput.initialInvestment}
            onChange={(event) =>
              onchange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userinput.annualInvestment}
            onChange={(event) =>
              onchange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Excepted Investment</label>
          <input
            type="number"
            required
            value={userinput.expectedReturn}
            onChange={(event) => onchange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userinput.duration}
            onChange={(event) => onchange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
