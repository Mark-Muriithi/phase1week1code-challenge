function payeCalculator() {
    let salary = parseFloat(prompt("Enter your gross salary"));
    if (salary <= 24000) {
      console.log(salary - salary * 0.01);
    } else if (salary >= 24001 && salary === 32333) {
      console.log(salary - salary * 0.25);
    } else {
      salary > 32333;
      console.log(salary - salary * 0.3);
    }
    let deductions = parseFloat(prompt("Enter your monthly deductions"));
    const netPay = salary - deductions;
    return prompt(`Your  monthly salary amounts to ${netPay}`);
  }
  payeCalculator();