class Form{
    constructor(){
         this.input=createInput("name")
         this.button=createButton('play');
         this.title=createElement('h2')
         this.greeting=createElement('h3');
         this.resetbutton=createButton('Reset')


    }
    hide(){
        this.input.hide();
            this.button.hide();
            this.greeting.hide()
            
    }
    display(){
       
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-50,0)

        
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.resetbutton.position(displayWidth-100,30)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount
            player.update()
          player.updateCount(playerCount)
            textSize(25)
            
            this.greeting.html("hello "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        });
        this.resetbutton.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
            Player.updateCarsAtEnd(0)
        })
    }

}
