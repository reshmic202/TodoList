let inputs=document.querySelectorAll("input")
let create=document.querySelector("button")
let myTable=document.querySelector(".myTable")

let formHandle=()=>{
    let userName=inputs[0].value
    let userSalary=inputs[1].value
    let userCompany=inputs[2].value
    
    if(userName=="" || userSalary==""|| userCompany==""){
        // alert("Dont keep inputs empty")
        let warning=document.getElementById("warning")
        warning.innerText="PLEASE FILL THE FIELDS"
        warning.style.color="red"
        warning.style.textAlign="center"
    }
    else{
    warning.innerText=""
    let tr1=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")

    td1.innerText=userName
    td2.innerText=userSalary
    td3.innerText=userCompany

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)


    myTable.appendChild(tr1)

    inputs[0].value=""
    inputs[1].value=""
    inputs[2].value=""
    }
}