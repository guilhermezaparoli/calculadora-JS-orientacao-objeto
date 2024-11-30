class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    checkLastDigit(input, upperValue, reg) {
        if ((!reg.test(input)) && !reg.test(upperValue.substring(upperValue.length - 1))) {
            return true;
        } else {
            return false
        }
    };

    clearValues() {
        this.upperValue.textContent = 0
        this.resultValue.textContent = 0
    }

    resolution() {
        let upperValueArray = (this.upperValue.textContent).split(' ')

        console.log(upperValueArray);
        let result = 0
        for (let i = 0; i <= upperValueArray.length; i++) {
            let actualItem = upperValueArray[i]

            if (actualItem === "+") {
                result = parseFloat(upperValueArray[i - 1]) + parseFloat(upperValueArray[i + 1])
            }
        }

        if(result){
            calc.reset = 1
        }
        this.upperValue.textContent = result
        this.resultValue.textContent = result
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;

        var reg = new RegExp('^\\d+$');

        if(calc.reset && reg.test(input)){
            upperValue = "0"
        }

        calc.reset = 0

        if (input == 'AC') {
            calc.clearValues()



        } else if (input == '=') {
            calc.resolution()
        } else {
            if (calc.checkLastDigit(input, upperValue, reg)) {
                return false
            }

            if (!reg.test(input)) {
                input = ` ${input} `
            }

            if (upperValue == "0") {
                calc.upperValue.textContent = input
            } else {
                calc.upperValue.textContent += input

            }
        }
    }
}


let calc = new Calculator()

let buttons = document.querySelectorAll('.btn')

for (let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}
