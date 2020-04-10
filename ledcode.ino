int led[3]={15, 4, 5};
int gnd[3]={2, 16, 18};
int trig=25;
int echo=26;

void setup() {
  for(int i=0; i<3; ++i){
    pinMode(led[i], OUTPUT);
    digitalWrite(led[i], 1);
    pinMode(gnd[i], OUTPUT);
    digitalWrite(gnd[i], 0);
  }
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  
  Serial.begin(115200);
}
void loop() {
  static int j=30;
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  int distance=pulseIn(echo, HIGH)*17/1000;
  Serial.print(distance);
  Serial.println("cm");
  delay(100);
  if(distance>20){
     digitalWrite(led[0], 0);
     digitalWrite(led[1], 0);
     digitalWrite(led[2], 1);
  }
  if(distance<=20 & distance>10){
     digitalWrite(led[0], 0);
     digitalWrite(led[1], 1);
     digitalWrite(led[2], 0);
  }
  if(distance<10){
     digitalWrite(led[0], 1);
     digitalWrite(led[1], 0);
     digitalWrite(led[2], 0);
  }
}
