var message="TurnLightsON"
const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="/myTopic"
var topic="/myLightingSystem"
 client.on('connect', () => {
 client.subscribe(topic);
 console.log('mqtt connected');
});
client.on('message', (topic, message) => {

});   
var message1 = '';
var message2 = '';
var message3 = '';
function TurnLightsOn()
{   
    var text = document.getElementById("lightson").textContent;
    if (text == "Turn Lights On")
    {    
        message1 = 'TurnLightsOn'
        client.publish(topic,message1);
        console.log('published to Topic: ' + topic + " with Message: " + message);
        }
}
function TurnLightsOff()
{        

    var text = document.getElementById("lightsoff").textContent;
    if (text == "Turn Lights Off")
    {
        message2 = 'TurnLightsOn'
        client.publish(topic,message2);
    }
}
function AutomaticMode()
{        

    var text = document.getElementById("automatic").textContent;
    if (text == "Automatic Mode")
    {
        message3 = 'AutomaticMode'
        client.publish(topic,message3);
    }
}
      
    