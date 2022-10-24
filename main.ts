let Helligkeit = 0
basic.forever(function () {
    Helligkeit = input.lightLevel()
    basic.showString("" + (Helligkeit))
    basic.pause(500)
})
