const form = document.getElementById("form")
form.addEventListener("submit",addData)


async function addData(e){
    console.log("ok")
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const destination = document.getElementById("destination").value
    const number_of_travellers = +document.getElementById("numof_travellers").value
    const budget_Per_person = +document.getElementById("budget").value
     let obj = {
        name,email,destination,number_of_travellers,budget_Per_person
     }

     obj = JSON.stringify(obj)

     const res = await fetch("https://travelopiabackend.onrender.com/data",{
        method :"POST",
        body : obj,
        headers : {
            "Content-type" : "Application/json"
        }
     })

     const data = await res.json()
     displayalert()
     form.reset()
}

function displayalert(){
const alerdiv = document.getElementById("alert")
alerdiv.style.display = "flex"
setTimeout(()=>{
    alerdiv.style.display = "none"
},2000)
}