const investInput = document.querySelectorAll(".invest-input");
const resultInput = document.querySelectorAll(".result-input");
const expenseInput = document.querySelectorAll(".expense-input");
const profitText = document.querySelectorAll(".profit-text");

// Функция для сохранения введенных данных в Local Storage
function saveData() {
  // Сохраняем значения в Local Storage
  for (let i = 0; i < investInput.length; i++) {
    localStorage.setItem(`invest_${i}`, investInput[i].value);
    localStorage.setItem(`result_${i}`, resultInput[i].value);
    localStorage.setItem(`expense_${i}`, expenseInput[i].value);
    localStorage.setItem(
      `profit_${i}`,
      resultInput[i].value - investInput[i].value - expenseInput[i].value
    );
  }
}

// Функция для загрузки сохраненных данных из Local Storage
function loadData() {
  // Загружаем значения из Local Storage и устанавливаем их в соответствующие поля ввода
  for (let i = 0; i < investInput.length; i++) {
    investInput[i].value = localStorage.getItem(`invest_${i}`) || "";
    resultInput[i].value = localStorage.getItem(`result_${i}`) || "";
    expenseInput[i].value = localStorage.getItem(`expense_${i}`) || "";
    document.querySelectorAll(".profit")[i].innerHTML =
      localStorage.getItem(`profit_${i}`) || "";
  }
}

// Вызываем функцию загрузки данных при загрузке страницы
window.addEventListener("load", loadData);

// Добавляем обработчики событий на поля ввода для сохранения данных при изменении
for (let i = 0; i < investInput.length; i++) {
  investInput[i].addEventListener("input", saveData);
  resultInput[i].addEventListener("input", saveData);
  expenseInput[i].addEventListener("input", saveData);
}

// let countDay = 1;

function calc(boxNumber) {
  if (investInput[boxNumber - 1].value.length > 4) {
    investInput[boxNumber - 1].value = investInput[boxNumber - 1].value.slice(
      0,
      4
    );
  }

  if (resultInput[boxNumber - 1].value.length > 4) {
    resultInput[boxNumber - 1].value = resultInput[boxNumber - 1].value.slice(
      0,
      4
    );
  }

  if (expenseInput[boxNumber - 1].value.length > 4) {
    expenseInput[boxNumber - 1].value = expenseInput[boxNumber - 1].value.slice(
      0,
      4
    );
  }

  document.querySelectorAll(".profit")[boxNumber - 1].innerHTML =
    resultInput[boxNumber - 1].value -
    investInput[boxNumber - 1].value -
    expenseInput[boxNumber - 1].value;
}
