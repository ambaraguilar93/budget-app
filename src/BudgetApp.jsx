import React, { useState } from 'react'

export const BudgetApp = () => {

  const [totalAmount, setTotalAmount] = useState('');
  const [userAmount, setUserAmount] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [expenditureValue, setExpenditureValue] = useState(0);
  const [balanceValue, setBalanceValue] = useState(0);
  const [expensesList, setExpensesList] = useState([]);

  const handleTotalAmountButton = () => {
    let tempAmount = parseInt(totalAmount);

    if (tempAmount === "" || tempAmount <= 0) {
      setErrorMessage('Monto incorrecto');
    } else {
      setErrorMessage('');
      setExpenditureValue(0);
      setBalanceValue(tempAmount);
    }
  };

  const handleCheckAmountButton = () => {
    if (!userAmount || !productTitle) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    setErrorMessage('');
    const expenditure = parseInt(userAmount);
    const sum = expenditureValue + expenditure;
    const totalBalance = totalAmount - sum;

     

//  balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
//  expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);

    setExpenditureValue(sum);
    setBalanceValue(totalBalance);

    // if (sum >= totalAmount * 0.75) {
    //   // Handle styling or notifications for high expenses
    // }

    setExpensesList([...expensesList, { product: productTitle, amount: expenditure }]);
    setProductTitle('');
    setUserAmount('');
  };

  return (
 
    <div className="container">
        <div className="sub-container">
            <div className="total-amount-container">
                <h3>Presupuesto</h3>
                <p className="hide error" id="budget-error">
                    Este valor no puede ser 0 o negativo
                </p>
                <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
                <button className="submit" id="total-amount-button" onClick={handleTotalAmountButton}>
                    Aplicar
                </button>
                
            </div>

            <div className="user-amount-container">
                <h3>Gastos</h3>
                <p className="hide error" id="product-title-error">
                        Estos valores no pueden estar vacios
                </p>
                <input type="text" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} placeholder="Ingrese un producto"/>
                <input type="number" value={userAmount} onChange={(e) => setUserAmount(e.target.value)} placeholder="Ingrese monto del producto" />        
                <button className="submit" id="total-amount-button" onClick={handleCheckAmountButton}>
                    Agregar
                </button>
                <p>{errorMessage}</p>
                
            </div>

      </div>

      <div className="output-container flex-space" >
                <div>
                    <p>Total Budget</p>
                    <span id="amount">
                        {totalAmount}
                    </span>
                </div>
                <div>
                <p>Expenditure: {expenditureValue}</p>
                    <span id="expenditure-value">
                        
                    </span>
                </div>
                <div>
                    <p>Balance: {balanceValue}</p>
                    <span id="balance-amount">
                        
                    </span>
                </div>

            </div>

            <div className="list">
                <h3>Lista de gastos</h3>
                <div className="sublist-content" id="list">
                    <ul>
                        {expensesList.map((expense, index) => (
                        <li key={index}>
                            {expense.product} - {expense.amount}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

    </div>

    
    
  );
};

