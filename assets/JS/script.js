'use strict';

const input = document.querySelector('.input');
const convertButton = document.querySelector('.convert');
const themeButton = document.querySelector('.theme');
const output = document.querySelector('.output p');
const radioButtons = document.querySelector('input[name="conversion"]');
let darkMode = false;

// Function to convert temperature
function convertTemperature() {
    const temperatureValue = input.value;
    
    if (isNaN(temperatureValue) || temperatureValue === '') {
        output.textContent = "Please enter a valid number.";
        return;
    }

    let result;
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;

    if (conversionType === 'toFahrenheit') {
        result = (temperatureValue * 9/5) + 32;
        output.textContent = `${temperatureValue}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperatureValue - 32) * 5/9;
        output.textContent = `${temperatureValue}°F is ${result.toFixed(2)}°C`;
    }
}

// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
}

convertButton.addEventListener('click', convertTemperature);
themeButton.addEventListener('click', toggleTheme);