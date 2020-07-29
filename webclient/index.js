const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//rl.question("Enter IP adress : ", function (IP) {     //this is hardcoded now to 192.168.0.11
    //rl.question("Enter port : ", function (port) {    //this is hardcoded for now to 6969
        rl.question("Enter data to send : ", function (word) {
            var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest()
            xmlhttp.open("POST", "http://" + "192.168.0.11" + ":" + 6969);
            xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xmlhttp.send(word);
            rl.close();
        });
    //});
//});