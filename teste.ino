/*
Aluno:Matheus Rangel de Figueiredo
Matricula:699742
Data:22/06/2020
*/


//Variaveis

int ledState = LOW;     
long previousMillis = 0;
int LEDFlashInterval=500;
int LEDn=13;
int LEDn2=4; 

//Setup

void setup(){
  Serial.begin(9600);
  for(int i=13;i>3;i--){
   pinMode(i, OUTPUT);
  }
  }
/*1. um procedimento que ao ser chamado irá acender os leds
progressivamente do primeiro ao ultimo. Um tempo de 500 
milissegundos entre um lede outro.*/
void Ex01(){

  do{
    unsigned long currentMillis=millis();
     if(currentMillis - previousMillis > LEDFlashInterval) {
       previousMillis = currentMillis;   
       if (ledState == LOW)
         ledState = HIGH;
       digitalWrite(LEDn, ledState);
       LEDn--;
     }
  }while(LEDn>2);
} 
/*2.um procedimento que ao ser chamado irá apagar os leds
progressivamente do último ledao primeiro. Um tempo de 500 
milissegundos entre um lede outro.*/
int Ex02(){
  do{
   unsigned long currentMillis=millis();
     if(currentMillis - previousMillis > LEDFlashInterval) {
       previousMillis = currentMillis;   
       if (ledState == LOW)
         ledState = HIGH;
       digitalWrite(LEDn2, ledState);
       LEDn2++;     
     }
}while(LEDn2<15);  
}
/*3.Um procedimento que ao ser chamado irá acender os ledsde forma 
aleatória. Só deverá terminar quando todos os ledsforem acessos.*/
void Ex03(){
  int contador=0;
  int a=0;
  do{
    a=rand()%14;
       if (a<4){a=a+4;}
   unsigned long currentMillis=millis();
     if(currentMillis - previousMillis > LEDFlashInterval) {
       previousMillis = currentMillis; 
      if (ledState == LOW)
        contador++;
         ledState = HIGH;
       digitalWrite(a, ledState);
         
        }
 
       }while(contador<9);
     }
/*4.Um procedimento que ao ser chamado irá apagar os leds de forma 
aleatória. Só deverá terminar quando todos os ledsforem apagados.*/

void Ex04(){
  int contador=0;
  int a=0;
   for(int l=13;l>3;l--){
 digitalWrite(l, HIGH);
  }
  do{
    a=rand()%14;
       if (a<4){a=a+4;}
   unsigned long currentMillis=millis();
     if(currentMillis - previousMillis > LEDFlashInterval) {
       previousMillis = currentMillis; 
      if (ledState == HIGH)
        contador++;
         ledState = LOW;
       digitalWrite(a, ledState);      
        }
 
       }while(contador<9);  
     }

/*5.Um procedimento para acender e apagar os ledsde forma 
aleatória. Deverá executar essa operação 1000 vezes. */
void Ex05(){
  int contador=0;
  int a=0;
 
  do{
    
    a=rand()%14;
     if (a<4){a=a+4;}
   unsigned long currentMillis=millis();
     if(currentMillis - previousMillis > LEDFlashInterval) {
       previousMillis = currentMillis; 
       if (ledState == LOW)
         ledState = HIGH;
       else
         ledState = LOW;
       
         digitalWrite(a, ledState);
     contador++;}
}while(contador<999);
     }

//Menu(loop)

void loop()
{
  
  for(int l=13;l>3;l--){
 digitalWrite(l, LOW);
  }
 
 Serial.print("\n Matheus Rangel de Figueiredo-699742\n");
  Serial.print("\n1-Exercicio 01\n");
  Serial.print("2-Exercicio 02\n");
  Serial.print("3-Exercicio 03\n");
  Serial.print("4-Exercicio 04\n");
  Serial.print("5-Exercicio 05\n");
  int x=0;
  while (Serial.available()==0);
  x=Serial.parseInt();
  
  switch(x){
    case 1:
    Serial.print("Executando Exercicio 01\n");
 Ex01();
    break;
    case 2:
    Serial.print("Executando Exercicio 02\n");
    Ex02();
    break;
    case 3:
    Serial.print("Executando Exercicio 03\n");
    Ex03();
    break;
    case 4:
    Serial.print("Executando Exercicio 04\n");
    Ex04();
    break;
    case 5:
    Serial.print("Executando Exercicio 05\n");
    Ex05();
    break;
  }
 
 }

  

