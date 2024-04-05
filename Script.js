let current = ""
let  previous = ""
let numbers = document.getElementsByClassName("data-number")
let operations = document.getElementsByClassName("data-operation")

Array.from(numbers).forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        current = current + e.target.innerHTML;
        console.log(current)
        var output = document.getElementById("current")
        console.log(output)

        output.innerHTML=current
    });
});

Array.from(operations).forEach((operation) => {
    operation.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        if (e.target.innerHTML == '÷') {
            current = current + '/'
            document.getElementById("current").innerHTML = current
        }
        else {
            current = current + e.target.innerHTML;
            document.getElementById("current").innerHTML = current
        }
    });
});
    document.getElementById("data-all-clear").addEventListener('click', () => {
        current = " "
        previous = " "
        document.getElementById("current").innerHTML = current
        document.getElementById("previous").innerHTML = previous


    });


document.getElementById("data-delete").addEventListener('click', () => {
    current = current.toString().slice(0, -1)
    document.getElementById("current").innerHTML = current

});

document.getElementById("data-equals").addEventListener('click', () => {
    current = eval(current)
    previous = current
    document.getElementById("current").innerHTML = current

    document.getElementById("previous").innerHTML = previous


});