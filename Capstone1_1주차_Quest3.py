import requests
import random           #랜덤함수 호출을 위함
import time             #time.sleep()을 실행하기 위함

for i in range(10):
    value = random.randrange(1, 101)        #1부터 100까지 임의의 수 뽑음
    requests.get("https://api.thingspeak.com/update?api_key=KXUM5S9Z3JFI25VE&field1=" + str(value))
    time.sleep(20)                          #20초 정도 텀을 둠

 
