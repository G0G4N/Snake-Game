

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b92e92b2-10d1-4483-a4fb-b76ca1804632","f1fa68e1-7b68-47d5-aa22-95bc04103bc5","f65fb6ba-da00-4732-a3b5-5668018678dd","249cca3b-6868-46db-9c0f-c76d8c2cdac6","eb715585-36cf-4d26-ae11-d21551f6841d","11db6f2c-c074-43b4-b539-90ebace0e892","a99fab50-25df-46f2-946f-fc680a6a9af6","bc61eee1-0aa7-46ed-8fa3-a4b6a9e054ab","4a36e54b-84a9-4130-af89-dc1c8c38d535","99b853ef-75a5-4218-a82d-a9351768896e","f93b2018-8fef-4a0a-b796-c1d826cd5878","882f9cd1-f7ee-4075-a613-3cc99f96df9e","8dda840d-53a7-4d7f-930e-8cab1e97e070","bb93f0bd-57f0-4dc2-ab9d-f61f05f29be1","e9b045f5-818d-4d16-b030-9529b855617d","0ab84378-9ca1-4776-9251-26e56b1a38e8","47888080-e8e4-4bad-bd71-ae6abf8cfb68","d87e7664-ee07-47f9-ad1a-ead778e96d3b","c15f4703-afca-4c8e-b7e9-17528caa1b0b","3596dcb9-3e15-43c6-9239-3b03c4e1abab","17f5d473-cabe-4024-b038-2188b775e07b","0248cb4e-e6c9-4a2e-a6d2-aad77ad79726","b6b68d37-4fad-4b40-86de-b6b2b4239e87","656a0ae7-b88b-4ad2-8111-f44e486b9805","4a47f1d0-b18d-40fe-b8fd-a6337c8d479f","8f6fd033-a669-41ae-b2b2-a31fe892031f","03a618e5-b01a-416f-bb7c-6dd993833688","59df1549-06ac-4111-bc7c-bf3bdde0379a","64645f7f-beb8-4693-ba23-43502c0c6ddf","58b4f48e-7866-4a68-9eee-f8ab14326774","a5f080df-84db-453c-bdee-08f19c70dfdc","4f098624-7b41-4316-8564-ff841ef35383"],"propsByKey":{"b92e92b2-10d1-4483-a4fb-b76ca1804632":{"name":"head","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"08scO4KOhnVOzEullQv8beL74KlflZM_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/b92e92b2-10d1-4483-a4fb-b76ca1804632.png"},"f1fa68e1-7b68-47d5-aa22-95bc04103bc5":{"name":"net","sourceUrl":null,"frameSize":{"x":75,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"mGzIvefOdL9TQCRDzFBHLl.zdQfGJLnZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":49},"rootRelativePath":"assets/f1fa68e1-7b68-47d5-aa22-95bc04103bc5.png"},"f65fb6ba-da00-4732-a3b5-5668018678dd":{"name":"heartcontainer","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"uwNf.l2If4mPcUD_UJmFWjfmseGFLyco","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/f65fb6ba-da00-4732-a3b5-5668018678dd.png"},"249cca3b-6868-46db-9c0f-c76d8c2cdac6":{"name":"superheartcontainer","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":5,"version":"pXdMEToSlWBiYA0SvPtbNaqKbxgBZ.OQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/249cca3b-6868-46db-9c0f-c76d8c2cdac6.png"},"eb715585-36cf-4d26-ae11-d21551f6841d":{"name":"easy","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"aqWu6Av8TRBT6AbrlGHWG8Z_KcY62JQO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/eb715585-36cf-4d26-ae11-d21551f6841d.png"},"11db6f2c-c074-43b4-b539-90ebace0e892":{"name":"easy_copy_1","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"12rlorc8W6yeQ0qSM_ZJstMoJPiT18ar","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/11db6f2c-c074-43b4-b539-90ebace0e892.png"},"a99fab50-25df-46f2-946f-fc680a6a9af6":{"name":"medium","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"N5w6yd.VM89uQejUbwzy_PUaCoUY3dvM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/a99fab50-25df-46f2-946f-fc680a6a9af6.png"},"bc61eee1-0aa7-46ed-8fa3-a4b6a9e054ab":{"name":"medium_copy_1","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"1FHqCKbx94PFpnHhc7pt4Oa5l9cpVw3k","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/bc61eee1-0aa7-46ed-8fa3-a4b6a9e054ab.png"},"4a36e54b-84a9-4130-af89-dc1c8c38d535":{"name":"hard","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"RP0z6oxOS_IjF_45j_yAjfqH4sLV50_d","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/4a36e54b-84a9-4130-af89-dc1c8c38d535.png"},"99b853ef-75a5-4218-a82d-a9351768896e":{"name":"hard_copy_1","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"oLgfD.fZYEUVAavSJ29NIUFPxQLmJzNO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/99b853ef-75a5-4218-a82d-a9351768896e.png"},"f93b2018-8fef-4a0a-b796-c1d826cd5878":{"name":"left","sourceUrl":null,"frameSize":{"x":100,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"40iWButudPb.PvpRITk7w6VPkE.LLkgG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":400},"rootRelativePath":"assets/f93b2018-8fef-4a0a-b796-c1d826cd5878.png"},"882f9cd1-f7ee-4075-a613-3cc99f96df9e":{"name":"left2","sourceUrl":null,"frameSize":{"x":100,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"gx9Iw_4dBN0d0vISgVOZ4iYjLyLSvXy0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":400},"rootRelativePath":"assets/882f9cd1-f7ee-4075-a613-3cc99f96df9e.png"},"8dda840d-53a7-4d7f-930e-8cab1e97e070":{"name":"right","sourceUrl":null,"frameSize":{"x":100,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"CXHYKqKlO48KnXvV3rxZV0usqp74Pncm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":400},"rootRelativePath":"assets/8dda840d-53a7-4d7f-930e-8cab1e97e070.png"},"bb93f0bd-57f0-4dc2-ab9d-f61f05f29be1":{"name":"grass1","sourceUrl":"assets/api/v1/animation-library/gamelab/trwr_pv6FYeGFn3HYn2.osnDmjobQ1cj/category_video_games/grass1.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"trwr_pv6FYeGFn3HYn2.osnDmjobQ1cj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/trwr_pv6FYeGFn3HYn2.osnDmjobQ1cj/category_video_games/grass1.png"},"e9b045f5-818d-4d16-b030-9529b855617d":{"name":"grass2","sourceUrl":"assets/api/v1/animation-library/gamelab/7se.c7lGSAhE3fz7xvpnEIVdGHtXzeXZ/category_video_games/grass2.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"7se.c7lGSAhE3fz7xvpnEIVdGHtXzeXZ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7se.c7lGSAhE3fz7xvpnEIVdGHtXzeXZ/category_video_games/grass2.png"},"0ab84378-9ca1-4776-9251-26e56b1a38e8":{"name":"grass3","sourceUrl":"assets/api/v1/animation-library/gamelab/UsZb7wKE93oiVmU7cWNn2Eu9vT5_1a5U/category_video_games/grass3.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"UsZb7wKE93oiVmU7cWNn2Eu9vT5_1a5U","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/UsZb7wKE93oiVmU7cWNn2Eu9vT5_1a5U/category_video_games/grass3.png"},"47888080-e8e4-4bad-bd71-ae6abf8cfb68":{"name":"grass4","sourceUrl":"assets/api/v1/animation-library/gamelab/QwI6iRe0u7I_sBUqOvWzgEmPgdWAhV72/category_video_games/grass4.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"QwI6iRe0u7I_sBUqOvWzgEmPgdWAhV72","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QwI6iRe0u7I_sBUqOvWzgEmPgdWAhV72/category_video_games/grass4.png"},"d87e7664-ee07-47f9-ad1a-ead778e96d3b":{"name":"Backgrass","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"w5R5sSluOuKBc50Qzjz0sSjTO9ygx8w1","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d87e7664-ee07-47f9-ad1a-ead778e96d3b.png"},"c15f4703-afca-4c8e-b7e9-17528caa1b0b":{"name":"restart","sourceUrl":null,"frameSize":{"x":85,"y":28},"frameCount":2,"looping":true,"frameDelay":12,"version":"10_NqSA1moyXz2qSkQVO3tmc.W1TEYzp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":85,"y":56},"rootRelativePath":"assets/c15f4703-afca-4c8e-b7e9-17528caa1b0b.png"},"3596dcb9-3e15-43c6-9239-3b03c4e1abab":{"name":"restart_copy_1","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"rvS8VR4iVWk0VU4EP1LixKZdFq.U9SQn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/3596dcb9-3e15-43c6-9239-3b03c4e1abab.png"},"17f5d473-cabe-4024-b038-2188b775e07b":{"name":"debugon","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"QJvHpxdZuvH3u5iBvuCUfr09jr3uNtti","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/17f5d473-cabe-4024-b038-2188b775e07b.png"},"0248cb4e-e6c9-4a2e-a6d2-aad77ad79726":{"name":"debugon2","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"Of7KQLG_QsIVBkzB2FUQVgzYDTBClzt0","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/0248cb4e-e6c9-4a2e-a6d2-aad77ad79726.png"},"b6b68d37-4fad-4b40-86de-b6b2b4239e87":{"name":"rocket1","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"jtOA7cu_xa5MmxYjbz8SqBS2ViPpUYLT","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/b6b68d37-4fad-4b40-86de-b6b2b4239e87.png"},"656a0ae7-b88b-4ad2-8111-f44e486b9805":{"name":"rocket2","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"A0KNlWZusmVNV4Gk.P5t5_skZvnwbJx9","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/656a0ae7-b88b-4ad2-8111-f44e486b9805.png"},"4a47f1d0-b18d-40fe-b8fd-a6337c8d479f":{"name":"rockethead","sourceUrl":null,"frameSize":{"x":36,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":".xJlhN05bMyrnWpcDNXoLdKLAWSpeioG","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":47},"rootRelativePath":"assets/4a47f1d0-b18d-40fe-b8fd-a6337c8d479f.png"},"8f6fd033-a669-41ae-b2b2-a31fe892031f":{"name":"gameoverbackround","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"mVZtiI5TLwNkrRnB9HmpITIuEsvB5tZM","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8f6fd033-a669-41ae-b2b2-a31fe892031f.png"},"03a618e5-b01a-416f-bb7c-6dd993833688":{"name":"planet1","sourceUrl":null,"frameSize":{"x":26,"y":26},"frameCount":8,"looping":true,"frameDelay":12,"version":"tJUjeaOyLkDVmt8zW0LSkK0GDwpIPUMe","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":78},"rootRelativePath":"assets/03a618e5-b01a-416f-bb7c-6dd993833688.png"},"59df1549-06ac-4111-bc7c-bf3bdde0379a":{"name":"planet2","sourceUrl":null,"frameSize":{"x":26,"y":26},"frameCount":8,"looping":true,"frameDelay":12,"version":"Co6QaMDwYbZAYVQWh5.VAe5mWejPjhvH","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":78},"rootRelativePath":"assets/59df1549-06ac-4111-bc7c-bf3bdde0379a.png"},"64645f7f-beb8-4693-ba23-43502c0c6ddf":{"name":"backround2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"CroossqiFaooiIxD7Vir6XUKY03EVhdD","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/64645f7f-beb8-4693-ba23-43502c0c6ddf.png"},"58b4f48e-7866-4a68-9eee-f8ab14326774":{"name":"rock","sourceUrl":null,"frameSize":{"x":43,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"aoCFeh.hKz7GO9S2wX1DMScgLSjXdl60","loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":60},"rootRelativePath":"assets/58b4f48e-7866-4a68-9eee-f8ab14326774.png"},"a5f080df-84db-453c-bdee-08f19c70dfdc":{"name":"repair","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fzEROv.R887aV1G8uAVudVyC8cSyb1Qw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a5f080df-84db-453c-bdee-08f19c70dfdc.png"},"4f098624-7b41-4316-8564-ff841ef35383":{"name":"repair+","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":4,"version":"lr4fkz.F0ABSBqYlPnXRvHhmaOJvv9C1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/4f098624-7b41-4316-8564-ff841ef35383.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Snake Game v4.1
World.frameRate = 15;
createEdgeSprites();
var headleftmove = 195;
var headrightmove = 200;
var bodyleftmove = 187.5;
var bodyrightmove = 212.5;
function controls() {
  if (keyDown("left")) {
    headleftmove = headleftmove - 8;
    headrightmove = headrightmove - 8;
    bodyleftmove = bodyleftmove - 8;
    bodyrightmove = bodyrightmove - 8;
  }
  if (keyDown("right")) {
    headleftmove = headleftmove + 8;
    headrightmove = headrightmove + 8;
    bodyleftmove = bodyleftmove + 8;
    bodyrightmove = bodyrightmove + 8;
  }
  head.x = randomNumber(headleftmove,headrightmove);
}
var backround = createSprite(200, 200, 400, 400);
backround.setAnimation("Backgrass");
var grass1 = createSprite(0, 0);
grass1.setAnimation("grass3");
var grass2 = createSprite(25, 0);
grass2.setAnimation("grass4");
var grass3 = createSprite(375, 0);
grass3.setAnimation("grass3");
var grass4 = createSprite(400, 0);
grass4.setAnimation("grass4");
grass1.velocityY = 8;
grass2.velocityY = 8;
grass3.velocityY = 8;
grass4.velocityY = 8;
function backrounds() {
  if (grass1.isTouching(healthtriger)) {
    grass1.x = randomNumber(0, 50);
    grass1.y = randomNumber(-10, -25);
    grass1.nextFrame();
  }
  if (grass3.isTouching(healthtriger)) {
    grass3.x = randomNumber(350, 400);
    grass3.y = randomNumber(-25, -50);
    grass3.nextFrame();
  }
}
function draw() {
backrounds();
controls();


background(rgb(5, 220, 0));
var head = createSprite(450, 200);
head.setAnimation("head");
noFill();
drawSprites();
noStroke();


fill(rgb(0, 0, 204));
ellipse(randomNumber(bodyleftmove,bodyrightmove), 240, 50, 50);

fill(rgb(0, 0, 153));
ellipse(randomNumber(bodyleftmove,bodyrightmove), 280, 50, 50);

fill(rgb(0, 0, 102));
ellipse(randomNumber(bodyleftmove,bodyrightmove), 320, 50, 50);

fill(rgb(0, 0, 51));
ellipse(randomNumber(bodyleftmove,bodyrightmove), 360, 50, 50);

fill(rgb(0, 0, 0));
ellipse(randomNumber(bodyleftmove,bodyrightmove), 400, 50, 50);
fill("white");
textSize(20);
text(score, 70, 20);
text("Score:", 10, 20);
text(Health, 70, 45);
textSize(18);
text("Health:", 10, 44);
health1();
points();
mode1();
border();
}
background(rgb(5, 220, 0));
var head = createSprite(randomNumber(195,200), 200);
head.setAnimation("head");
noStroke();
noFill();
rect(150, 150, 100, 250);
drawSprites();




var net = createSprite(randomNumber(50,350), -10);
net.setAnimation("net");
net.frameRate = 5;
net.velocityY = 8;
net.y = -10;
var heartcontainer = createSprite(randomNumber(50,350), -10);
heartcontainer.setAnimation("heartcontainer");
heartcontainer.frameRate = 5;
heartcontainer.velocityY = 8;
heartcontainer.y = -100;
var superheartcontainer = createSprite(randomNumber(50,350), -10);
superheartcontainer.setAnimation("superheartcontainer");
superheartcontainer.frameRate = 5;
superheartcontainer.velocityY = 8;
superheartcontainer.y = -200;
drawSprites();




var healthtriger = createSprite(200, 500, 500, 50);
var nettriger = createSprite(200, 450, 400, 50);
drawSprites();

var Health = 4;
var score = 0;
function points() {
  if (net.isTouching(nettriger)) {
    net.y = randomNumber(-10, -15);
    net.x = randomNumber(50,350);
    score = score + 2;
    console.log(score);
    console.log("NetRespowned");
  }
  if (net.y == 450) {
    net.y = randomNumber(-10, -15);
    net.x = randomNumber(50,350);
    score = score + 2;
    console.log(score);
    console.log("NetRespowned");
  }
  if (heartcontainer.isTouching(healthtriger)) {
    heartcontainer.x = randomNumber(50,350);
    heartcontainer.y = randomNumber(-250, -500);
    console.log("HeartRespowned");
  }
  if (superheartcontainer.isTouching(healthtriger)) {
    superheartcontainer.x = randomNumber(50,350);
    superheartcontainer.y = randomNumber(-500, -750);
    console.log("SuperHeartRespowned");
  }
  if (net.isTouching(heartcontainer)) {
    heartcontainer.x = randomNumber(50,350);
    heartcontainer.y = randomNumber(-250, -500);
  }
  if (net.isTouching(superheartcontainer)) {
    superheartcontainer.x = randomNumber(50,350);
    superheartcontainer.y = randomNumber(-500, -750);
  }
}
function health1() {
  if (net.isTouching(head)) {
    Health = Health - 1;
    score = score - 1;
    console.log(Health);
    net.x = randomNumber(50,350);
    net.y = -10;
  }
  if (heartcontainer.isTouching(head)) {
    Health = Health + 1;
    heartcontainer.x = randomNumber(50,350);
    heartcontainer.y = randomNumber(-250, -500);
    score = score + 0.5;
    console.log("Healed");
  }
  if (superheartcontainer.isTouching(head)) {
    Health = Health + 5;
    superheartcontainer.x = randomNumber(50,350);
    superheartcontainer.y = randomNumber(-500, -750);
    score = score + 1;
    console.log("SuperHealed");
  }
  if (Health == 0) {
    losescreen();
  }
}
function losescreen() {
  net.velocityY = 0;
  heartcontainer.velocityY = 0;
  superheartcontainer.velocityY = 0;
  background("black");
  fill("white");
  textSize(50);
  text("Game Over", 68, 200);
  fill("white");
textSize(20);
  text(score, 222, 220);
text("Score:", 145, 220);
  console.log("Game Over");
  reseting();
  head.alpha = 0;
  backround.alpha = 0;
  net.alpha = 0;
  heartcontainer.alpha = 0;
  superheartcontainer.alpha = 0;
  grass1.alpha = 0;
  grass2.alpha = 0;
  grass3.alpha = 0;
  grass4.alpha = 0;
  debugon.alpha = 0;
  easytext.alpha = 0;
  mediumtext.alpha = 0;
  hardtext.alpha = 0;
  easy.alpha = 0;
  medium.alpha = 0;
  hard.alpha = 0;
}
var reset = createSprite(435, 0);
reset.setAnimation("restart");
function reseting() {
  drawSprites();
  reset.y = 250;
  reset.x = 195;
}
head.bounceOff(leftEdge);
head.bounceOff(rightEdge);
head.collide(leftEdge);
head.collide(rightEdge);
leftEdge.displace(head);
rightEdge.displace(head);






var easy = createSprite(350, 50);
easy.setAnimation("easy");
easy.alpha = 0.5;
var easytext = createSprite(350, 50);
easytext.setAnimation("easy_copy_1");
var medium = createSprite(350, 100);
medium.setAnimation("medium");
medium.alpha = 0.5;
var mediumtext = createSprite(350, 100);
mediumtext.setAnimation("medium_copy_1");
var hard = createSprite(350, 150);
hard.setAnimation("hard");
hard.alpha = 0.5;
var hardtext = createSprite(350, 150);
hardtext.setAnimation("hard_copy_1");
var rocket1 = createSprite(370, 0, 10, 10);
rocket1.setAnimation("rocket1");
var rocket2 = createSprite(370, -11, 10, 10);
rocket2.setAnimation("rocket2");
drawSprites();

function mode1() {
  if (mousePressedOver(rocket1)) {
    rocket1.y = -11;
    rocket2.y = 15;
    rocket2.scale = 2.5;
    head.setAnimation("rockethead");
    grass1.setAnimation("planet1");
    grass3.setAnimation("planet2");
    backround.setAnimation("backround2");
    net.setAnimation("rock");
    heartcontainer.setAnimation("repair");
    superheartcontainer.setAnimation("repair+");
    heartcontainer.scale = 0.5;
    superheartcontainer.scale = 0.5;
    grass2.alpha = 0;
    grass4.alpha = 0;
    grass1.scale = 3;
    grass3.scale = 3;
    bodyleftmove = bodyleftmove + 450;
    bodyrightmove = bodyrightmove + 450;
  }
  if (mousePressedOver(rocket2)) {
    
    rocket1.y = 0;
    rocket2.y = -11;
    rocket2.scale = 0;
    head.setAnimation("head");
    grass1.setAnimation("grass1");
    grass3.setAnimation("grass3");
    backround.setAnimation("Backgrass");
    net.setAnimation("net");
    heartcontainer.setAnimation("heartcontainer");
    superheartcontainer.setAnimation("superheartcontainer");
    debugon.setAnimation("debugon");
    heartcontainer.scale = 1;
    superheartcontainer.scale = 1;
    grass2.alpha = 1;
    grass4.alpha = 1;
    grass1.scale = 1;
    grass3.scale = 1;
    
    bodyleftmove = bodyleftmove - 450;
    bodyrightmove = bodyrightmove - 450;
  }
  if (mousePressedOver(reset)) {
    reset.x = 435;
    reset.y = 0;
    score = 0;
    Health = 4;
    
    net.velocityY = 8;
    net.y = -10;
    net.x = randomNumber(50,350);
    heartcontainer.velocityY = 8;
    superheartcontainer.velocityY = 8;
    console.log("reset");
    
    head.alpha = 1;
  backround.alpha = 1;
  net.alpha = 1;
  heartcontainer.alpha = 1;
  superheartcontainer.alpha = 1;
  grass1.alpha = 1;
  grass2.alpha = 1;
  grass3.alpha = 1;
  grass4.alpha = 1;
  debugon.alpha = 1;
  easytext.alpha = 1;
  mediumtext.alpha = 1;
  hardtext.alpha = 1;
  easy.alpha = 0.5;
  medium.alpha = 0.5;
  hard.alpha = 0.5;
  }
  if (mousePressedOver(easy)) {
    net.velocityY = 8;
    net.y = -10;
    net.x = randomNumber(50,350);
    heartcontainer.velocityY = 2;
    superheartcontainer.velocityY = 4;
    console.log("easy");
  }
  if (mousePressedOver(medium)) {
    net.velocityY = 11;
    net.y = -10;
    net.x = randomNumber(50,350);
    heartcontainer.velocityY = 6;
    superheartcontainer.velocityY = 8;
    console.log("medium");
  }
  if (mousePressedOver(hard)) {
    net.velocityY = 15;
    net.y = -10;
    net.x = randomNumber(50,350);
    heartcontainer.velocityY = 10;
    superheartcontainer.velocityY = 10;
    console.log("hard");
  }
  if (net.isTouching(nettriger)) {
     net.y = -10;
    net.x = randomNumber(50,350);
    score = score + 2;
    console.log(score);
    console.log("NetRespowned");
  }
  if (net.y == 400) {
    net.y = -10;
    net.x = randomNumber(50,350);
    score = score + 2;
    console.log(score);
    console.log("NetRespowned");
  }
}
fill(rgb(5, 220, 0));
var leftedge = createSprite(-50, 200, 100, 400);
leftedge.setAnimation("left");
var rightedge = createSprite(450, 200, 100, 400);
rightedge.setAnimation("right");
drawSprites();
function border() {
  if (head.isTouching(leftedge)) {
    headleftmove = headleftmove + 8;
    headrightmove = headrightmove + 8;
    bodyleftmove = bodyleftmove + 8;
    bodyrightmove = bodyrightmove + 8;
  }
  if (head.isTouching(rightedge)) {
    headleftmove = headleftmove - 8;
    headrightmove = headrightmove - 8;
    bodyleftmove = bodyleftmove - 8;
    bodyrightmove = bodyrightmove - 8;
  }
}


showMobileControls(true, true, true, false);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
