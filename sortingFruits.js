let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sort() {
    for (i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else {
            orangeShelf.textContent += "🍊"
        }
    }
}

sort()