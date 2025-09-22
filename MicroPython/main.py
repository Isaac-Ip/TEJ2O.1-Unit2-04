"""
Created by: Isaac Ip
Created on: Sep 2025
This module is a Micro:bit MicroPython program
This program gets and shows the temperature.
"""

from microbit import *
import temperature

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temperatureInCelsius = temperature()
        display.show("The temperature is:" + temperatureInCelsius + "C.")
        display.show(Image.HAPPY)
