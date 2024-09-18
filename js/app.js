class Calculator {
    constructor() {
        this.answer = [] //show the result

        // Bind DOM elements
        this.num1 = document.querySelector("#num1")
        this.num2 = document.querySelector("#num2")
        this.operation = document.querySelector("#operation")
        this.calculateBtn = document.querySelector("#calculateBtn")
        this.result = document.querySelector("#result")

        // Bind the event listener
        this.calculateBtn.addEventListener('click', () => this.render())
    }

    //Methods
    add() {
        return parseInt(this.num1.value) + parseInt(this.num2.value) //Number() or parseInt()
    }
    subtract() {
        return parseInt(this.num1.value) - parseInt(this.num2.value)
    }
    multiply() {
        return parseInt(this.num1.value) * parseInt(this.num2.value)
    }
    divide() {
        return parseInt(this.num1.value) / parseInt(this.num2.value)
    }
    compute() {
        if (this.operation.value === "add") {
            this.answer.push(this.add())
            return
        }
        if (this.operation.value === "subtract") {
            this.answer.push(this.subtract())
            return
        }
        if (this.operation.value === "multiply") {
            this.answer.push(this.multiply())
            return
        }
        if (this.operation.value === "divide") {
            this.answer.push(this.divide())
            return
        }
    }
    render() {
        this.answer = []
        this.compute()
        this.result.innerHTML = `${this.answer}`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const myCalculator = new Calculator()
})