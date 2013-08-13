var five = require("johnny-five"),
    board = new five.Board(),
    LED = null
    LEDStatusOn = false;


board.on("ready", function() {

    LED = (new five.Led(13));

    console.log('LED is ready..');

});


exports.blink = function(req, res){

  if(LED) {
    var state = req.params.state;

    if(state === 'on') {

      //only turn-on if not already on
      if(!LEDStatusOn) {
        LED.on();
        LEDStatusOn = true;
      }

    }
    else if(state === 'off') {
      LED.off();
      LEDStatusOn = false;
    }

    var status = 'LED ' + state + '...';

    console.log(status);
    res.send(status);
  }
};