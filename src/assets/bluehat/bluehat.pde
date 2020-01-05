Poofeffect pf;
Titlescreen ts;
Background bg;
Bluehat bh;
Bluehatp2 bhp2;
UI ui;
UIp2 uip2;
Clockg[] cg= new Clockg[5];
Coin[] cn = new Coin[6];
Fish[] fs= new Fish[3];
Saw[] sw= new Saw[2];
Spikedown[] spd= new Spikedown[1];
Spikeup[] spu= new Spikeup[1];
Shield sh;
Shieldp2 shp2;
Rose rs;
Magnet mn;
Heart hr;
boolean w;
boolean a;
boolean s;
boolean d;
boolean i;
boolean k;
boolean j;
boolean l;
boolean z;
int menuset=0;

void setup() {
  size(1280, 720);
  pf=new Poofeffect();
  ts=new Titlescreen();
  bg=new Background();
  bh=new Bluehat();
  bhp2= new Bluehatp2();
  ui=new UI();
  uip2=new UIp2();
  mn=new Magnet();
  sh=new Shield();
  shp2=new Shieldp2();
  hr=new Heart();
  for (int i= 0; i<cn.length; i++) {
    cn[i] = new Coin();
  }
  for (int i= 0; i<cg.length; i++) {
    cg[i] = new Clockg();
  }
  for (int i= 0; i<fs.length; i++) {
    fs[i] = new Fish();
  }
  for (int i= 0; i<sw.length; i++) {
    sw[i] = new Saw();
  }
  for (int i= 0; i<spd.length; i++) {
    spd[i] = new Spikedown();
  }
  for (int i= 0; i<spu.length; i++) {
    spu[i] = new Spikeup();
  }
  rs=new Rose();
}

