void setup() {
  // put your setup code here, to run once:
  pinMode(23, OUTPUT);
  pinMode(21, OUTPUT);
  pinMode(12, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(23, 1);
  delay(100);
  digitalWrite(23, 0);
  delay(1000);
  digitalWrite(21, 1);
  delay(100);
  digitalWrite(21, 0);
  delay(1000);
  digitalWrite(12, 1);
  delay(100);
  digitalWrite(12, 0);
  delay(1000);
  for(int i = 0; i < 5; i++){
    digitalWrite(23, 1);
    delay(100);
    digitalWrite(23, 0);
    delay(100);
  }

  digitalWrite(21, 1);
  delay(100);
  digitalWrite(21, 0);
  delay(100);
  digitalWrite(12, 1);
  delay(100);
  digitalWrite(12, 0);
  delay(2000);

  digitalWrite(23, 1);
  delay(1000);
  digitalWrite(23, 0);
  delay(1000);
  digitalWrite(21, 1);
  delay(1000);
  digitalWrite(21, 0);
  delay(1000);
  digitalWrite(12, 1);
  delay(1000);
  digitalWrite(12, 0);
  delay(1000);
  
  digitalWrite(23, 1);
  digitalWrite(21, 1);
  delay(1000);
  digitalWrite(21, 0);
  delay(1000);
  digitalWrite(12, 1);
  delay(1000);
  digitalWrite(23, 0);
  delay(1000);
  digitalWrite(21, 1);
  delay(1000);
  digitalWrite(23, 1);
  delay(1000);
  digitalWrite(23, 0);
  digitalWrite(12, 0);
  digitalWrite(21, 0);
  delay(2000);
}
