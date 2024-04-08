

// let totalAmount = document.getElementById("total-amount");
// let userAmount = document.getElementById("user-amount");
// const checkAmountButton = document.getElementById("check-amount");
// const totalAmountButton = document.getElementById("total-amount-button");
// const productTitle = document.getElementById("product-title");
// const errorMessage = document.getElementById("budget-error");
// const productTitleError = document.getElementById("product-title-error");
// const amount = document.getElementById("amount");
// const expenditureValue = document.getElementById("expenditure-value");
// const balanceValue = document.getElementById("balance-amount");
// const list = document.getElementById("list");
// let tempAmount = 0;

// //budget functions

// totalAmountButton.addEventListener("click", () => {
//     tempAmount = parseInt(totalAmount.value);

    
//     if ( tempAmount === "" || tempAmount <= 0 ) {
//         errorMessage.classList.remove("hide");
//     } else {
//         errorMessage.classList.add("hide");
        
//         amount.innerHTML = tempAmount;
//         balanceValue.innerHTML = tempAmount - expenditureValue.innerText;
//         disableInputButton();

//         totalAmount.value = "";
//     }
// });

// //disable edit and delete buttton function

// const disableButtons = ( bool ) => {
//     let editButtons = document.getElementsByClassName("edit");
//     Array.from(editButtons).forEach((element) => {
//         element.disabled = bool;
//     });
// };

// const disableInputButton = () => {
//     const input = document.getElementById("total-amount");
//     const inpButton = document.getElementById("total-amount-button");
//     input.disabled = true;
//     inpButton.disabled = true;

//     input.style.backgroundColor = "#B2B2B2";
//     inpButton.style.backgroundColor = "#B2B2B2";
// }

// // modify list elements function

// const modifyElement = ( element, edit = false ) => {
//     let parentDiv = element.parentElement;
//     let currentBalance = balanceValue.innerText;
//     let currentExpense = expenditureValue.innerText;
//     let parentAmount = parentDiv.querySelector(".amount").innerText;

//     if ( edit ) {
//         let parentText = parentDiv.querySelector(".product").innerText;
//         productTitle.value = parentText;
//         userAmount.value = parentAmount;
//         disableButtons(true);
//     }

//     balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
//     expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);

//     parentDiv.remove();
    
// };

// //create list function

// const listCreator = ( expenseName, expenseValue ) => {
//     let subListContent = document.createElement("div");
//     subListContent.classList.add("sublist-content", "flex-space");
//     list.appendChild(subListContent);
//     subListContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
//     let editButton = document.createElement("button");
//     editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
//     editButton.style.fontSize = "1.2em";
//     editButton.addEventListener("click", () => {
//         modifyElement(editButton, true);
//     });

//     let deletebutton = document.createElement("button");
//     deletebutton.classList.add("fa-solid", "fa-trash-can", "delete");
//     deletebutton.style.fontSize = "1.2em";
//     deletebutton.addEventListener("click", () => {
//         modifyElement(deletebutton);
//     });
//     subListContent.appendChild(editButton);
//     subListContent.appendChild(deletebutton);
//     document.getElementById("list").appendChild(subListContent);

// };

// //add expenses function



// checkAmountButton.addEventListener("click", () => {
//     //check empty

//     // if (tempAmount>= 0 || tempAmount === '') {
//     //     errorMessage.classList.remove("hide");
//     //     return;
//     // } 

//     if( !userAmount.value || !productTitle.value ){
//         productTitleError.classList.remove("hide");
//         return false;
//     }

//     //enable buttons
//     disableButtons(false);

//     //expense
//     let expenditure = parseInt(userAmount.value);
//     //totalexpense
//     let sum = parseInt(expenditureValue.innerText) + expenditure;
//     expenditureValue.innerText = sum;
//     //total balance 
//     const totalBalance = tempAmount - sum;
//     balanceValue.innerText = totalBalance;

//     console.log(sum);
//     console.log(expenditure);
//     console.log(totalBalance);
//     console.log(`temporal amount ${tempAmount}` );
//     console.log(`total amount ${totalAmount.value}` );
    

//     if( sum >= tempAmount * 0.75) {

//         const bal = document.getElementById("balance-amount");
//         bal.style.color = "yellow";
        
//     }
//     //create list
//     listCreator(productTitle.value, userAmount.value);
//     //clear inputs
//     productTitle.value = "";
//     userAmount.value = "";
// });


