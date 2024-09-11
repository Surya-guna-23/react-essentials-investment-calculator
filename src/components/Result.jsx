import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ Userinput }) {
  const resultdata = calculateInvestmentResults(Userinput);
  const initialivestment =
    resultdata[0].valueEndOfYear -
    resultdata[0].interest -
    resultdata[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interset</th>
          <th>Toatal Interset</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultdata.map((yeardata) => {
          const totalInterest =
            yeardata.valueEndOfYear -
            yeardata.annualInvestment * yeardata.year -
            initialivestment;
          const investmentCapital =
            initialivestment + yeardata.annualInvestment * yeardata.year;

          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investmentCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
