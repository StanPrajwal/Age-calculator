const date = document.getElementById("date")
const month = document.getElementById("month")
const year = document.getElementById("year")
const submit = document.getElementById("submit")
const container = document.querySelector(".container")
submit.addEventListener("click",calculateAge)
function calculateAge(){
    let date1 = Math.abs(parseInt(date.value)-30)
    let month1 = Math.abs(parseInt(month.value)-11)
    let year1 = Math.abs(parseInt(year.value)-2022)
    console.log(Math.abs(parseInt(date)-30))

    let h1 = document.getElementById('output')
    h1.innerHTML = `Your Age is ${year1} years ${month1} months ${date1} days `
  
  

}