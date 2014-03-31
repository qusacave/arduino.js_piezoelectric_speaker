//kaeru

var arduino = document.arduino;
/*
function init(){
    arduino.open("/dev/cu.usbmodem641");
    arduino.pinMode(13, true);
}
*/

var bpm = 175;
var n1=240000/bpm, n2=n1/2, n4=n2/2, n8=n4/2, n16=n8/2;
var a3=220, a_3=a3*1.06, b3=a_3*1.06, c4=b3*1.06, c_4=c4*1.06, d4=c_4*1.06, d_4=d4*1.06, e4=d_4*1.06, f4=e4*1.06, f_4=f4*1.06, g4=f_4*1.06, g_4=g4*1.06;
var a4=a3*2, a_4=a4*1.06, b4=a_4*1.06, c5=b4*1.06, c_5=c5*1.06, d5=c_5*1.06, d_5=d5*1.06, e5=d_5*1.06, f5=e5*1.06, f_5=f5*1.06, g5=f_5*1.06, g_5=g5*1.06;
var a5=a4*2, a_5=a5*1.06, b5=a_5*1.06, c6=b5*1.06, c_6=c6*1.06, d6=c_6*1.06, d_6=d6*1.06, e6=d_6*1.06, f6=e6*1.06, f_6=f6*1.06, g6=f_6*1.06, g_6=g6*1.06;
var a6=a5*2, a_6=a6*1.06, b6=a_6*1.06, c7=b6*1.06, c_7=c7*1.06, d7=c_7*1.06, d_7=d7*1.06, e7=d_7*1.06, f7=e7*1.06, f_7=f7*1.06, g7=f_7*1.06, g_7=g7*1.06;
var a7=a6*2, a_7=a7*1.06, b7=a_7*1.06, c8=b7*1.06, c_8=c8*1.06, d8=c_8*1.06, d_8=d8*1.06, e8=d_8*1.06, f8=e8*1.06, f_8=f8*1.06, g8=f_8*1.06, g_8=g8*1.06;


//durとdelayはどっちも同じ事をしたい

function dur(time){
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + time);
}
/*
function delay(sTime, time){
    if(sTime == -1){
	var sTime = new Date().getTime();
	delay(sTime, time);
    }
    else{
	var now = new Date().getTime();
	if(now < sTime + time)
	    delay(sTime, time);
	else return;
    }
}
*/
function noteOn(freq, duration){
    var frequency = Math.floor(1000000/freq);
    arduino.pinMode(13, true);
    arduino.pulse(13, frequency, frequency);
    dur(duration);
    arduino.pinMode(13, false);
}

function noteOn2(freq1, freq2, duration){
    var frequency1 = Math.floor(1000000/freq1);
    var frequency2 = Math.floor(1000000/freq2);
    arduino.pinMode(13, true);
    for(var i=0; i<duration; i+=40){
	arduino.pulse(13, frequency1, frequency1);
	dur(5);
	arduino.pulse(13, frequency2, frequency2);
	dur(5);
    }
    arduino.pinMode(13, false);
}

function noteOff(duration){
    dur(duration);
}

function kaeru(){
    //init();

    noteOn(c6, n4);
    noteOn(d6, n4);
    noteOn(e6, n4);
    noteOn(f6, n4);
    noteOn(e6, n4);
    noteOn(d6, n4);
    noteOn(c6, n2);
    
    noteOn2(e6, c5, n4);
    noteOn2(f6, d5, n4);
    noteOn2(g6, e5, n4);
    noteOn2(a6, f5, n4);
    noteOn2(g6, e5, n4);
    noteOn2(f6, d5, n4);
    noteOn2(e6, c5, n2);
    
    noteOn2(c6, e5, n4);
    noteOn2(c6, f5, n4);
    noteOn2(c6, g5, n4);
    noteOn2(c6, a5, n4);
    noteOn2(c6, g5, n4);
    noteOn2(c6, f5, n4);
    noteOn2(c6, e5, n2);
	
    noteOn2(c6, c5, n4);
    noteOn2(d6, c5, n4);
    noteOn2(e6, c5, n4);
    noteOn2(f6, c5, n4);
    noteOn2(e6, c5, n4);
    noteOn2(d6, c5, n4);
    noteOn2(c6, c5, n2);
    
    noteOn2(c6, c5, n4);
    noteOn2(d6, d5, n4);
    noteOn2(e6, e5, n4);
    noteOn2(f6, f5, n4);
    noteOn2(e6, e5, n4);
    noteOn2(d6, d5, n4);
    noteOn2(c6, c5, n2);
  
    noteOn2(e6, c5, n4);
    noteOn2(f6, d5, n4);
    noteOn2(g6, e5, n4);
    noteOn2(a6, f5, n4);
    noteOn2(g6, e5, n4);
    noteOn2(f6, d5, n4);
    noteOn2(e6, c5, n2);
    
    noteOn2(c6, e5, n4);
    noteOn2(c6, f5, n4);
    noteOn2(c6, g5, n4);
    noteOn2(c6, a5, n4);
    noteOn2(c6, g5, n4);
    noteOn2(c6, f5, n4);
    noteOn2(c6, e5, n2);
    
    noteOn2(c6, c5, n4);
    noteOn2(d6, c5, n4);
    noteOn2(e6, c5, n4);
    noteOn2(f6, c5, n4);
    noteOn2(e6, c5, n4);
    noteOn2(d6, c5, n4);
    noteOn2(c6, c5, n2);

    noteOn(c5, n4);
    noteOn(d5, n4);
    noteOn(e5, n4);
    noteOn(f5, n4);
    noteOn(e5, n4);
    noteOn(d5, n4);
    noteOn(c5, n2);

}