function paynow()
{
    window.location.href="payment.html";
}
function back()
{
    window.location.href="index.html";
}
function backpay()
{
    window.location.href="next.html";
}
function Proceed(){
    let msg=document.getElementById("demo");
    setTimeout(()=>{msg.innerHTML="Payment Successful"},3000)

}