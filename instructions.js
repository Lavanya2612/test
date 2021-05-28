class Instructions{

    constructor(){
        this.image1 = loadImage('images/bg.jpg')
    }

    display(){
        
        image (this.image1,-displayWidth/2 +700,-displayHeight/25,displayWidth,displayHeight)
        var title = createElement('h1')
        //title.font('Impact')
        title.html("INSTRUCTIONS");
        title.position(displayWidth/2 -450, 50);   
       
    }
}