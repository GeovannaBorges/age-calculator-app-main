function getError() {

// Inputs

var DayInput = document.getElementById("day")
var MonthInput = document.getElementById("month")
var YearInput = document.getElementById("year")

// Labels

let DayLabel = document.getElementById("day-label")
let MonthLabel = document.getElementById("month-label")
let YearLabel = document.getElementById("year-label")

// Span (result area)

var DaySpan = document.getElementById("day-result")
var MonthSpan = document.getElementById("month-result")
var YearSpan = document.getElementById("year-result")

// Error area

var DayErrorArea = document.getElementById("day-error")
var MonthErrorArea = document.getElementById("month-error")
var YearErrorArea = document.getElementById("year-error") 

// data

var data = new Date()

// Current data

var CurrentDay = data.getDate()
var CurrentMonth = data.getMonth()
var CurrentYear = data.getFullYear()

let possibleError = []
   

    // EMPTY ERROR

        if (DayInput.value.length == 0) {
            DayErrorArea.innerHTML = "This field is required"
            DayInput.classList.add("error-state")
            DayLabel.style.color = "hsl(0, 100%, 67%)"
        }

        else {
            DayErrorArea.innerHTML = ""
            DayInput.classList.remove("error-state")
            DayLabel.style.color = "hsl(0, 1%, 44%)"
            possibleError.push(1)
        }

        if (MonthInput.value.length == 0) {
            MonthErrorArea.innerHTML = "This field is required"
            MonthInput.classList.add("error-state")
            MonthLabel.style.color = "hsl(0, 100%, 67%)"
        }

        else {
            MonthErrorArea.innerHTML = ""
            MonthInput.classList.remove("error-state")
            MonthLabel.style.color = "hsl(0, 1%, 44%)"
            possibleError.push(2)
        }

        if (YearInput.value.length == 0) {
            YearErrorArea.innerHTML = "This field is required"
            YearInput.classList.add("error-state")
            YearLabel.style.color = "hsl(0, 100%, 67%)"
        }

        else {
            YearErrorArea.innerHTML = ""
            YearInput.classList.remove("error-state")
            YearLabel.style.color = "hsl(0, 1%, 44%)"
            possibleError.push(3)
        }
    

    // INVALID DATA 

        if (!DayInput.value.length == 0) {
            if ((DayInput.value > 31) || (DayInput.value < 1)) {

                DayErrorArea.innerHTML = "Must be a valid day"
                DayInput.classList.add("error-state")
                DayLabel.style.color = "hsl(0, 100%, 67%)"
            }
            else {
                DayErrorArea.innerHTML = ""
                DayInput.classList.remove("error-state")
                DayLabel.style.color = "hsl(0, 1%, 44%)"
                possibleError.push(4)
            }
        }
        
        if (!MonthInput.value.length == 0) {
            if ((MonthInput.value > 12) || (MonthInput.value < 1)) {
    
                MonthErrorArea.innerHTML = "Must be a valid month"
                MonthInput.classList.add("error-state")
                MonthLabel.style.color = "hsl(0, 100%, 67%)"
            }
            else {
                MonthErrorArea.innerHTML = ""
                MonthInput.classList.remove("error-state")
                MonthLabel.style.color = "hsl(0, 1%, 44%)"
                possibleError.push(5)
            }
        }

        if (!YearInput.value.length == 0) {
            if (YearInput.value > CurrentYear) {

                YearErrorArea.innerHTML = "Must be in the past"
                YearInput.classList.add("error-state")
                YearLabel.style.color = "hsl(0, 100%, 67%)"
            }
            else if (YearInput.value < 1000) {

                YearErrorArea.innerHTML = "Must be a valid year"
                YearInput.classList.add("error-state")
                YearLabel.style.color = "hsl(0, 100%, 67%)"
            }
            else {
                YearErrorArea.innerHTML = ""
                YearInput.classList.remove("error-state")
                YearLabel.style.color = "hsl(0, 1%, 44%)"
                possibleError.push(6)
            }
        }

    // DAY AND MONTH COMPATIBILITY

    const months = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]

    if ((!DayInput.value == 0) && (!MonthInput.value == 0)){
        for (cont = 3; cont <= 11; cont = cont + 2) {
            if (cont == 7) {
                cont = cont + 1
            }
            if ((DayInput.value == 31) && (MonthInput.value == months[cont])) {
                DayErrorArea.innerHTML = "Must be a valid day"
                DayLabel.style.color = "hsl(0, 100%, 67%)"
                MonthLabel.style.color = "hsl(0, 100%, 67%)"
                YearLabel.style.color = "hsl(0, 100%, 67%)"
                DayInput.classList.add("error-state")
                MonthInput.classList.add("error-state")
                YearInput.classList.add("error-state")
            }
            else {
                possibleError.push(7)
            }
        

            if ((DayInput.value > 29) && (MonthInput.value == 2)) {
                DayErrorArea.innerHTML = "Must be a valid day"
                DayLabel.style.color = "hsl(0, 100%, 67%)"
                MonthLabel.style.color = "hsl(0, 100%, 67%)"
                YearLabel.style.color = "hsl(0, 100%, 67%)"
                DayInput.classList.add("error-state")
                MonthInput.classList.add("error-state")
                YearInput.classList.add("error-state")
            }
            else {
                possibleError.push(8)
            }
           
    }

}

   // esse if não deveria ser verdadeiro, já que o array possibleError não era pra ter 14 elementos. Mas foi assim que fez o programa funcionar :)
    if (possibleError.length == 14) {

       let years = (CurrentYear - YearInput.value)
       YearSpan.innerHTML = `${years}`

       let monthss = (CurrentMonth < MonthInput.value? MonthInput.value - CurrentMonth: CurrentMonth - MonthInput.value)
       if (CurrentDay >= DayInput.value) {
        monthss = monthss + 1 
       }
       MonthSpan.innerHTML = `${monthss}`

       if (DayInput.value > CurrentDay) {
        CurrentDay = CurrentDay + months[CurrentMonth - 1]
        CurrentMonth = CurrentMonth - 1
       }

       let days = CurrentDay - DayInput.value
       DaySpan.innerHTML = days
      
    }
    
   
   
    
}



