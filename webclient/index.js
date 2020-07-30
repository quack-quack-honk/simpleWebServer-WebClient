const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter IP adress : ", function (IP) {     
    //rl.question("Enter port : ", function (port) {    //this is hardcoded for now to 6969 on the server if you wanna change it feel free
        rl.question("Enter data to send : ", function (word) {
            var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest()
            xmlhttp.open("POST", "http://" + IP + ":" + 6969);
            xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xmlhttp.send(word);
            rl.close();
        });
    //});
});