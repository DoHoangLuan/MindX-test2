// chia het cho 1 va chinh nó
// < 2

const checkPrime = (number) => {
    let count = 0
    if (number < 2) {
        return false
    }
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            count++
        }
    }
    return count == 2
}



const btn = document.getElementById("button")
btn.onclick = () => {
    let sum = 0
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let tSN = document.getElementById("result")
    const aValue = a.value;
    const bValue = b.value;
    const isBigger = checkBigger(aValue, bValue)
    if (isBigger == false) {
        alert('A phải bé hơn B')
        return
    }

    for (i = aValue; i <= bValue; i++) {
        if (checkPrime(i) == true) {
            sum += i
        }
    }
    tSN.innerText = `Tổng các số nguyên tố trong khoảng a và b là : ${sum}`
}

const checkBigger = (soA, soB) => {
    if (Number(soA) < Number(soB)) {
        return true
    }
    return false
}

