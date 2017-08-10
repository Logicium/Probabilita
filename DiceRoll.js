/**
 * Created by kithomas on 10/27/2016.
 */

//var o = new Outcomes([(1/2),(1/6),(1/3)]);

var DiceRoll = function(sides){
    this.sides = sides;
};

DiceRoll.prototype={
    roll:function(){return  Math.floor(Math.random() * this.sides) + 1}
};