
function calc()
{
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let oper = document.getElementById('operators').value;
    if( oper  === '+')
    {
       document.getElementById('result').value = n1 + n2;
    }


    if( oper  === '-')
    {
       document.getElementById('result').value = n1 - n2;
    }



    if( oper  === '*')
    {
       document.getElementById('result').value = n1 * n2;
    }



    
    if( oper  === '/')
    {
       document.getElementById('result').value = n1 / n2;
    }


    if( oper  === '^')
    {
       document.getElementById('result').value = n1 ^ n2;
    }

   


}