void draw() {
  background(0);
  if (menuset==0) {
    frameRate(6);
    ts.display();
  }
  pf.display();
  if (pf.poofcountp1==6 && ts.bluehatp2x<1600) {
    menuset=1;
  }
  if (pf.poofcountp2==6 && ts.bluehatp2x==1600) {
    bhp2.dead=false; 
    bhp2.x=50;
    bhp2.y=460;
    menuset=2;
  }
  if (menuset==1 || menuset==2) {
    frameRate(60);
    bg.display();
    ui.display();
    pf.poofEnemy();
    for (int i=0; i<cn.length; i++) {
      cn[i].display();
      if (bh.x+69>=cn[i].x && bh.x<=cn[i].x && bh.y<=cn[i].y && bh.y+96>=cn[i].y && !bh.dead) {
        cn[i].touchp1();
      }
      if (bhp2.x+69>=cn[i].x && bhp2.x<=cn[i].x && bhp2.y<=cn[i].y && bhp2.y+96>=cn[i].y && !bhp2.dead) {
        cn[i].touchp2();
      }
    }
    for (int i=0; i<cg.length; i++) {
      cg[i].display();
      if (bh.x+69>=cg[i].x && bh.x<=cg[i].x && bh.y<=cg[i].y && bh.y+96>=cg[i].y && !bh.dead) {
        cg[i].touchp1();
      }
      if (bhp2.x+69>=cg[i].x && bhp2.x<=cg[i].x && bhp2.y<=cg[i].y && bhp2.y+96>=cg[i].y && !bhp2.dead) {
        cg[i].touchp2();
      }
    }
    for (int i=0; i<fs.length; i++) {
      fs[i].display();
      if (bh.x+69>=fs[i].x && bh.x<=fs[i].x+96 && bh.y<=fs[i].y+77 && bh.y+96>=fs[i].y && !bh.dead) { 
        fs[i].touchp1();
      }
      if (bhp2.x+69>=fs[i].x && bhp2.x<=fs[i].x+96 && bhp2.y<=fs[i].y+77 && bhp2.y+96>=fs[i].y && !bhp2.dead) { 
        fs[i].touchp2();
      }
    }
    for (int i=0; i<sw.length; i++) {
      sw[i].display();
      if (bh.x+69>=sw[i].x && bh.x<=sw[i].x+96 && bh.y<=sw[i].y+67 && bh.y+96>=sw[i].y && !bh.dead) { 
        sw[i].touchp1();
      }
      if (bhp2.x+69>=sw[i].x && bhp2.x<=sw[i].x+96 && bhp2.y<=sw[i].y+67 && bhp2.y+96>=sw[i].y && !bhp2.dead) { 
        sw[i].touchp2();
      }
    }
    for (int i=0; i<spd.length; i++) {
      spd[i].display();
      if (bh.x+69>=spd[i].x && bh.x<=spd[i].x+96 && bh.y<=spd[i].y+42 && bh.y+96>=spd[i].y && !bh.dead) { 
        spd[i].touchp1();
      }
      if (bhp2.x+69>=spd[i].x && bhp2.x<=spd[i].x+96 && bhp2.y<=spd[i].y+42 && bhp2.y+96>=spd[i].y && !bhp2.dead) { 
        spd[i].touchp2();
      }
    }
    for (int i=0; i<spu.length; i++) {
      spu[i].display();
      if (bh.x+69>=spu[i].x && bh.x<=spu[i].x+96 && bh.y<=spu[i].y+42 && bh.y+96>=spu[i].y && !bh.dead) { 
        spu[i].touchp1();
      }
      if (bhp2.x+69>=spu[i].x && bhp2.x<=spu[i].x+96 && bhp2.y<=spu[i].y+42 && bhp2.y+96>=spu[i].y && !bhp2.dead) { 
        spu[i].touchp2();
      }
    }
    rs.display();
    if (bh.x+69>=rs.x && bh.x<=rs.x+96 && bh.y<=rs.y+77 && bh.y+96>=rs.y && !bh.dead) {
      rs.touchp1();
    }
    if (bhp2.x+69>=rs.x && bhp2.x<=rs.x+96 && bhp2.y<=rs.y+77 && bhp2.y+96>=rs.y && !bhp2.dead) {
      rs.touchp2();
    }
    mn.display();
    if (bh.x+69>=mn.x && bh.x<=mn.x+96 && bh.y<=mn.y+37 && bh.y+96>=mn.y && !bh.dead) {
      mn.touchp1();
    }
    if (bhp2.x+69>=mn.x && bhp2.x<=mn.x+96 && bhp2.y<=mn.y+37 && bhp2.y+96>=mn.y && !bhp2.dead) {
      mn.touchp2();
    }
    hr.display();
    if (bh.x+69>=hr.x && bh.x<=hr.x+96 && bh.y<=hr.y+37 && bh.y+96>=hr.y && !bh.dead) {
      hr.touchp1();
    }
    if (bhp2.x+69>=hr.x && bhp2.x<=hr.x+96 && bhp2.y<=hr.y+37 && bhp2.y+96>=hr.y && !bhp2.dead) {
      hr.touchp2();
    }
    bh.display();
    sh.display();
  }
  if (menuset==1) {
    cg[3].x=3000;
    cg[3].y=3000;
    cg[4].x=3000;
    cg[4].y=3000;
  }
  if (menuset==2) {
    uip2.display();
    bhp2.display();
    shp2.display();
  }
if (bh.dead && z || bhp2.dead && z) {
    for (int i=0; i<cn.length; i++) {
      cn[i].x=random(1400, 1700);
      cn[i].y=random(39, 681);
    }
    for (int i=0; i<cg.length; i++) {
      cg[i].x=random(1400, 1700);
      cg[i].y=random(42, 678);
    }
    for (int i=0; i<fs.length; i++) { 
      fs[i].x=random(1400, 1700);
      fs[i].wavemiddle=random(50, 670);
      fs[i].waveheight=random(15, 130);
    }
    for (int i=0; i<sw.length; i++) { 
      sw[i].x=random(2100, 3700);
      sw[i].y=random(39, 681);
    }
    for (int i=0; i<spd.length; i++) { 
      spd[i].x=random(2100, 3500);
    }
    for (int i=0; i<spu.length; i++) { 
      spu[i].x=random(2100, 3500);
    }
    rs.x=random(3000, 3700);
    rs.y=random(39, 681);
    mn.x=random(4500, 6000);
    mn.y=random(42, 678);
    mn.touchedp1=false;
    mn.touchedp2=false;
    hr.x=-500;
    ui.framedelay=0;
    uip2.framedelay=0;
    ui.score=0;
    ui.time=20;
    uip2.score=0;
    uip2.time=20;
    ts.bluehatx=850;
    ts.bluehatp2x=750;
    bh.x=50;
    bh.y=360;
    bhp2.x=-200;
    bhp2.y=-200;
    bh.hearts=4;
    bhp2.hearts=4;
    bh.dead=false;
    bhp2.dead=false;
    bh.angelcount=0;
    bhp2.angelcount=0;  
    bh.angelcount=0;
    bhp2.angelcount=0;
    ui.player1wins=false;
    uip2.player2wins=false;
    pf.x=-500;
    sh.shieldon = false;
    shp2.shieldon = false;
    menuset=0;
  }
}

