const nameInput = document.getElementById("input-name")
const ageInput = document.getElementById("input-age")
const welcomeButton = document.getElementById("register-button")
const alertDiv = document.getElementById('alert')

welcomeButton.addEventListener('click', () => {
    console.log(nameInput.value)
    if (!nameInput.value) {
        alertDiv.style.display = 'block'
        alertDiv.textContent = "Enter a name!"
        return
    }

    if (ageInput.value >= 18) {
        alertDiv.style.display = 'block'
        alertDiv.style.color = 'green'
        alertDiv.style.border = '1px solid green'
        alertDiv.style.backgroundColor = 'LightGreen'
        alertDiv.textContent = "Welcome!"
    } else {
        alertDiv.style.display = 'block'
        alertDiv.textContent = "You are not 18 years old!"
    }
})