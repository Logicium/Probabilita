var DeMereTrial = function(sides,totalRolls){
    this.sides=sides;
    this.wonInstance=false;
    for(var i=0;i<totalRolls;i++){
        var rollValue = this.roll();
        if(rollValue==6){this.wonInstance=true;break;}
    }
};

DeMereTrial.prototype={
    roll:function(){return  Math.floor(Math.random() * this.sides) + 1}
};


var DeMereProbability=function(){
    this.winnings = 0;
    for(var i=0;i<10000;i++){
        if(new DeMereTrial(6,4).wonInstance==true){
            this.winnings++;
        }
    }
    console.log('DeMere won: '+this.winnings/10000+'%');
};

//new DeMereProbability();

var DeMereStreak=function(){
    this.winnings=0;
    this.trials=[];
    for(var i=0;i<10000;i++){
        var d = new DeMereStreakTrial(6,24);
        if(d.wonStreak==true){
            this.winnings++;
            this.trials.push(d);
        }
    }
    console.log(this.trials);
    console.log('DeMere won: '+this.winnings/10000+'%');
};

var DeMereStreakTrial = function(sides,totalRolls){
    this.rollValues=[];
    this.sides=sides;
    this.wonStreak=false;
    this.wonInstanceA=false;
    this.wonInstanceB=false;
    for(var i=0;i<totalRolls;i++){
        var rollValue = this.roll();
        this.rollValues.push(rollValue);
        if(rollValue==6&&this.wonInstanceA==false){
            this.wonInstanceA=true;
        }
        else if(rollValue==6&&this.wonInstanceA==true){
            this.wonInstanceB=true;
        }
    }
    if(this.wonInstanceA==true&&this.wonInstanceB==true){
        this.wonStreak=true;
    }
};

DeMereStreakTrial.prototype={
    roll:function(){return  Math.floor(Math.random() * this.sides) + 1}
};

DeMereStreak();