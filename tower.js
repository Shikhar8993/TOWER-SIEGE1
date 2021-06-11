class Tower extends BaseClass {
  constructor(x, y){
    super(x,y,25,25);
   
  }
display(){

  fill("yellow");
 // console.log(this.body.speed);

if(this.body.speed<2.14){
  super.display();
}
else{
  World.remove(world,this.body);
}


}

};