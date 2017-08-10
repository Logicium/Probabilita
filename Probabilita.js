var Outcome =function(value){
    this.value=value;
    this.units=[];
};

var Outcomes = function(outcomeList){
    this.outcomeValueList = outcomeList;
    this.OutcomesList = [];
    for(var z=0; z<this.outcomeValueList.length; z++){
        var outcomeValue = this.outcomeValueList[z];
        OutcomesList[z] = new Outcome(value);
        var assignmentRange = outcomeValue * this.greatestDenominator();
        for(var y=0;y<assignmentRange;y++){
            OutcomesList[z].units.push(new PossibilityUnit());
        }
    }
};

Outcomes.prototype = {

    assignProbability:function(){
      for(var z=0; z<this.outcomeValueList.length; z++){
          var outcomeValue = this.outcomeValueList[z];
          var assignmentRange = outcomeValue * this.greatestDenominator();
          for(var y=0;y<assignmentRange;y++){

          }
      }
    },

    greatestDenominator:function(){
        denominatorList = [];
        for(var i=0; i<this.outcomeValueList.length; i++){
            var n = parseInt(this.outcomeValueList[i] * 10);
            denominatorList.push(n);
        }
        var max = Math.max.apply(null, denominatorList);
        return max;
    }
};

var PossibilityUnit=function(){

};

var PossibilityUnits = function(unitPopulationSize){
    var possibilityUnits = [];

    for(var i=0;i<unitPopulationSize;i++){

    }


};


