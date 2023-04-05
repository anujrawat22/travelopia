getData()
async function getData(){
 try{
    console.log("Hello")
   const res = await fetch("https://travelopiabackend.onrender.com/data/")
   const data = await res.json()
   console.log(data.Data)
   appendData(data.Data)
 }catch(err){
    console.log(err)
 }
}

function appendData(data){
    let tbody = document.getElementById("tbody")
tbody.innerHTML = null
data.forEach((el)=>{
  let tr = document.createElement('tr')
  let name = document.createElement('td')
  name.innerText = el.name
  let email = document.createElement('td')
  email.innerText = el.email
  let destination = document.createElement('td')
  destination.innerText = el.destination
  let num_of_travellers= document.createElement('td')
  num_of_travellers = el.number_of_travellers
  let budget =  document.createElement('td')
  budget.innerText = `$ ${el.budget_Per_person}`
  let total = document.createElement('td')
  total.innerText = `$ ${el.total}`
  let date = el.createdAt.split("T")[0]
  let date_displayed = document.createElement('td')
  date_displayed.innerText = date
  tr.append(name,email,destination,num_of_travellers,budget,total,date_displayed)
  tbody.append(tr)
})
}