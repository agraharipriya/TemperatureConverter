document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (!isNaN(temperature)) {
            if (unit === "celsius") {
                const fahrenheit = (temperature * 9/5) + 32;
                resultDiv.innerHTML = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
            } else if (unit === "fahrenheit") {
                const celsius = (temperature - 32) * 5/9;
                resultDiv.innerHTML = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
            }
        } else {
            resultDiv.innerHTML = "Please enter a valid temperature.";
        }
    });
});