void keyPressed() {
  if (key=='w' || key=='W') {
    w=true;
  } else if (key=='a' || key=='A') {
    a=true;
  } else if (key=='s' || key=='S') {
    s=true;
  } else if (key=='d' || key=='D') {
    d=true;
  } else if (key=='i' || key=='I') {
    i=true;
  } else if (key=='k' || key=='K') {
    k=true;
  } else if (key=='j' || key=='J') {
    j=true;
  } else if (key=='l' || key=='L') {
    l=true;
  } else if (key=='z' || key=='Z') {
    z=true;
  }
}

void keyReleased() {
  if (key=='w'|| key=='W') {
    w=false;
  } else if (key=='s' || key=='S') {
    s=false;
  } else if (key=='a' || key=='A') {
    a=false;
  } else if (key=='d' || key=='D') {
    d=false;
  } else if (key=='i' || key=='I') {
    i=false;
  } else if (key=='k' || key=='K') {
    k=false;
  } else if (key=='j' || key=='J') {
    j=false;
  } else if (key=='l' || key=='L') {
    l=false;
  } else if (key=='z' || key=='Z') {
    z=false;
  }
}

class Background {
  int bgx=0;
  int bgx2=0;
  int bgx3=0;
  int scroll=6;
  int scroll2=4;
  int scroll3=3;
  PImage[] forest= new PImage[4];

  Background() {
    for (int i=0; i<forest.length; i++) { 
      forest[i]= loadImage("/assets/bluehat/background/forest_"+i+".png");
    }
  }
  
  void display() {
    image(forest[0], 0, 0);
    image(forest[1], bgx, 0);
    image(forest[1], bgx+1280, 0);
    image(forest[2], bgx2, 0);
    image(forest[2], bgx2+1280, 0);
    image(forest[3], bgx3, 0);
    image(forest[3], bgx3+1280, 0);
    bgx=bgx-scroll;
    if (bgx<=-1280) {
      bgx=0;
    }
    bgx2=bgx2-scroll2;
    if (bgx2<=-1280) {
      bgx2=0;
    }
    bgx3=bgx3-scroll3;
    if (bgx3<=-1280) {
      bgx3=0;
    }
    if (a) {
      scroll=4;
      scroll2=2;
      scroll3=1;
    }
    if (d) {
      scroll=6;
      scroll2=4;
      scroll3=3;
    }
  }
}

class Bluehat {
  PImage[] bluehat= new PImage[8]; 
  PImage[] angel= new PImage[8];
  PImage flyup;
  PImage flydown;
  PImage flyupleft;
  PImage flydownleft;
  int x=50;
  int y=360;
  int bluehatcount=0;
  int angelcount=0;
  int framedelay=0;
  int hearts=4;
  boolean dead=false; 
  Bluehat() {
    for (int i=0; i<bluehat.length; i++) {
      bluehat[i]= loadImage("/assets/bluehat/bluehat/fly_"+i+".png");
    }
    for (int i=0; i<angel.length; i++) {
      angel[i]= loadImage("/assets/bluehat/bluehat/angel_"+i+".png");
    }
    flydown=loadImage("/assets/bluehat/bluehat/fly_down.png");
    flyup=loadImage("/assets/bluehat/bluehat/fly_up.png");
    flyupleft=loadImage("/assets/bluehat/bluehat/fly_upleft.png");
    flydownleft=loadImage("/assets/bluehat/bluehat/fly_downleft.png");
  }
  
  void display() {
    if (dead) {
      image(angel[angelcount], x, y);
    } else {
      if (!s&!w || s&w || y==0 || y==624) { 
        image(bluehat[bluehatcount], x, y);
      }
    }
    framedelay=framedelay+1;  
    if (framedelay>=7.5) {
      bluehatcount=bluehatcount+1;
      if (dead) { 
        angelcount=angelcount+1;
      }
      framedelay=0;
    }

    if (bluehatcount==8) {
      bluehatcount=0;
      angelcount=0;
    }

    if (x<=0) {
      x=0;
    }
    if (x>=1184) {
      x=1184;
    }
    if (y<=0) {
      y=0;
    }
    if (y>=624) {
      y=624;
    }
    if (a&!d) {
      x=x-10;
    }
    if (d&!a) {
      x=x+10;
    }
    if (w&!s&!a&y>0) {
      if (!dead) {
        image(flyup, x, y);
        y=y-8;
      } else {
        y=y-8;
      }
    }
    if (a&!s&w&y>0) {
      if (!dead) {
        image(flyupleft, x, y);
        y=y-6;
      } else {
        y=y-6;
      }
    }
    if (s&!w&!a&y<624) {
      if (!dead) {
        image(flydown, x, y);
        y=y+13;
      } else {
        y=y+13;
      }
    }
    if (a&s&!w&y<624) {
      if (!dead) {
        image(flydownleft, x, y);
        y=y+11;
      } else {
        y=y+11;
      }
    }
    if (hearts==0 || ui.time==0) {
      dead=true;
    }
  }
}

