document.getElementById('btn-login').addEventListener('click',function(event)
{
    event.preventDefault();
    const number = document.getElementById('num').value;
    
    const pinNumber = document.getElementById('pin').value;
    if(number === '01641' && pinNumber==='1234')
    {
        window.location.href = './home.html';        
    }
    else
    {
        alert('Incorrect Number or Pin');
    }
       
    
}
);
