document.getElementById("convert").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    let result = "";

    if (unit === "celsius") {
        const fahrenheit = (temperatureInput * 9 / 5) + 32;
        result = `${temperatureInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperatureInput - 32) * 5 / 9;
        result = `${temperatureInput}°F is equal to ${celsius.toFixed(2)}°C`;
    }

    document.getElementById("result").textContent = result;
});
