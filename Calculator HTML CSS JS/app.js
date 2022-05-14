let numbers = document.querySelectorAll('.number')
let symbols = document.querySelectorAll('.symbol')
let input = document.querySelector('#input')
let equal = document.querySelector('#equal')
let reset = document.querySelector('#reset')
let end;
let first ="";
let second ="";
let selectOp = "";

numbers.forEach(number => {
    number.addEventListener('click', function () {
        input.value += number.value

        if(selectOp == "")
        {
         first += number.value
        }
        else if (selectOp != "")
        {
            second += number.value
        }
    })
});

symbols.forEach(symbol => {
    symbol.addEventListener('click', function () {
        input.value = input.value + this.value
        selectOp = symbol.value
    })
});

equal.addEventListener("click" , function() {
    if(selectOp == "+")
    {
        end = parseInt(first) + parseInt(second) 
        input.value = (end)
    }
    else if(selectOp == "-")
    {
        end = parseInt(first) - parseInt(second) 
        input.value = (end)
    }
    else if(selectOp == "/")
    {
        end = parseInt(first) / parseInt(second) 
        input.value = (end)
    }
    else if(selectOp == "*")
    {
        end = parseInt(first) * parseInt(second) 
        input.value = (end)
    }
})

reset.addEventListener("click" , function() {
    input.value = ""
})



