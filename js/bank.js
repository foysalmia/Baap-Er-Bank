// Deposite Section 
document.getElementById('deposite-btn').addEventListener('click',function(){
    // getting deposit input amount 
    const depositeAmount = document.getElementById('deposite-input');
    let depositeTotal = depositeAmount.value ;

    // Applying condition 
    if (depositeTotal == '') {
        depositeTotal = 0 ;
    }
    
    // setting deposite money on top 
    const deposite = document.getElementById('deposite');
    const previousDeposite = deposite.innerText ;
    const updatedDeposite = parseFloat(previousDeposite) + parseFloat(depositeTotal);
    deposite.innerText = updatedDeposite;

    //  setting total money which is deposited.. 
    const balance = document.getElementById('balance');
    const previousBalance = balance.innerText;
    const updatedBalance = parseFloat(previousBalance) + parseFloat(depositeTotal);
    balance.innerText = updatedBalance;
    // clear input field 
    depositeAmount.value = '';
})



// WithDraw section 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // getting withdraw amount from user 
    const withdrawAmount = document.getElementById('withdraw-input');
    let withdrawTotal = withdrawAmount.value;
    
    // Applying conditions 
    if (withdrawTotal == '') {
        withdrawTotal = 0 ;
    }

    // setting withdraw money to the top 
    const withdraw =  document.getElementById('withdraw');
    let previousWithdraw =  withdraw.innerText;
    const updatedWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawTotal);
    withdraw.innerText = updatedWithdraw ;

    // Setting total money after withdraw
    const balance = document.getElementById('balance');
    const previousBalance = balance.innerText;
    const updatedBalance = parseFloat(previousBalance) - parseFloat(withdrawTotal);
    balance.innerText = updatedBalance;

    // clear input field 
    withdrawAmount.value = '';
})

