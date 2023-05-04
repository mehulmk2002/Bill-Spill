let g_tip=0

const calculator=(tip_per=0)=>
{
    let bill_Amount=Number(document.getElementById("bill-input").value)
    let numPeople=Number(document.getElementById("people-input").value)
    if(tip_per!=0)
    {
        g_tip= tip_per
    }
    let total_tip=(g_tip/100)*bill_Amount
    bill_Amount+=total_tip
    let total_bill=(bill_Amount/numPeople)
    let total_tip_f=total_tip/numPeople
    document.getElementById("tip-person").innerHTML=`₹ ${total_tip_f.toFixed(2)}`
    document.getElementById("total-amount").innerHTML=`₹ ${total_bill.toFixed(2)}`
}

const reset=()=>{
    g_tip=0
    document.getElementById("bill-input").value=''
    document.getElementById("people-input").value=1
    document.getElementById("tip-person").innerHTML=`₹ 0.00`
    document.getElementById("total-amount").innerHTML=`₹ 0.00`
}