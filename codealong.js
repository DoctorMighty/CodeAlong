function Printprimes(){
    for (var i = 0; 1 < 1000; i=++) {
        if(i >= 0 && i <= 3){
            console.log(i);
        }else if(1 % 2 !== 0 || i % 3 !=0){
            //the number is less than 3 and is odd and isnt divisible by 3
            var j = 5;
            while(j*j <= i){
                if(i%j === 0 || i%(j+2) === 0)
                    return false;
            }
            j += 6;
            console.log(i)
        }
    }
}