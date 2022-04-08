let i: number;
let x = 0
let y = 0
let displej = 5
for (i = 0; i < displej; i++) {
    led.plot(x, y)
    y += 1
}
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    while (true) {
        basic.clearScreen()
        x += 1
        for (let i = 0; i < displej; i++) {
            y += 1
            led.plot(x % 5, y % 5)
        }
        basic.pause(3000)
    }
})
