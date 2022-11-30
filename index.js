const date = document.getElementById("date")
const month = document.getElementById("month")
const year = document.getElementById("year")
const submit = document.getElementById("submit")
const container = document.querySelector(".container")
submit.addEventListener("click",calculateAge)
function calculateAge(){
    let todate = new Date()
    let date1 = 0
    let month1 = 0
    let year1  = 0
    if(parseInt(date.value) <= 31 && parseInt(date.value) >0){
        date1 = Math.abs(parseInt(date.value)-todate.getDate())
    }
    if(parseInt(month.value) <=12 && parseInt(month.value) >0){
        month1 = Math.abs(parseInt(month.value)-todate.getMonth())
    }
    if(parseInt(year.value).toString().length === 4){
        year1 = Math.abs(parseInt(year.value)-todate.getFullYear())
    }
   
    
    console.log(todate.getDate())

    let h1 = document.getElementById('output')
    h1.innerHTML = `Your Age is ${year1} years ${month1} months ${date1} days `
  
  

}