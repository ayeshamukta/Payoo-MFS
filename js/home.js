document.getElementById('add-btn').addEventListener('click',function()
{
    
    
    const addOptions = document.getElementById('add-op').classList.remove('hidden');
    const subOptions = document.getElementById('sub-op').classList.add('hidden');
    
    document.getElementById('btn-add-money').addEventListener("click",function(event)
    {
        event.preventDefault();  
        const addAmount = document.getElementById('addInput').value;
        const pin = document.getElementById('check-pin').value;
        const currentBalance = document.getElementById('current-amount').innerText;
        
        
        if(pin ==='1234')
        {
            const totalBalance = parseFloat(addAmount) + parseFloat(currentBalance);
            document.getElementById('current-amount').innerText = totalBalance;
        }
        else
        {
            alert('Transaction Failed. Please try again later');
        } 
        
        
        
    })
})

