import React, { useState } from 'react'

export const BudgetApp = () => {

  const [totalAmount, setTotalAmount] = useState(0);
  const [userAmount, setUserAmount] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [errorMessageBudget, setErrorMessageBudget] = useState('');
  const [errorMessageItems, setErrorMessageItems] = useState('');
  const [expenditureValue, setExpenditureValue] = useState(0);
  const [balanceValue, setBalanceValue] = useState(0);
  const [expensesList, setExpensesList] = useState([]);

  const handleTotalAmountButton = () => {
    let tempAmount = parseInt(totalAmount);

    if (!tempAmount  || tempAmount <= 0) {
        setErrorMessageBudget('Monto ingresado no puede ser 0 o vacío');
    } else {
        setErrorMessageBudget('');
        setExpenditureValue(0);
        setBalanceValue(tempAmount);
    }
  };

  const handleCheckAmountButton = () => {
    if (!userAmount || !productTitle) {
        setErrorMessageItems('Estos valores no pueden estar vacíos');
      return;
    } 

    setErrorMessageItems('');
    const expenditure = parseInt(userAmount);
    const sum = expenditureValue + expenditure;
    const totalBalance = totalAmount - sum;

    if ( totalBalance < 0 ){
        setErrorMessageItems('Este producto excede el presupuesto disponible');
    }

    let tempAmount = parseInt(totalAmount);
    if (!tempAmount  || tempAmount <= 0){
        setErrorMessageItems('Debe ingresar un presupuesto antes de agregar un producto');
        return;
    }

    setExpenditureValue(sum);
    setBalanceValue(totalBalance);

    setExpensesList([...expensesList, { product: productTitle, amount: expenditure }]);
    setProductTitle('');
    setUserAmount('');
  };

  const handleDeleteExpense = (index) => {
    const expensesListUpdated = [...expensesList];
    const valorResta = expensesListUpdated[index].amount;
    
    expensesListUpdated.splice(index, 1);
    setExpensesList(expensesListUpdated);

    const totalGastoFinal = expenditureValue - valorResta;
    const totalBalance = balanceValue + valorResta;
    
    setExpenditureValue(totalGastoFinal);
    setBalanceValue(totalBalance);
    
  }

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
                <p id='errorMessage'>{errorMessageBudget}</p>
                
            </div>

            <div className="user-amount-container">
                <h3>Gastos</h3>
                <p className="hide error" id="product-title-error">
                        Estos valores no pueden estar vacíos
                </p>
                <input type="text" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} placeholder="Ingrese un producto"/>
                <input type="number" value={userAmount} onChange={(e) => setUserAmount(e.target.value)} placeholder="Ingrese monto del producto" />        
                <button className="submit" id="total-amount-button" onClick={handleCheckAmountButton}>
                    Agregar
                </button>
                <p id='errorMessage'>{errorMessageItems}</p>
                
            </div>

      </div>

      <div className="output-container flex-space" >
                <div>
                    <p>Presupuesto inicial: {totalAmount}</p>
                    <span id="amount">
                        
                    </span>
                </div>
                <div>
                <p>Total gastos: {expenditureValue}</p>
                    <span id="expenditure-value">
                        
                    </span>
                </div>
                <div>
                    <p>Total disponible: {balanceValue}</p>
                    <span id="balance-amount">
                        
                    </span>
                </div>

            </div>

            <div className="list">
                <h3>Lista de gastos</h3>
                <div className="sublist-content" id="list">
                    
                        <ul>
                            {expensesList.map((expense, index) => (

                            <li key={index} id='lista-producto'>
                                {expense.product} 
                                <span id='lista-valor'> {expense.amount} </span>

                                <button onClick={() => handleDeleteExpense(index)} className='submit' id='eliminar'>Eliminar</button>
                                <button className='submit' id='modificar'>Modificar</button>

                            </li>

                            ))}

                        </ul>
                </div>                   
            </div>  
        </div>                        
    
    
  );
};

