function calculation()
{
    var sub1=document.getElementById('sub1').value;
    var sub2=document.getElementById('sub2').value;
    var sub3=document.getElementById('sub3').value;
    var sub4=document.getElementById('sub4').value;
    var sub5=document.getElementById('sub5').value;

    var total= parseFloat(sub1) + parseFloat(sub2)+ parseFloat(sub3) + parseFloat(sub4)  + parseFloat(sub5);

    var percentage = (total/500)*100;
    document.getElementById('lasttext').innerHTML = 'Total Number : '+(total)  + '<br>' + 'percentage : '+(percentage)+'%';
    
}
