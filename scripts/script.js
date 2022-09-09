function addExpense(ID) {
    const expensesParentID = 'expenses' + ID;

    if (!document.getElementById(expensesParentID)) {
        createExpensesContainer(ID);
    }

    const expense = document.createElement('div');
    expense.className = 'expense';
    expense.innerHTML = `
        <div class = 'grid'>
            <input type = 'text' placeholder = 'Expense name'>
            <input type = 'number' name = 'expense${ ID }' id = 'name = 'expense${ ID }' min = '0.00' step = '0.01' placeholder = '€0.00' onblur = 'calculateExpenses(${ ID })' />
        </div>
    `;

    document.getElementById(expensesParentID).appendChild(expense);
}

function addReceipt() {
    const receiptContainer = document.createElement('div');
    receiptContainer.className = 'receiptContainer';
    const ID = document.getElementsByClassName('receiptContainer').length + 1;

    const header = `
        <div class = 'header flex'>
            <div class = 'selections'>
                <select id = 'categories${ ID }' name = 'categories${ ID }'>
                    <option value = '' disabled selected> Select </option>
                    <option value = 'food'> Food </option>
                    <option value = 'houseware'> Houseware </option>
                    <option value = 'entertainment'> Entertainment </option>
                </select>
            </div> 
            <button id = 'receiptButton${ ID }' class = 'button expenseButton' type = 'button' onclick = 'checkIfCategorySelected(${ ID })'> Add expense </button>
        </div>
    `;

    receiptContainer.innerHTML = header;
    receiptContainer.id = 'receiptContainer' + ID;
    
    document.getElementsByClassName('container')[0].appendChild(receiptContainer);
}

function createExpensesContainer(ID) {
    const expensesContainer = document.createElement('div');
    expensesContainer.className = 'expensesContainer';
    expensesContainer.innerHTML = `
        <div class = 'expenses' id = 'expenses${ ID }'>
            
        </div>
        <div class = 'flex totalPrice'>
            <h3> Total </h3>
            <h3 name = 'totalExpensesPrice${ ID }' id = 'totalExpensesPrice${ ID }' class = 'price'> € 0.00 </h3>
        </div>
    `;

    const receiptContainerParentID = 'receiptContainer' + ID;
    document.getElementById(receiptContainerParentID).appendChild(expensesContainer);
}

function checkIfCategorySelected(ID) {
    var categories = document.getElementById('categories' + ID);
    var selectedValue = categories.options[categories.selectedIndex].value;
    if (!selectedValue || selectedValue == '') {
        alert('Please select the receipt category!');
    } else {
        addExpense(ID);
    }
}

function calculateExpenses(ID) {
    var inputs = document.getElementsByName('expense' + ID);
    var total = calculateSum(inputs, 'expenses');

    document.getElementById('totalExpensesPrice' + ID).innerHTML = total.toFixed(2);
    calculateReceipts();
}

function calculateReceipts() {
    var containersCount = document.getElementsByClassName('receiptContainer');
    var total = calculateSum(containersCount, 'receipts');

    document.getElementById('totalExpenses').innerHTML = total.toFixed(2);
}

function calculateSum(inputs, type) {
    var total = 0;

    for (var i = 0; i < inputs.length; i++) {
        var element = ((type == 'expenses') ? inputs[i].value : document.getElementById('totalExpensesPrice' + (i + 1)).innerHTML);
        if (parseFloat(element))
        total += parseFloat(element);
    }

    return total;
}
