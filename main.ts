/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Sep 2025
 * This program gets then shows the temperature.
*/

input.onButtonPressed(Button.A, function() {
    basic.showString("The temperature is " + input.temperature() + "C.")
})
