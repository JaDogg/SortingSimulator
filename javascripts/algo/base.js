/**
 * Bhathiya Perera IT110057-04
 *
 */

/**
 * Draws an array with indexes in box structure
 * @param {Object} arr Array to be drawn
 */
function drawarray(arr) {
    var boxset = $("boxset");
    var boxsetnum = $("boxsetnum");
    boxset.innerHTML = "";
    boxsetnum.innerHTML = "";

    boxset.hide();
    boxsetnum.hide();

    var boxsetStr = "";
    var boxsetnumStr = "";

    for (var i = 0; i < arr.length; i++) {
        boxsetStr = boxsetStr + "<div class=box id='arrbox" + i.toString() + "' >" + arr[i] + "<\/div>"
        boxsetnumStr = boxsetnumStr + "<div class=box2>" + (i + 1) + "<\/div>"
    }

    boxset.innerHTML = boxsetStr;
    boxsetnum.innerHTML = boxsetnumStr;

    boxset.show();
    boxsetnum.show();

}

/**
 * Simulate Bubble Sort (Ascending only)
 * @param {Object} a Array (Must be an integer array)
 */
function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                new Effect.Move("arrbox" + i.toString(), {
                    x : 32,
                    y : 0,
                    queue : 'end'
                });
                new Effect.Move("arrbox" + (i + 1).toString(), {
                    x : -32,
                    y : 0,
                    queue : 'end'
                });
                new Effect.Move("arrbox" + i.toString(), {
                    x : 0,
                    y : 32,
                    queue : 'end'
                });
                new Effect.Move("arrbox" + (i + 1).toString(), {
                    x : 0,
                    y : -32,
                    queue : 'end'
                });
                new Effect.Move("arrbox" + i.toString(), {
                    x : -32,
                    y : 0,
                    queue : 'end'
                });
                new Effect.Move("arrbox" + (i + 1).toString(), {
                    x : 32,
                    y : 0,
                    queue : 'end'
                });
                var temp = a[i];
                var t1 = document.getElementById("arrbox" + i.toString());
                var t2 = document.getElementById("arrbox" + (i + 1).toString());
                var t3 = t1.id;
                t1.id = t2.id;
                t2.id = t3;
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

/**
 * This function must be called by the simulate button
 * And this will initialize the array and pass it to  bubbleSort()
 */
function bubble_simulate() {
    var numbers = $("arrayinput").value;
    var toBeSorted = numbers.split(",");
    if (toBeSorted.length >= 1) {
        var toBeSortedi = new Array();
        for (var q = 0; q < toBeSorted.length; q++) {
            toBeSortedi[q] = parseInt(toBeSorted[q]);
        }
        drawarray(toBeSortedi);
        bubbleSort(toBeSortedi);
    }
}
/**
 * Simulate Selection Sort 
 * @param {Object} sortMe array to be sorted
 */
function selectionSort(sortMe) {
    var i, j, small, tmp2;
    //small contains the smallest value
    //tmp2 is used only for swapping
    for ( i = 0; i < sortMe.length; i++) {
        small = i;
		
		new Effect.Move("arrbox" + small.toString(), {
                    x : 32,
                    y : 0,
                    queue : 'end'
                });
        for ( j = i + 1; j < sortMe.length; j++) {
            if (sortMe[j] < sortMe[small]) {
                //drop the current smallest (its j)
				new Effect.Move("arrbox" + small.toString(), {
                    x : -32,
                    y : 0,
                    queue : 'end'
                });
                small = j;
                //raise new smallest (its j)
				new Effect.Move("arrbox" + j.toString(), {
                    x : 32,
                    y : 0,
                    queue : 'end'
                });
            }
        }
        //swapping 
		var l = (small-i)*32; //length difference between the two array elements
		new Effect.Move("arrbox" + i.toString(), {
			x : -32,
			y : 0,
			queue : 'end'
		});	
		new Effect.Move("arrbox" + i.toString(), {
			x : 0,
			y : l,
			queue : 'end'
		});
		new Effect.Move("arrbox" + small.toString(), {
			x : 0,
			y : -l,
			queue : 'end'
		});
		new Effect.Move("arrbox" + small.toString(), {
			x : -32,
			y : 0,
			queue : 'end'
		});		
		new Effect.Move("arrbox" + i.toString(), {
			x : 32,
			y : 0,
			queue : 'end'
		});			
        tmp2 = sortMe[small];
        sortMe[small] = sortMe[i];
        sortMe[i] = tmp2;
		//swap id-s'
		var t1 = document.getElementById("arrbox" + i.toString());
		var t2 = document.getElementById("arrbox" + small.toString());
		var t3 = t1.id;
		t1.id = t2.id;
		t2.id = t3;
    }
}
/**
* Simulate seelction Sort 
* The simulate button will call this
*/
function selection_simulate() {
    var numbers = $("arrayinput").value;
    var toBeSorted = numbers.split(",");
    if (toBeSorted.length >= 1) {
        var toBeSortedi = new Array();
        for (var q = 0; q < toBeSorted.length; q++) {
            toBeSortedi[q] = parseInt(toBeSorted[q]);
        }
        drawarray(toBeSortedi);
        selectionSort(toBeSortedi);
    }
}
function show_selection_sort() {
	var strVar="";
	strVar += "<h2>Selection sort<\/h2>";
	strVar += "A{";
	strVar += "<input type=\"text\" id=\"arrayinput\" style=\"width:550px;\"\/>";
	strVar += "}";
	strVar += "<hr style=\"visibility:hidden;\"\/>";
	strVar += "<div class=\"dbutton\" onclick=\"selection_simulate();\">";
	strVar += "Simulate";
	strVar += "<\/div>";
	strVar += "<hr style=\"visibility:hidden;\"\/>";
	strVar += "<table>";
	strVar += "<tr>";
	strVar += "<td><div id=\"boxsetnum\">";
	strVar += "<\/div><\/td>";
	strVar += "<td><div id=\"boxset\">";
	strVar += "<\/div><\/td>";
	strVar += "<\/tr>";
	strVar += "<\/table> ";
    var simulbox = $("simulbox");
    simulbox.innerHTML = strVar;
    simulbox.highlight({
        startcolor : '#D0E0D0',
        endcolor : '#DDDDDD'
    });

}
function show_bubble_sort() {
	var strVar="";
	strVar += "<h2>Bubble sort<\/h2>";
	strVar += "A{";
	strVar += "<input type=\"text\" id=\"arrayinput\" style=\"width:550px;\"\/>";
	strVar += "}";
	strVar += "<hr style=\"visibility:hidden;\"\/>";
	strVar += "<div class=\"dbutton\" onclick=\"bubble_simulate();\">";
	strVar += "Simulate";
	strVar += "<\/div>";
	strVar += "<hr style=\"visibility:hidden;\"\/>";
	strVar += "<table>";
	strVar += "<tr>";
	strVar += "<td><div id=\"boxsetnum\">";
	strVar += "<\/div><\/td>";
	strVar += "<td><div id=\"boxset\">";
	strVar += "<\/div><\/td>";
	strVar += "<\/tr>";
	strVar += "<\/table> ";

    var simulbox = $("simulbox");
    simulbox.innerHTML = strVar;
    simulbox.highlight({
        startcolor : '#D0E0D0',
        endcolor : '#DDDDDD'
    });

}