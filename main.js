var canvas= new fabric.Canvas("myCanvas")

player_x=10
player_y=10

block_width=30
block_height=30

var player_object=""

var block_object=""

function player_update(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y, 
            left: player_x
        })
        canvas.add(player_object)
    })
}


function block_update(get_img){
    fabric.Image.fromURL(get_img,function (Img){
        block_object=Img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y, 
            left: player_x
        })
        canvas.add(block_object)
    })
}

window.addEventListener("keydown" , myKeyDown)
function myKeyDown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if(e.shiftKey==true && keypressed=='80'){
        block_height=block_height+10
        block_width=block_width+10
        document.getElementById("current_width").innerHTML=block_width
        document.getElementById("current_height").innerHTML=block_height
    }

    if(e.shiftKey==true && keypressed=="77"){
        block_height=block_height-10
        block_width=block_width-10
        document.getElementById("current_width").innerHTML=block_width
        document.getElementById("current_height").innerHTML=block_height
    }
    
    if(keypressed=='37'){
        console.log("left")
        left()
    }

    if(keypressed=='39'){
        console.log("right")
        right()
    }

    if(keypressed=='38'){
        console.log("up")
        up()
    }

    if(keypressed=='40'){
        console.log("down")
        down()
    }

    if(keypressed=='67'){
        console.log("c")
        block_update("cloud.jpg")
    }

    if(keypressed=='68'){
        console.log("d")
        block_update("dark_green.png")
    }

    if(keypressed=='71'){
        console.log("g")
        block_update("ground.png")
    }

    if(keypressed=='76'){
        console.log("l")
        block_update("light_green.png")

    }

    if(keypressed=='82'){
        console.log("r")
        block_update("roof.jpg")
    }

    if(keypressed=='84'){
        console.log("t")
        block_update("trunk.jpg")
    }

    if(keypressed=='85'){
        console.log("u")
        block_update("unique.png")
    }

    if(keypressed=='87'){
        console.log("w")
        block_update("wall.jpg")
    }

    if(keypressed=='89'){
        console.log("y")
        block_update("yellow_wall.png")
    }
}

function up(){
    if(player_y>0){
        player_y= player_y - block_height
        console.log(player_x, player_y)
        console.log(block_height)
        canvas.remove(player_object)
        player_update()

    }
}

function down(){
    if(player_y<500){
        player_y= player_y + block_height
        console.log(player_x, player_y)
        console.log(block_height)
        canvas.remove(player_object)
        player_update()
    }

}

function left(){
    if(player_x>0){
        player_x= player_x - block_width
        console.log(player_x, player_y)
        console.log(block_width)
        canvas.remove(player_object)
        player_update()
    }
}

function right(){
    if(player_x<=850){
        player_x= player_x + block_width
        console.log(player_x , player_y)
        console.log(block_width)
        canvas.remove(player_object)
        player_update()
    }
}
