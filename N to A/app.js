var SerialPort = require("serialPort");

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    deliniter: '\r\n'
});
var port = new SerialPort("COM3", {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false

});

port.pipe(parser);

setTimeout(function(){
    port.write("1");
}, 3000);

