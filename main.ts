input.onButtonPressed(Button.A, function () {
    radio.sendNumber(Sender_id)
})
input.onButtonPressed(Button.B, function () {
    Sender_id += 1
    if (Sender_id > 11) {
        Sender_id = 6
    }
})
let Sender_id = 0
radio.setGroup(42)
Sender_id = 11
basic.forever(function () {
    basic.showNumber(Sender_id - 6)
})
