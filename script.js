 //login button event handler
 const loginBtn=document.getElementById("login");
 loginBtn.addEventListener('click', function(){
     const loginArea=document.getElementById('login-area');//display none korate puro div (login-area vanish
     loginArea.style.display="none";
     const transactionArea=document.getElementById("transaction-area");
     transactionArea.style.display="block";//aita korsi jeno buttona clickkorle porer pagea aita dekha jai
     
 })

 //deposit button event handler
 const depositBtn=document.getElementById("addDeposit");
 depositBtn.addEventListener("click", function(){
     const depositAmount=document.getElementById("depositAmount").value;//value diye num nisi 
     const depositNumber=parseFloat(depositAmount);//parse float kore string num theke just num a convrt

     if(depositNumber < 0)
     {
         alert("Deposit number can notbe negative.");
     }
     else
     {
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depositAmount").value="";
     }

     // const currentDeposit=document.getElementById("currentDeposit").innerText;
     //  const currentDepositNumber=parseFloat(currentDeposit);
     //  const totalDeposit=depositNumber+currentDepositNumber;
     //  document.getElementById("currentDeposit").innerText=totalDeposit;

     
 })

 //withdraw button event handler

 const withdrawBtn=document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click", function(){
     const withdrawAmount=document.getElementById("withdrawAmount").value;
     const withdrawNumber=parseFloat(withdrawAmount);
     const currentWithdraw=document.getElementById("currentWithdraw").innerText;//tag ar  vetor num thakle innerText diye ante  hoi tar por float korle number pawa jai. 
     const currentWithdrawNumber=parseFloat(currentWithdraw);

     const totalWithdraw=withdrawNumber+currentWithdrawNumber;
     document.getElementById("currentWithdraw").innerText=totalWithdraw;

     // const currentBalance=document.getElementById("currentBalance").innerText;
     // const currentAmount= parseFloat(currentBalance);
     // const totalBalance=currentAmount-withdrawNumber;
     // document.getElementById("currentBalance").innerText=totalBalance;

     getInputNumber("currentBalance", withdrawNumber);
 })
 function getInputNumber(id, withdrawNumber)
 {
     
     const currentBalance=document.getElementById(id).innerText;
     const currentAmount= parseFloat(currentBalance);
     const totalBalance=currentAmount-withdrawNumber;
     document.getElementById(id).innerText=totalBalance;
 }


 function updateSpanText(id, depositNumber)
 {
     const current=document.getElementById(id).innerText;
     const currentNumber=parseFloat(current);
     const totalAmount=depositNumber+currentNumber;
     document.getElementById(id).innerText=totalAmount;
 }