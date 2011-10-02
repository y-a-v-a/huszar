var pause = false, debugMode = false, poz = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var doPause = function() {
	"use strict";
	if (pause === false) {
		pause = true;
		$('#pause').html('run');
		console.log("Paused...");
	} else {
		pause = false;
		$('#pause').html('pause');
		console.log("Running...");
	}
};

var arraysearch = function(h,n) {
	"use strict";
	var i;
	for (i = 0; i < h.length; i += 1) {
		if(h[i] === n) {
			return true;
		}
	}
	return false;
};

var positions = {
	0: {
		head:  [38,0,50,50],
		body:  [100,0,52,106],
		limb:  [63,66,25,40],
		leg1:  [100,118,26,100],
		leg2:  [31,118,57,26],
		foot1: [100,230,60,22],
		foot2: [0,118,24,62],
		wrap:  [484,26,340,340]
	},
	1: {
		head:  [0,0,62,34],
		body:  [68,46,54,82],
		limb:  [134,106,40,22],
		leg1:  [96,136,26,102],
		leg2:  [134,140,26,46],
		foot1: [96,246,60,22],
		foot2: [134,196,60,22],
		wrap:  [692,166,340,340]
	},
	2: {
		head:  [0,0,57,52],
		body:  [71,41,56,91],
		limb:  [137,87,25,46],
		leg1:  [101,144,26,98],
		leg2:  [137,145,67,26],
		foot1: [72,253,58,20],
		foot2: [218,145,19,64],
		wrap:  [878,69,340,340]
	},
	3: {
		head:  [162,0,52,52],
		body:  [101,58,50,98],
		limb:  [69,119,22,37],
		leg1:  [107,172,25,99],
		leg2:  [32,172,60,26],
		foot1: [107,291,60,20],
		foot2: [0,172,23,59],
		wrap:  [964,310,340,340]
	},
	4: {
		head:  [0,0,55,51],
		body:  [72,60,48,101],
		limb:  [139,123,26,38],
		leg1:  [94,183,26,113],
		leg2:  [139,183,58,23],
		foot1: [61,309,59,21],
		foot2: [212,183,21,64],
		wrap:  [945,654,340,340]
	},
	5: {
		head:  [0,0,64,33],
		body:  [78,35,51,93],
		limb:  [144,110,45,18],
		leg1:  [101,140,25,94],
		leg2:  [144,142,24,40],
		foot1: [101,244,55,20],
		foot2: [144,193,55,18],
		wrap:  [749,777,340,340]
	},
	6: {
		head:  [84,0,50,47],
		body:  [13,0,52,103],
		limb:  [84,64,31,39],
		leg1:  [38,120,27,98],
		leg2:  [84,120,56,25],
		foot1: [0,230,66,22],
		foot2: [155,120,24,62],
		wrap:  [529,841,340,340]
	},
	7: {
		head:  [133,0,64,36],
		body:  [72,41,53,93],
		limb:  [12,116,43,21],
		leg1:  [72,152,22,90],
		leg2:  [32,151,23,50],
		foot1: [36,257,58,21],
		foot2: [0,211,55,21],
		wrap:  [272,771,340,340]
	},
	8: {
		head:  [189,0,55,54],
		body:  [126,68,53,96],
		limb:  [85,126,26,38],
		leg1:  [126,182,26,98],
		leg2:  [42,182,69,25],
		foot1: [126,303,64,20],
		foot2: [0,182,22,64],
		wrap:  [12,655,340,340]
	},
	9: {
		head:  [0,0,60,35],
		body:  [66,45,45,93],
		limb:  [125,115,42,23],
		leg1:  [85,153,26,90],
		leg2:  [126,153,24,61],
		foot1: [84,271,57,22],
		foot2: [126,223,53,21],
		wrap:  [4,338,340,340]
	},
	10: {
		head:  [0,0,65,35],
		body:  [75,44,52,88],
		limb:  [145,111,41,21],
		leg1:  [103,146,24,93],
		leg2:  [145,146,24,56],
		foot1: [103,253,61,21],
		foot2: [145,213,56,21],
		wrap:  [251,449,340,340]
	},
	11: {
		head:  [154,0,52,50],
		body:  [109,67,50,85],
		limb:  [70,117,24,35],
		leg1:  [109,167,28,85],
		leg2:  [32,167,62,25],
		foot1: [109,267,61,20],
		foot2: [0,167,20,60],
		wrap:  [505,528,340,340]
	},
	12: {
		head:  [119,0,61,33],
		body:  [60,40,51,88],
		limb:  [8,109,42,19],
		leg1:  [64,143,25,88],
		leg2:  [25,142,25,58],
		foot1: [35,252,54,22],
		foot2: [0,211,50,20],
		wrap:  [758,455,340,340]
	},
	13: {
		head:  [132,0,63,34],
		body:  [69,25,51,86],
		limb:  [14,89,42,22],
		leg1:  [69,124,23,93],
		leg2:  [32,124,23,40],
		foot1: [42,227,51,20],
		foot2: [2,174,54,20],
		wrap:  [515,330,340,340]
	},
	14: {
		head:  [0,0,50,50],
		body:  [56,50,50,86],
		limb:  [116,98,26,38],
		leg1:  [80,148,26,92],
		leg2:  [116,148,60,26],
		foot1: [50,250,56,24],
		foot2: [184,148,24,60],
		wrap:  [288,159,340,340]
	},
	15: {
		head:  [121,0,66,32],
		body:  [63,40,54,94],
		limb:  [7,110,46,24],
		leg1:  [63,146,26,100],
		leg2:  [27,146,26,56],
		foot1: [35,252,54,22],
		foot2: [0,214,53,22],
		wrap:  [93,73,340,340]
	}
};

