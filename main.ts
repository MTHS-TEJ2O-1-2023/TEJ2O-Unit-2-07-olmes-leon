/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Oct 2023
 * This program is a cookieclicker
*/

let cookies = 0
let clickValue = 0
clickValue = 1

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
basic.showNumber(cookies)
