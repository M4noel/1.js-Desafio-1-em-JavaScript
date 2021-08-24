var n1 = 0,  n2 = 1, num3, i;  
var num = parseInt (prompt (" Entre com um número: "));  
document.write( "Serie Fibonacci: ");  
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1);   
    num3 = n1 + n2;   
      
    n1 = n2;  
    n2 = num3; 
}  
