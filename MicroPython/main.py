"""
Created by: Isaac Ip
Created on: Sep 2025
This module is a Micro:bit MicroPython program
This program gets and shows the temperature.
"""

from microbit import *


while True:
    if button_a.is_pressed():
        temperature = temperature()
        display.show("The temperature is:" + temperature + "C.")
        display.show(Image.HAPPY)
