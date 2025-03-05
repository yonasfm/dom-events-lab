/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(`.button`)
const display = document.querySelector(`.display`)

/*-------------------------------- Variables --------------------------------*/

let total = 0;
let input = ""
let operator = ""
let previousinput = ""
/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent; 

        if(button.classList.contains("number")) {
            addDisplay(value)
      }
        else if(button.classList.contains("operator")) {
            chooseOperator(value)
      }
        else if(button.classList.contains("equals")) {
          solveResult()
      }
        else if(button.classList.contains("C")) {
            clearDisplay();
      }
    })
})


/*-------------------------------- Functions --------------------------------*/

function addDisplay(value) {
    input += value;
    display.textContent = input
}

function chooseOperator(value) {
   if (input === "") {
    return;
   }
    else if (previousinput !== "") {
        solveResult()
    }
    operator = value
    previousinput = input
    input = ""
}

function clearDisplay(value) {
    input = ""
    operator = ""
    display.textContent = "0"
}

function solveResult() {
    if(previousinput != "" && input != "") {
        const prev = Number(previousinput)
        const now = Number(input)
    if(operator == "+") {
        total = prev + now

    }
    else if(operator == "-") {
        total = prev - now
    
    }
    else if(operator == "*") {
        total = prev * now
      
    }
    else if(operator == "/") {
        total = prev / now
      
    }
    display.textContent = total
    input = total.toString
    previousinput = ""
    operator = ""
}
}
