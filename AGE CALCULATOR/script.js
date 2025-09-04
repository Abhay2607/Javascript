let userInput = document.querySelector('#date');
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let userValue = new Date(userInput.value);
    if (!userInput.value) {
        alert("Please select your birth date!");
        return;
    }

    let birthDate = userValue.getDate();
    let birthMonth = userValue.getMonth();
    let birthYear = userValue.getFullYear();

    let today = new Date();
    let currDay = today.getDate();
    let currMonth = today.getMonth();
    let currYear = today.getFullYear();

    let dateDiff = currDay - birthDate;
    let monthDiff = currMonth - birthMonth;
    let yearDiff = currYear - birthYear;

    if (dateDiff < 0) {
        monthDiff--;
        let prevMonth = new Date(currYear, currMonth, 0).getDate();
        dateDiff += prevMonth;
    }

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }


    // let result = document.querySelector('#result');
    if (!result) {
        let result = document.createElement('p');
        // result.id = 'result';
        result.style.marginTop = '20px';
        result.style.fontSize = '20px';
        document.querySelector('.calculator').appendChild(result);
        result.innerHTML = `You are <strong>${yearDiff}</strong> years, <strong>${monthDiff}</strong> months, and <strong>${dateDiff}</strong> days old.`;
    }

    result.innerHTML = ''
}
