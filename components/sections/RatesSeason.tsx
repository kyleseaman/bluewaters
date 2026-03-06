import { rates } from "@/content/rates";

export function RatesSeason() {
  return (
    <section id="rates" className="section">
      <div className="container">
        <h2>Rates & season</h2>
        <p className="lead">{rates.season}</p>
        <table className="rates-table">
          <thead>
            <tr><th>Period</th><th>Rate</th><th>Notes</th></tr>
          </thead>
          <tbody>
            {rates.lines.map((line) => (
              <tr key={line.label}>
                <td>{line.label}</td>
                <td>{line.amount}</td>
                <td>{line.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{rates.note}</p>
        <p className="muted">{rates.policy}</p>
      </div>
    </section>
  );
}
