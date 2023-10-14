/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    cookies += clickValue
    basic.showNumber(cookies)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(cookies)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
let cookies = 0
let clickValue = 0
clickValue = 1
basic.showNumber(cookies)