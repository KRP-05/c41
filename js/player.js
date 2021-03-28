class Player{
    constructor(){
this.index=null
this.distance=0
this.name=null
this.rank=0

    }
    getCount(){
        var playerCountref=database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount=data.val();
        })
        

    }
    update(){
        var playerIndex ="players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance,
    rank:this.rank
})
} 
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })

}
static getPlayerInfo(){
    var playerInfoRef=database.ref('players')
    playerInfoRef.on('value',(data)=>{
        allPlayers=data.val();
    })
}
getCarsAtEnd(){
    database.ref('carsAtEnd').on('value',(data)=>{
        this.rank=data.val()
    })
    
}
static updateCarsAtEnd(rank){
    database.ref('/').update({
        carsAtEnd:rank
    })
}
}