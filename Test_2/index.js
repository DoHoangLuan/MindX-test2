let text = document.getElementById("triangle")
let input = document.getElementById("input")

let numberOneTriangle = (n) => {
    if (n < 1 || n > 10) {
        alert(" Nhập số nguyên trong khoảng từ 1 đến 10")
    }
    else {
        let triangle = ""
        for (let i = 1; i <= n; i++) {
            if (i === n) {
                triangle += "*".repeat(i)
            }
            else {
                triangle += "*".repeat(i) +"\n"
            }
        }
        text.innerText = triangle
        console.log(triangle);
    }
} 

input.oninput = (event) => {    
    numberOneTriangle(event.target.value)
}
numberOneTriangle(input)