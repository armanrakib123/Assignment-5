document.getElementById("donate-noakhali").addEventListener('click',function(donate){
    donate.preventDefault();
    
    const balance= getElementById("account-balabce").value;
    const donatenoakhali= getElementById("noakhali-donate-amount").value;
    const newBalance= balance-donatenoakhali;
    console.log(newBalance);

    document.getElementById("account-balabce").innerText=newBalance;
})