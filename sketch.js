
var  tijolo,bola,raquete , estadojogo , bordas , tijolos
function setup() {
montarjogo()
  estadojogo = "parado"
}

function draw() {
   background(0);

  if(estadojogo == 'parado'){
   
textSize(20)
text('pressione "espaço"para iniciar', 60, 200)
  }

  if (keyDown("space")){  
     
estadojogo = "play";
bola.velocityY = -5   
 bola.velocityX = -6  
  }
   
if(estadojogo == 'play'){
  
  for (i = 0; i< 3; i ++) {
 
  bola.bounceOff(bordas[i])
                         
}
  
  if(keyDown('left')){
raquete.velocityX = - 5
    
  
  
}
   if(keyDown('right')){
raquete.velocityX = + 5
   }    
 
  raquete.collide(bordas)
  
  bola.bounceOff(raquete)
  
bola.bounceOff(tijolos, removerTijolo)
  
}
  
if(estadojogo == 'gameOver'){
  
  
}
   
   

   
   
  drawSprites();
  
  
  
  
  
  
  
}

function removerTijolo(bola,tijolo){
  
  tijolo.remove()
  
}



function montarjogo(){
     
    tijolos = createGroup()
  
criarLinha(0,'red')
criarLinha(29, 'blue')  
criarLinha(29+29, 'yellow')
criarLinha(29+29+29, 'green')

bordas=createEdgeSprites()  
  
bola=createSprite(200,250,20,20) 
bola.shapeColor='white'
  
raquete=createSprite(200,350,120,10)  
raquete.shapeColor='white'  
  
}
  

function criarLinha(y,cor){
  for(i = 0; i<5 ; i++){
    
  tijolo = createSprite(65 + 54 * i ,50+y,50,25)
tijolo.shapeColor = cor
    tijolos.add(tijolo)
  }
  
  
}