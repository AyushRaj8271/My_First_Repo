import {calculateInvestmentResults,formatter} from "../util/investment.js"
export default function({input}){
    const annualdata = calculateInvestmentResults(input);
    const intialInvestment = 
    annualdata[0].valueEndOfYear- 
    annualdata[0].interest - 
    annualdata[0].annualInvestment;
        console.log(annualdata);
    return(
        <table id="result">
          <thead>
        <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Inetrest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {annualdata.map((row, rowindex) => {
         const totalInterest = 
         row.valueEndOfYear - row.annualInvestment * row.year - intialInvestment;
         const totalAmountInvested = 
         row.valueEndOfYear - totalInterest;
         return(
          <tr key={rowindex}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
        })}

      </tbody>
        </table>
    );
}