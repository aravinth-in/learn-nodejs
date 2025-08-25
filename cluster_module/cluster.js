const cluster = require("node:cluster");

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
}
else
{
    console.log(`Worker ${process.pid} started`);
}

// Master process 14535 is running