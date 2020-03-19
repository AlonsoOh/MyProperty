import requests
import random
import time

for i in range(10):
    value = random.randrange(1, 101)
    requests.get("https://api.thingspeak.com/update?api_key=KXUM5S9Z3JFI25VE&field1=" + str(value))
    time.sleep(20)

 
