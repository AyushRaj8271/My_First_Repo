import logo from "../assets/investment-calculator-logo.png"
export default function Header() {
    return (
      <header id="header">
        <img src={logo} alt="the logo of the investment Calculator"/>
        <h1>InvestProCalc</h1>
      </header>
    );
  }