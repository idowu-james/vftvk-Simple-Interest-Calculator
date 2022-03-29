// For button to calculate total amount after interest
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    

    if (principal == 0 || principal < 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    else{
        document.getElementById("result").innerHTML="<b>If</b> you deposit: <mark>"+principal+"</mark>,\<br\><b>At</b> an interest rate of: <mark>"+rate+"%</mark>\<br\><b>You</b> will receive an Interest of: <mark>"+interest+"</mark>,\<br\><b>In</b> the year: <mark>"+year+"</mark>\<br\>"   
    }

     
}

//Slider update function
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

