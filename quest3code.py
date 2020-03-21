import requests
import time
from random import randint
for i in range(10):
    value = randint(1, 1000)
    url = "http://api.thingspeak.com/update?api_key=EK3F0OIDHXVDUPBR&field3=" + str(value)
    r = requests.get(url)
    r.encoding = 'utf8'
    print(r.text)
    time.sleep(20)