class Bluehatp2 {
  PImage[] bluehatp2= new PImage[8]; 
  PImage[] angel= new PImage[8];
  PImage flyup;
  PImage flydown;
  PImage flyupleft;
  PImage flydownleft;
  int x=-200;
  int y=-200;
  int bluehatp2count=0; 
  int angelcount=0;
  int framedelay=0;  
  int hearts=4;
  boolean dead=false; 
  Bluehatp2() {
    for (int i=0; i<bluehatp2.length; i++) {
      bluehatp2[i]= loadImage("/assets/bluehat/bluehat/flyp2_"+i+".png");
    }
    for (int i=0; i<angel.length; i++) {
      angel[i]= loadImage("/assets/bluehat/bluehat/angel_"+i+".png");
    }
    flydown=loadImage("/assets/bluehat/bluehat/flyp2_down.png"); 
    flyup=loadImage("/assets/bluehat/bluehat/flyp2_up.png");
    flyupleft=loadImage("/assets/bluehat/bluehat/flyp2_upleft.png");
    flydownleft=loadImage("/assets/bluehat/bluehat/flyp2_downleft.png");
  }
  
  void display() {
    if (dead) {
      image(angel[angelcount], x, y);
    } else {
      if (!k&!i || k&i || y==0 || y==624) {
        image(bluehatp2[bluehatp2count], x, y);
      }
    }
    framedelay=framedelay+1;  
    if (framedelay>=7.5) {
      bluehatp2count=bluehatp2count+1;
      if (dead) { 
        angelcount=angelcount+1;
      }
      framedelay=0;
    }

    if (bluehatp2count==8) {
      bluehatp2count=0;
      angelcount=0;
    }

    if (x<=0) {
      x=0;
    }
    if (x>=1184) {
      x=1184;
    }
    if (y<=0) {
      y=0;
    }
    if (y>=624) {
      y=624;
    }
    if (j&!l) {
      x=x-10;
    }
    if (l&!j) {
      x=x+10;
    }
    if (i&!k&!j&y>0) { 
      if (!dead) { 
        image(flyup, x, y);
        y=y-8;
      } else {
        y=y-8;
      }
    }
    if (j&!k&i&y>0) {
      if (!dead) {
        image(flyupleft, x, y);
        y=y-6;
      } else {
        y=y-6;
      }
    }
    if (k&!i&!j&y<624) {
      if (!dead) {
        image(flydown, x, y);
        y=y+13;
      } else {
        y=y+13;
      }
    }
    if (j&k&y<624) {
      if (!dead) {
        image(flydownleft, x, y);
        y=y+11;
      } else {
        y=y+11;
      }
    }
    if (hearts==0 || uip2.time==0) {
      dead=true;
    }
  }
}

class UI {
  PImage clockg;
  PImage heart;
  PFont uifont;
  int time=21;
  int score=0;
  int framedelay=60;
  int framedelay2=0;
  int clockgcount=0;
  boolean player1wins=false;
  UI() {
    uifont = createFont("Pixel-Noir-Skinny-Caps",32);
    clockg= loadImage("/assets/bluehat/items/clockg_6.png");
    heart= loadImage("/assets/bluehat/items/heart_0.png");
  }

  void display() {
    textFont(uifont);
    text(time, 1185, 50);
    text("P1: "+score+"", 1, 50);
    if (bh.dead) {
      text("Game Over!", 660, 49);
      text("Press Z to return to the main menu", 370, 715);
    }
    if (menuset==2 && !bh.dead && bhp2.dead) {
      player1wins=true;
    }
    if (player1wins) {
      text("Player 1 wins!", 440, 360);
    }
    framedelay=framedelay+1;
    if (framedelay>=60 && !bh.dead) { 
      score=score+5;
      time=time-1;
      framedelay=0;
    }
    if (time<=0) { 
      time=0;
    }
    image(clockg, 1147, 0);
    if (bh.hearts>=1) {
      image(heart, 930, 15);
      if (bh.hearts>=2) {
        image(heart, 980, 15);
        if (bh.hearts>=3) {
          image(heart, 1030, 15);
          if (bh.hearts>=4) {
            image(heart, 1080, 15);
          }
        }
      }
    }
  }

}

