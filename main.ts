let state = 0
basic.forever(function () {
    if (smarthome.ReadNoise(AnalogPin.P1) > 55) {
        if (state == 0) {
            state = 1
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            state = 0
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
