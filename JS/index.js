//author info
var firstNameInput
var lastNameInput

//article info
var articleName
var articleLink

//dates
var articleDateDay
var articleDateMonth
var articleDateYear
var todaysDateDay
var todaysDateMonth
var todaysDateYear

var outputText
var output = document.querySelector(".output")

document.querySelector(".submitButton").addEventListener("click", buttonPressed)

function buttonPressed(){
    firstNameInput = document.querySelectorAll("input")[0].value
    lastNameInput = document.querySelectorAll("input")[1].value
    articleName = document.querySelectorAll("input")[2].value
    articleLink = document.querySelectorAll("input")[3].value
    articleDateDay = document.querySelectorAll("input")[4].value
    articleDateMonth = document.querySelectorAll("input")[5].value
    articleDateYear = document.querySelectorAll("input")[6].value
    todaysDateDay = document.querySelectorAll("input")[7].value
    todaysDateMonth = document.querySelectorAll("input")[8].value
    todaysDateYear = document.querySelectorAll("input")[9].value
    console.log(firstNameInput + lastNameInput + articleName + articleLink + articleDateDay + articleDateMonth + articleDateYear + todaysDateDay + todaysDateMonth + todaysDateYear)
    output.innerHTML =  lastNameInput + ", " + firstNameInput + "(" + articleDateDay + ", " + articleDateMonth + " " + articleDateYear + "). " + articleName + ". " + "Hentet " + todaysDateDay + ", " + todaysDateMonth + " " + todaysDateYear + " fra " + articleLink
}