

function economicRate(matches,deliveries)
{
    const array1=[]
    const obj1={};
    const array2=[];
    const array3=[];
    for(let match of matches)
    {
        let season=match.season;
        if(season==2015)
        {
            array1.push(match.id)
        }
    }
    for(let delivery of deliveries)
    {
        const d1=delivery.match_id;
        for(var i in array1)
        {
            if(d1==array1[i])
            {
                let bowler=delivery["bowler"]
                let totalruns=parseInt(delivery["total_runs"]);
                if(obj1[bowler])
                {
                    obj1[bowler]["totalruns"]+=totalruns;
                    if(delivery.ball==6)
                    {
                        obj1[bowler]["overs"]+=1;
                    }
                }
                else
                {
                    obj1[bowler]={}
                    obj1[bowler]["totalruns"]=totalruns;
                    obj1[bowler]["overs"]=0;
                }
            }
        }
    }
    for(let prop in obj1)
    {
        var key=obj1[prop]["totalruns"]/obj1[prop]["overs"];
        array2.push([prop,key]);
    }
    array2.sort(function(a,b){return a[1]-b[1]});
    for(var i=0;i<12;i++)
    {
        array3.push(array2[i]);
    }
    return array3;
}
module.exports= economicRate;