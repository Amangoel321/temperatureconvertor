function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultElement = document.getElementById("convertedTemperature");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (unit === "celsius") {
        const convertedTemperature = (temperature * 9/5) + 32;
        resultElement.textContent = convertedTemperature.toFixed(2) + " °F";
    } else {
        const convertedTemperature = (temperature - 32) * 5/9;
        resultElement.textContent = convertedTemperature.toFixed(2) + " °C";
    }
}