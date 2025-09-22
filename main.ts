/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Sep 2025
 * This program gets then shows the temperature.
*/

// variable
let temp: number
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button A is pressed, it shows the temperature
input.onButtonPressed(Button.A, function() {

    //show the temperature
    basic.showString("The temperature is :")
    temp = input.temperature()
    basic.showNumber(temp)
    basic.showString("C.")
    basic.showIcon(IconNames.Happy)
})
