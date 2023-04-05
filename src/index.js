const form = document.getElementById("form")
form.addEventListener("submit",addData)


async function addData(e){
    console.log("ok")
    e.preventDefault()
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const destination = document.getElementById("destination")
    const numof_travellers = +document.getElementById("numof_travellers")
    const budget = +document.getElementById("budget")
     let obj = {
        name,email,destination,numof_travellers,budget
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