var hashtable = [
	[0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
	[1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],
	[1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0],
	[0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0],
	[0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0],
	[0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1],
	[0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0],
	[0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0],
	[0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0],
	[1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0],
	[1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0]
];

var hamilton = new Hamilton(hashtable);
hamilton.HamiltonPath(2);
var possiblePaths = hamilton.lib;

var myInit = function(pos) {
	"use strict";
	var i,j,p,l,k;
	for (i = 0; i < pos.length; i += 1) {
		for (j in positions[pos[i]]) {
			$('#vh-pos-' + i).text(pos[i]);
			p = { left: '', top: '', width: '', height: '' };
			l = 0;
			for (k in p) {
				p[k] =  parseInt(positions[pos[i]][j][l] * 0.5, 10);
				l += 1;
			}
			$('#vh-' + j + '-' + i).animate(p, 500).delay(800);
		}
	}
};

var setUpInstances = function() {
	"use strict";
	var i = 0, wrapper;
	for (i; i < 16; i += 1) {
		wrapper = $('<div/>', { id: 'vh-wrap-'+ i, 'class' : 'vh-wrap' });
	    $('<div/>', { id : 'vh-head-' + i, 'class' : 'vh-black' }).appendTo(wrapper);
		$('<div/>', { id : 'vh-body-' + i, 'class' : 'vh-green' }).appendTo(wrapper);
		$('<div/>', { id : 'vh-limb-' + i, 'class' : 'vh-orange' }).appendTo(wrapper);
		$('<div/>', { id : 'vh-leg1-' + i, 'class' : 'vh-orange' }).appendTo(wrapper);
		$('<div/>', { id : 'vh-leg2-' + i, 'class' : 'vh-orange' }).appendTo(wrapper);
		$('<div/>', { id : 'vh-foot1-' + i, 'class' : 'vh-black' }).appendTo(wrapper);
		$('<div/>', { id : 'vh-foot2-' + i, 'class' : 'vh-black' }).appendTo(wrapper);
		if (!!debugMode) {
		    $('<div/>', { id : 'vh-pos-' + i}).text(i).appendTo(wrapper);
	    } else {
		    $('<div/>', { id : 'vh-pos-' + i, style: 'visibility: hidden;' }).text(i).appendTo(wrapper);
	    }
		
		wrapper.appendTo('#vh-canvas');
	}
	myInit(poz);
};

var handlePos = function() {
    "use strict";
    var i, r = possiblePaths.shift().split(',',16), newpos = [], v, p = 0, next = [], curpos, s = 0;
    for (p; p < r.length; p += 1) {
        next[p] = r[p] - 1;
    }
    for (i = 0; i < 16; i += 1) {
       curpos = parseInt($('#vh-pos-' + poz[i]).text(), 10);
        v = ((curpos + 1) == 16) ? 0 : curpos + 1;
        newpos[poz[next[i]]] = parseInt(next[v], 10);
    }
    for (s; s < poz.length; s += 1) {
        poz[newpos[s]] = s;
    }
    myInit(newpos);
}

var checkQueue = function() {
	"use strict";
	if (pause === true) {
		return;
	}
	// wait for last queue to be finished
	if (!!$('#vh-foot2-15') && $('#vh-foot2-15').queue('fx').length === 0) {
		handlePos();
	}
};

var debug = function() {
    console.log('Total possible Hamiltonian cycles : ' + hamilton.lib.length);
    console.log('Currently consumed cycles : ' + hamilton.pathCount);
    console.log('Node-position map : ' + poz);
    console.log('Paused : ' + pause);
    console.log('Debug : ' + debugMode);
    return true;
};

$("span#open").click(function() {
    var controlls = $("#controlls");
    var myanimate = function(controlls, target, amt, txt) {
        controlls.animate({ left: amt });
        target.html('&nbsp;' + txt);
    }
    if (parseInt(controlls.css('left'), 10) < 0) {
        myanimate(controlls, $(this), '10px', '&laquo;');
        window.setTimeout(myanimate, 5000, controlls, $(this), '-51px', '&raquo;');
    } else {
        myanimate(controlls, $(this), '-51px', '&raquo;');
    }
});

setUpInstances();
setInterval(function() { checkQueue(); }, 500);