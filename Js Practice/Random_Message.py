import random
# @python.coder_
import pyautogui as pg
import time
animal=('janu','manu','koliza','moyna','tuntuni','bilai','botu','baby','babe','sweetheart')
time.sleep(8)
for i in range(20):
    a=random.choice(animal)
    pg.write("Tumi amar "+a)
    pg.press('enter')