class UIp2 {
  PImage clockg;
  PImage heart;
  PFont uifont;
  int time=21;
  int score=0;
  int framedelay=60;
  int framedelay2=0;
  int clockgcount=0;
  boolean player2wins=false;

  UIp2() {
    heart= loadImage("/assets/bluehat/items/heart_0.png");
  }

  void display() {
    textFont(ui.uifont);
    text(time, 1185, 103);
    text("P2: "+score+"", 1, 102);
    if (bhp2.dead) {
      text("Game Over!", 660, 100);
      text("Press Z to return to the main menu", 370, 715);
    }
    if (menuset==2 && bh.dead && !bhp2.dead) {
      player2wins=true;
    }
    if (player2wins) {
      text("Player 2 wins!", 440, 360);
    }
    framedelay=framedelay+1;
    if (framedelay>=60 && !bhp2.dead) { 
      score=score+5;
      time=time-1; 
      framedelay=0;
    }
    if (time<=0) { 
      time=0;
    }
    if (bhp2.hearts>=1) {
      image(heart, 930, 50);
      if (bhp2.hearts>=2) {
        image(heart, 980, 50);
        if (bhp2.hearts>=3) {
          image(heart, 1030, 50);
          if (bhp2.hearts>=4) {
            image(heart, 1080, 50);
          }
        }
      }
    }
  }
}

class Shield {
  int shieldcount = 0;
  int framedelay = 0;
  int threshold;
  boolean shieldon;
  PImage[] Shield= new PImage[12];
  int shieldTimer = 0;

  Shield() {
    for (int i=0; i<Shield.length; i++) { 
      Shield[i]= loadImage("/assets/bluehat/items/shield_"+i+".png");
    }
  }

  void display() {
    if (bh.hearts == 0) {
      shieldon = false;
    }
    if (shieldon == true) {
      shieldTimer = shieldTimer +1;
      if (shieldTimer >= 50) {
        shieldon = false;
        shieldTimer = 0;
      }
    }

    if (shieldcount==11) {
      shieldcount=0;
    }
    if (shieldon) {
      framedelay=framedelay+1;  
      if (framedelay>=3) { 
        shieldcount=shieldcount+1;
        framedelay=0;
      }
      image(Shield[shieldcount], bh.x+5, bh.y);
      threshold = bh.hearts-1;
      if (bh.hearts == threshold) {
        shieldon = false;
      }
    }
  }
}

class Shieldp2 {
  int shieldcount = 0;
  int framedelay = 0;
  int threshold;
  boolean shieldon;
  PImage[] Shield= new PImage[12];
  int shieldTimer = 0;

  Shieldp2() {
    for (int i=0; i<Shield.length; i++) { 
      Shield[i]= loadImage("/assets/bluehat/items/shield_"+i+".png");
    }
  }

  void display() {
    if (bhp2.hearts == 0) {
      shieldon = false;
    }
    if (shieldon == true) {
      shieldTimer = shieldTimer +1;
      if (shieldTimer >= 50) {
        shieldon = false;
        shieldTimer = 0;
      }
    }

    if (shieldcount==11) {
      shieldcount=0;
    }
    if (shieldon) {
      framedelay=framedelay+1;  
      if (framedelay>=3) { 
        shieldcount=shieldcount+1;
        framedelay=0;
      }
      image(Shield[shieldcount], bhp2.x+5, bhp2.y);
      threshold = bhp2.hearts-1;
      if (bhp2.hearts == threshold) {
        shieldon = false;
      }
    }
  }
}

class Clockg {
  PImage[] clockg= new PImage[10];
  int framedelay=0;
  float x=-100;
  float y;
  float speed=3;
  int clockgcount=0;
  int effect=3;
  Clockg() {
    for (int i=0; i<clockg.length; i++) {
      clockg[i]= loadImage("/assets/bluehat/items/clockg_"+i+".png");
    }
  }

  void display() {
    framedelay=framedelay+1;
    if (framedelay>=7.5) { 
      clockgcount=clockgcount+1;
      framedelay=0;
    }
    if (clockgcount==10) { 
      clockgcount=0;
    }
    image(clockg[clockgcount], x, y);
    x=x-speed; 
    if (x<=-50) {
      x=random(1400, 1700);
      y=random(42, 678);
      speed=random(2, 5);
    }
  }
  
