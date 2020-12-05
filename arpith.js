//bounceOff 

function bounceOff(sprite1,target) {
    if (sprite1.x - target.x < target.width/2 + sprite1.width/2
      && target.x - sprite1.x < target.width/2 + sprite1.width/2) {
    sprite1.velocityX = sprite1.velocityX * (-1);
    target.velocityX = target.velocityX * (-1);
  }
  if (sprite1.y - target.y < fixedRect.height/2 + target.height/2
    && target.y - sprite1.y < target.height/2 + sprite1.height/2){
    sprite1.velocityY = sprite1.velocityY * (-1);
    target.velocityY = target.velocityY * (-1);
  }
  }

  //isTouching 

  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }