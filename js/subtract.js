document.getElementById('sub-btn').addEventListener('click',function()
{
    
    
    const options = document.getElementById('sub-op').classList.remove('hidden');
    
    document.getElementById('btn-subtract-money').addEventListener("click",function(event)
    {
        event.preventDefault();
          
        const removeAmount = document.getElementById('subtractInput').value;
        const pin = document.getElementById('check-pin-sub').value;
        const currentBalance = document.getElementById('current-amount').innerText;
        
        
        if(pin ==='1234')
        {
            const totalBalance = parseFloat(currentBalance) - parseFloat(removeAmount);
            document.getElementById('current-amount').innerText = totalBalance;
        }
        else
        {
            alert('Transaction Failed. Please try again later');
        } 
        
        
        
    })
    
})







































