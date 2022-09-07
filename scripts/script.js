function addExpense(ID) {
    const expensesContainer = document.createElement('div');
    expensesContainer.className = 'expensesContainer';
    expensesContainer.innerHTML = `
        <div class = 'expensesContainer'>
            <div class = 'expenses' id = 'expenses${ ID }'>
                
            </div>
            <div class = 'flex totalPrice'>
                <h3> Total </h3>
                <h3 class = 'price'> €0.00 </h3>
            </div>
        </div>
    `;

    const expense = document.createElement('div');
    expense.className = 'expense';
    expense.innerHTML = `
        <div class = 'flex'>
            <input type = 'text' placeholder = 'Expense name'>
            <input type = 'number' min = '0.00' step = '0.01' placeholder = '€0.00' onkeypress = 'calculateTotalPrice()' onkeyup = 'calculateTotalPrice()' onkeydown = 'calculateTotalPrice()'/>
        </div>
    `;

    const receiptContainerParentID = 'receiptContainer' + ID;
    const expensesParentID = 'expenses' + ID;

    if (!document.getElementById(expensesParentID)) {
        document.getElementById(receiptContainerParentID).appendChild(expensesContainer);
    }

    document.getElementById(expensesParentID).appendChild(expense);
}

function addReceipt() {
    const receiptContainer = document.createElement('div');
    receiptContainer.className = 'receiptContainer';
    const ID = document.getElementsByClassName('receiptContainer').length + 1;

    const header = `
        <div class = 'header flex'>
            <div class = 'selections'>
                <select id = 'expenses' name = 'expenses'>
                    <option selected = 'selected'> Select: </option>
                    <option value = 'food'> Food </option>
                    <option value = 'houseware'> Houseware </option>
                    <option value = 'entertainment'> Entertainment </option>
                </select>
            </div> 
            <button id = 'receiptButton${ ID }' class = 'button expenseButton' type = 'button' onclick = 'addExpense(${ ID })'> Add expense </button>
        </div>
    `;

    receiptContainer.innerHTML = header;

    receiptContainer.id = 'receiptContainer' + ID;
    document.getElementsByClassName('container')[0].appendChild(receiptContainer);
}

function calculateTotalPrice() {
    
}