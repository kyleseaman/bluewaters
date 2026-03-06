import { rates } from "@/content/rates";

export function RatesSeason() {
  return (
    <section id="rates" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Rates & season
        </h2>
        <p className="max-w-[65ch] text-lg text-muted-foreground">{rates.season}</p>
        <table className="mt-4 mb-4 w-full border-collapse bg-card">
          <thead>
            <tr>
              <th className="border border-border p-2.5 text-left">Period</th>
              <th className="border border-border p-2.5 text-left">Rate</th>
              <th className="border border-border p-2.5 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rates.lines.map((line) => (
              <tr key={line.label}>
                <td className="border border-border p-2.5">{line.label}</td>
                <td className="border border-border p-2.5">{line.amount}</td>
                <td className="border border-border p-2.5">{line.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{rates.note}</p>
        <p className="text-muted-foreground">{rates.policy}</p>
      </div>
    </section>
  );
}