  void touchp1() {
    ui.time=ui.time+effect;
    x=-100;
    y=-100;
  }
  
  void touchp2() {
    uip2.time=uip2.time+effect;
    x=-100;
    y=-100;
  }
}

class Coin {
  PImage[] coin= new PImage[8];
  int framedelay=0;
  float x;
  float y;
  float speed=3;
  int coincount=0;
  int effect=15;
  Coin() {
    for (int i=0; i<coin.length; i++) {
      coin[i]= loadImage("/assets/bluehat/items/c"+i+".png");
    }
  }

  void display() {
    framedelay=framedelay+1;
    if (framedelay>=10) { 
      coincount=coincount+1;
      framedelay=0;
    }
    if (coincount==8) { 
      coincount=0;
    }
    image(coin[coincount], x, y);
    x=x-speed;
    if (x<=-5) {
      x=random(1400, 1700);
      y=random(39, 681);
      speed=random(3, 7);
    }
  }
  void touchp1() {
    ui.score=ui.score+effect;
    x=-100;
    y=-100;
  }
  
  void touchp2() {
    uip2.score=uip2.score+effect;
    x=-100;
    y=-100;
  }
}

class Fish {
  PImage[] fish= new PImage[4];
  int framedelay=0;
  float x=-100;
  float y;
  float speed=3;
  int fishcount=0;
  float wavemiddle;
  float waveheight;
  Fish() {
    for (int i=0; i<fish.length; i++) {
      fish[i]= loadImage("/assets/bluehat/enemies/fish_"+i+".png");
    }
  }

  void display() {
    framedelay=framedelay+1;
    if (framedelay>=10) { 
      fishcount=fishcount+1;
      framedelay=0;
    }
    if (fishcount==4) { 
      fishcount=0;
    }
    image(fish[fishcount], x, y);
    x=x-speed;
    y=wavemiddle+waveheight*sin(radians(x));
    if (x<=-77) {
      x=random(1400, 1700);
      wavemiddle=random(50, 670);
      waveheight=random(15, 130);
      speed=random(2, 5);
    }
  }

  void touchp1() {
     pf.x = x;
     pf.y = y;
     pf.poofswitchenemy = true;
     if (sh.shieldon==false) {
      bh.hearts=bh.hearts-1;
      sh.shieldon = true;
      x=-100;
      y=-100;
    } else {
      x=-100;
      y=-100;
    }
  }
  
  void touchp2() {
     pf.x = x;
     pf.y = y;
     pf.poofswitchenemy = true;
     if (shp2.shieldon==false) {
      bhp2.hearts=bhp2.hearts-1;
      shp2.shieldon = true;
      x=-100;
      y=-100;
    } else {
      x=-100;
      y=-100;
    }
}
}

class Magnet {
  PImage magnet;
  float x=-100;
  float y;
  float speed=7;
  int effectcount=0;
  boolean touchedp1=false;
  boolean touchedp2=false;
  Magnet() {
    magnet= loadImage("/assets/bluehat/items/magnet_0.png");
  }
  void touchp1() {
    touchedp1=true;
    x=-100;
  }

  void touchp2() { 
    touchedp2=true;
    x=-100;
  }
  
  void display() {
    image(magnet, x, y);
    x=x-speed; 
    if (x<=-50) { 
      x=random(9500, 15000);
      y=random(42, 678);
      speed=random(6, 9);
    }
    if (touchedp1 || touchedp2) {
      effectcount=effectcount+1;
     if (effectcount < 600){
      for (int i=0; i<6; i++) {
        if (touchedp1) {
          cn[i].y=bh.y;
        } else {
          cn[i].y=bhp2.y;}}}
        else{
        effectcount = 0;
        touchedp1=false;
        touchedp2=false;
        }
      }
 }
  }

class Rose {
  PImage rose;
  float x=-100;
  float y;
  float speed=3;
  int rosecount=0;
  Rose() {
    rose= loadImage("/assets/bluehat/enemies/rose_0.png");
  }

  void display() {
    image(rose, x, y);
    x=x-speed;
    if (x<=-150) {
      x=random(3000, 3700);
      y=random(39, 681);
      speed=random(2, 4);
    }
  }
  
  void touchp1() {
     pf.x = x;
     pf.y = y;
     pf.poofswitchenemy = true;
     if (sh.shieldon==false) {
      bh.hearts=bh.hearts-1;
      sh.shieldon = true;
      x=-100;
      y=-100;
    } else {
      x=-100;
      y=-100;
    }
  }
  
