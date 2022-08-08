const lodash =require("lodash");
const http= require("http");
const server =http.createServer((req,res)=>{
    if(req.url=="/test-me"){
    const array=["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"];
    const result= lodash.chunk(array,3);
    console.log(result);
    res.end(" every thing is done")
}else if(req.url=="/test-you"){
    const arr=[1,3,5,7,9,11,13,15,17,19];
    const result = lodash.tail(arr);
    console.log(result);
    res.end("second code is proper work");

}else if(req.url=="/test"){
    const newarr=([1,2],[2],[2,4],[6,7]);
    const result=lodash.union([newarr]);
    console.log(newarr);
    res.end("third code is proper work")
}
else if(req.url=="/"){
    const array=([['a', 1], ['b', 2],['c',3]]);
    const result =lodash.fromPairs(array);
    console.log(result);
    res.end("fourth code also work proper");
}



});
server.listen(8000,"127.0.0.1",()=>{
    console.log("server proper runnning...")
});