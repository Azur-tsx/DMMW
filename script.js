const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const info = document.querySelector("#info")
const restartSection = document.querySelector("#restart")
const restartButton = document.querySelector("#restartButton")
const restartText = document.querySelector("#restartText")
const checklist = document.querySelector("#checklist")
let isLoading = false

body.addEventListener("click", mouseWorks)
body.addEventListener("keydown", keyboardDetected)

function mouseWorks() {
    isLoading = true

    const messages = [
        "Analyzing click velocity...",
        "Asking the mouse politely if it was intentional...",
        "Verifying signal with the International Mouse Authority...",
        "Checking if this was a cosmic coincidence...",
        "Consulting the click oracle...",
        "Detecting signs of intelligent clicking...",
        "Compiling click logs...",
        "Running a background check on your mouse...",
        "Evaluating mouse's emotional state...",
        "Validating click with universal laws of interaction..."
    ]

    const checks = [
        "🔍 Locating cursor...",
        "🧠 Running AI click analysis...",
        "📡 Connecting to satellite...",
        "🧪 Checking click integrity...",
        "⚙️ Calibrating mouse DPI...",
        "🔐 Verifying user intent...",
        "📊 Comparing with past clicks...",
        "🦾 Sending data to NASA...",
        "📡 Listening for mouse response...",
        "🧬 Sequencing click DNA...",
        "🕵️‍♂️ Inspecting browser history...",
        "🚪 Checking if mouse is plugged in...",
        "🧼 Sanitizing click data...",
        "🔧 Tightening virtual screws...",
        "🎯 Confirming target accuracy...",
        "💤 Waking up internal sensors...",
        "🌀 Detecting multidimensional input...",
        "💾 Saving useless data to RAM...",
        "🔍 Reviewing with mouse expert committee...",
        "✅ Sanity check complete."
    ]

    checks.forEach((check, index) => {
        setTimeout(() => {
            const li = document.createElement("li")
            li.textContent = check
            checklist.appendChild(li)
        }, index * 1000)
    })

    const randomMessage = messages[Math.floor(Math.random() * messages.length)]

    body.removeEventListener("click", mouseWorks)
    h1.innerHTML = ""
    info.innerHTML = randomMessage
    setTimeout(() => {
        confetti()
        h1.innerHTML = "Yey ! Your mouse is working !"
        info.style.display = "none"
        checklist.innerHTML = ""
        restartText.innerHTML = "Not sure ?"
        restartSection.classList.toggle("hidden")
        isLoading = false
    }, checks.length * 1000 + 500)
}

function restart() {
    body.addEventListener("click", mouseWorks)
    h1.innerHTML = "Click anywhere to check if your mouse is working !"
    info.style.display = "block"
    restartSection.classList.toggle("hidden")
}

function keyboardDetected() {
    if (isLoading) return
    body.removeEventListener("keydown", keyboardDetected)
    h1.innerHTML = "That's your keyboard..."
    info.style.display = "none"
    restartSection.classList.remove("hidden")
    restartText.innerHTML = "Try using your mouse instead"
    restartButton.innerHTML = "Try again"

    rainLetters()
}

function rainLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const count = 30

    for (let i = 0; i < count; i++) {
        const span = document.createElement("span")
        span.classList.add("falling-letter")

        const char = letters[Math.floor(Math.random() * letters.length)]
        span.textContent = char

        const x = Math.random() * window.innerWidth
        span.style.left = `${x}px`

        const duration = Math.random() * 2 + 1
        span.style.animationDuration = `${duration}s`

        document.body.appendChild(span)

        setTimeout(() => {
            span.remove()
        }, duration * 1000)
    }
}

