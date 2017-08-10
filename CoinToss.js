var CoinTossEpsilon = function(n){
    this.heads = 0;
    this.proportions=[];
    this.epsilonSuccess=[];
    this.indexes=[];
    this.totalEpsionSuccess=0;
    for (var i = 0; i < n; i++) {
        var value = Math.floor(Math.random() * 2);
        if(value==1){this.heads++}
        this.proportions.push((this.heads/(i+1)));
        this.indexes.push(i);
        if((this.heads/(i+1))-(1/2)<=0.1&&(this.heads/(i+1))-(1/2)>=-0.1){
            this.totalEpsionSuccess++;
            this.epsilonSuccess.push(this.totalEpsionSuccess/(i+1));
        }
        else{this.epsilonSuccess.push(0)}
        if (i % 100 == 0) {
            //console.log('Head proportion: '+this.heads/i+'%');
        }
    }
    console.log('Total Epsilon Success: '+this.totalEpsionSuccess/n+'%');
};

