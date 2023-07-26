var app = {

};
app.countdown= function(settings, callback){
    var interval, 
        counter =0,
        //Start and end points
        startAt=0,
        endAt=0;
        if(settings===undefined){
            console.log('please provide settings');
        }
        else{
            if(settings.startAt === undefined || settings.endAt===undefined){
                console.log('Start end end values are required');
            }
            else{
                startAt = parseInt(settings.startAt, 10);
                endAt =parseInt(settings.endAt, 10);

                if(!isNaN(startAt) && !isNaN(endAt)){
                    //countdown
                    counter= startAt;
                    interval =setInterval(function(){
                        //Is the counter at the end?
                        if(counter < endAt){
                            //reseting the values
                            counter=0;
                            startAt=0;
                            endAt=0;

                           if(callback !== undefined){
                            callback();
                           }
                            clearInterval(interval);
                        }
                        else{
                            console.log(counter);
                        }
                        counter =counter-1;
                    }, 1000);
                };

            }
            

        }


};