  void touchp2() {
     pf.x = x;
     pf.y = y;
     pf.poofswitchenemy = true;
     if (shp2.shieldon==false) {
      bhp2.hearts=bhp2.hearts-1;
      shp2.shieldon = true;
      x=-100;
      y=-100;
    } else {
      x=-100;
      y=-100;
    }
}
}

class Saw {
  PImage[] saw= new PImage[4];
  int framedelay=0;
  float x=-100;
  float y;
  float speed=7;
  int sawcount=0;
  Saw() {
    for (int i=0; i<saw.length; i++) {
      saw[i]= loadImage("/assets/bluehat/enemies/saw_"+i+".png");
    }
  }

  void display() {
    framedelay=framedelay+1;
    if (framedelay>=25) { 
      sawcount=sawcount+1;
      framedelay=0;
    }
    if (sawcount==3) { 
      sawcount=0;
    }
    image(saw[sawcount], x, y);
    x=x-speed;
    if (x<=-67) {
      x=random(2100, 3700);
      y=random(39, 681);
      speed=random(6, 10);
    }
  }
  
  void touchp1() {
     if (sh.shieldon==false) {
      bh.hearts=bh.hearts-1;
      sh.shieldon = true;
  }
  }
  
  void touchp2() {
     if (shp2.shieldon==false) {
      bhp2.hearts=bhp2.hearts-1;
      shp2.shieldon = true;
}
}
}

class Spikedown {
  PImage[] spikedown= new PImage[10];
  int framedelay=0;
  float x=-100;
  float y;
  float speed=5;
  int spikedowncount=0;
  Spikedown() {
    for (int i=0; i<spikedown.length; i++) {
      spikedown[i]= loadImage("/assets/bluehat/enemies/spikedown_"+i+".png");
    }
  }

  void display() {
    framedelay=framedelay+1;
    if (framedelay>=6) { 
      spikedowncount=spikedowncount+1;
      framedelay=0;
    }
    if (spikedowncount==10) { 
      spikedowncount=0;
    }
    image(spikedown[spikedowncount], x, y);
    x=x-speed;
    if (x<=-92) {
      x=random(2100, 3500);
      y=678;
    }
  }
  
  void touchp1() {
     if (sh.shieldon==false) {
      bh.hearts=bh.hearts-1;
      sh.shieldon = true;
  }
  }
  void touchp2() { 
     if (shp2.shieldon==false) {
      bhp2.hearts=bhp2.hearts-1;
      shp2.shieldon = true;
}
}
}

class Spikeup {
  PImage[] spikeup= new PImage[10];
  int framedelay=0;
  float x=-100;
  float y;
  float speed=5;
  int spikeupcount=0;
  Spikeup() {
    for (int i=0; i<spikeup.length; i++) {
      spikeup[i]= loadImage("/assets/bluehat/enemies/spikeup_"+i+".png");
    }
  }

  void display() {
    framedelay=framedelay+1;
    if (framedelay>=6) { 
      spikeupcount=spikeupcount+1;
      framedelay=0;
    }
    if (spikeupcount==10) { 
      spikeupcount=0;
    }
    image(spikeup[spikeupcount], x, y);
    x=x-speed;
    if (x<=-92) {
      x=random(2100, 3500);
    }
  }
  
  void touchp1() { 
     if (sh.shieldon==false) {
      bh.hearts=bh.hearts-1;
      sh.shieldon = true;
  }
  }
  
  void touchp2() { 
     if (shp2.shieldon==false) {
      bhp2.hearts=bhp2.hearts-1;
      shp2.shieldon = true;
}
}
}

class Poofeffect {
  PImage[] poof= new PImage[6];
  int poofcountp1=0;
  int poofcountp2=0;
  int poofcountenemy=0;
  int framedelay = 0;
  boolean poofswitchp1 = false;
  boolean poofswitchp2 = false;
  boolean poofswitchenemy = false;
  float x = -500;
  float y = -500;
  Poofeffect(){
  for (int i=0; i<poof.length; i++) {
      poof[i]= loadImage("/assets/bluehat/effects/poof_"+i+".png");
  }
  }
  void display() {
    if (poofswitchp1) {
      if (poofcountp1==6) {
        poofswitchp1 = false;
        poofcountp1=0;
      } else {
      image(poof[poofcountp1], 850, 591);
      poofcountp1=poofcountp1+1;
      }
    }
    if (poofswitchp2) {
      if (poofcountp2==6) {
        poofswitchp2 = false;
        poofcountp2=0;
      } else {
      image(poof[poofcountp2], 750, 591);
      poofcountp2=poofcountp2+1;
      }
    }
  }
    void poofEnemy(){
      if (poofswitchenemy){
      framedelay=framedelay+1;
      image(poof[poofcountenemy], x, y - 100);
    if (framedelay>=6) { 
      poofcountenemy=poofcountenemy+1;
      framedelay=0;
    }
    if (poofcountenemy == 6){
        poofcountenemy = 0;
        poofswitchenemy = false;
      }
      }
    }
  }




