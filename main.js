var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y, 
        let:player_x
        })    ;
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y, 
        let:player_x
        })    ;
        canvas.add(block_image_object);
    });  
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keycode;
    console.log(keypressed);
    if(e.shiftkey == true && keypressed =='80')
    {
        console.log("p&shiftpressed together");
        block_image_width = block_image_width +'10';
        block_image_height = block_image_height +'10'
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftkey == true && keypressed =='77')
    {
        console.log("p&shiftpressed together");
        block_image_width = block_image_width -'10';
        block_image_height = block_image_height -'10'
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }
    if(keypressed == '40')
    {
        down();
        console.log("down");
    }
    if(keypressed == '37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='70')
    {
        new_image('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
        console.log("f");
    }
    if(keypressed == '66')
    {
        new_image('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
        console.log("b");
    }
    if(keypressed=='76')
    {
        new_image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
        console.log("l");
    }
    if(keypressed=='82')
    {
        new_image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
        console.log("r");
    }
    if(keypressed=='72')
    {
        new_image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
        console.log("h");
    }


}
function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when up arrow key is pressed,x="+player_x+",y="+player_y);
        canvas.remove("player_object");
        player_update();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when up arrow key is pressed,x="+player_x+",y="+player_y);
        canvas.remove("player_object");
        player_update();
    }
}
function left()
{
    if(player_x>0)
    {
        player_x=player_x-block_image_width;
        console.log("block_image_height="+block_image_width);
        console.log("when up arrow key is pressed,x="+player_x+",y="+player_y);
        canvas.remove("player_object");
        player_update();
    }
}
function rigth()
{
    if(player_x<=850)
    {
        player_x=player_x+block_image_width;
        console.log("block_image_height="+block_image_width);
        console.log("when up arrow key is pressed,x="+player_x+",y="+player_y);
        canvas.remove("player_object");
        player_update();
    }
}