let history = [];

function appendValue(value) {
    document.forms.calc.display.value += value;
}

function clearDisplay() {
    document.forms.calc.display.value = '';
}

function deleteLast() {
    let display = document.forms.calc.display;
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let display = document.forms.calc.display;
        let expression = display.value;
        let result = eval(expression);

        display.value = result;

        // add to history
        history.push(`${expression} = ${result}`);

        // keep only last 3
        if (history.length > 3) {
            history.shift();
        }

        updateHistory();

    } catch {
        document.forms.calc.display.value = "Error";
    }
}

function updateHistory() {
    let historyList = document.getElementById("historyList");

    historyList.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function toggleHistory() {
    let historyBox = document.getElementById("historyBox");

    historyBox.style.display =
        historyBox.style.display === "block" ? "none" : "block";
}