class Titlescreen {
  int bluehatcount=0;
  int oldmancount=0;
  int catcount=0;
  int bluehatx=850;
  int bluehatp2x=750;
  PImage[] bluehat= new PImage[5];
  PImage[] bluehatp2= new PImage[5];
  PImage[] oldman= new PImage[5];
  PImage[] cat= new PImage[13];
  PImage[] forest= new PImage[2];
  PImage house;
  PImage arrow;
  PImage menu;
  PImage title;
  PImage controls;
  int arrowposy=321;
  Titlescreen() {
    house=loadImage("/assets/bluehat/titlescreen/house.png");
    arrow=loadImage("/assets/bluehat/titlescreen/arrow.png");
    menu=loadImage("/assets/bluehat/titlescreen/menu.png");
    title=loadImage("/assets/bluehat/titlescreen/title.png");
    controls=loadImage("/assets/bluehat/titlescreen/controls.png");
    for (int i=0; i<bluehat.length; i++) {
      bluehat[i]= loadImage("/assets/bluehat/titlescreen/idle_"+i+".png");
    }
    for (int i=0; i<bluehatp2.length; i++) {
      bluehatp2[i]= loadImage("/assets/bluehat/titlescreen/idlep2_"+i+".png");
    }
    for (int i=0; i<oldman.length; i++) {
      oldman[i]= loadImage("/assets/bluehat/titlescreen/oldman_"+i+".png");
    }
    for (int i=0; i<cat.length; i++) {
      cat[i]= loadImage("/assets/bluehat/titlescreen/cat_"+i+".png");
    }
    for (int i=0; i<forest.length; i++) {
      forest[i]= loadImage("/assets/bluehat/titlescreen/forest_"+i+".png");
    }
  }

  void display() {
    image(forest[0], 0, 0);
    image(forest[1], 0, 0);
    image(house, 0, 270);
    image(bluehat[bluehatcount], bluehatx, 591);
    image(bluehatp2[bluehatcount], bluehatp2x, 591);
    image(oldman[oldmancount], 950, 598);
    image(cat[catcount], 1058, 657);
    image(arrow, 554, arrowposy);
    image(menu, 619, 321);
    image(title, 670, 116);
    image(controls, 65, 0);	
    textFont(ui.uifont);
	  text("Press enter to start", 0, 700);
    bluehatcount=bluehatcount+1;
    if (bluehatcount==5) { 
      bluehatcount=0;
    }
    oldmancount=oldmancount+1;
    if (oldmancount==5) { 
      oldmancount=0;
    }
    catcount=catcount+1;
    if (catcount==13) { 
      catcount=0;
    }
    if (arrowposy==321 & key==ENTER) {
      bluehatx=1600;
    }
    if (arrowposy==391 & key==ENTER) {
      bluehatx=1600;
      bluehatp2x=1600;
    }
    if (bluehatx==1600) {
      pf.poofswitchp1 = true;
    }
    if (bluehatp2x==1600) {
      pf.poofswitchp2 = true;
    }
    if (w) {
      if (arrowposy>360) {
        arrowposy=arrowposy-70;
      }
    }
    if (s) {
      if (arrowposy<360) {
        arrowposy=arrowposy+70;
      }
    }
  }
}

class Heart {
  PImage heart;
  float x=-500;
  float y;
  float speed=6;
  Heart() {
    heart = loadImage("/assets/bluehat/items/heart_0.png");
  }

  void display() {
    image(heart, x, y);
    x=x-speed;
    if (x<=-50 & ((menuset==1 & bh.hearts < 4) | (menuset==2 & bh.hearts < 4 & bhp2.hearts < 4))) {
      x=random(15000, 18000);
      y=random(100, 600);
    }
  }

  void touchp1() {
    bh.hearts += 1;
    x=-50;
  }
  
  void touchp2() {
    bhp2.hearts += 1;
    x=-50;
  }
}
