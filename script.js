// this is the javascript of the project details
function save(){

	
    
 // validating the code so that no blank for is submted
    var errmsg = "";
    
    if (document.getElementById('projectName').value=="") {
    	errmsg += "You did not enter the name of your project...\n";
    	document.getElementById('projectName').style.borderColor = "green";
    }
    if (document.getElementById('description').value=="") {
    	errmsg += "You forgot to enter the description of your project...\n";
    	document.getElementById('description').style.borderColor = "green";
    }
    if (document.getElementById('D_t').value=="") {
    	errmsg += " Hey!!! you forgot to enter the date of completion...\n";
    	document.getElementById('D_t').style.borderColor = "green";
    }
    if (errmsg != "") {
    	alert(errmsg);
    	return false;
    }

    confirm('Are you  sure you have filled the form correctly?');

// set project input into local storage
	var pName = document.getElementById('projectName').value;
	var prod = document.getElementById('description').value;
	var pDate = document.getElementById('D_t').value;

	localStorage.setItem('projectName',pName);
	localStorage.setItem('description',prod);
	localStorage.setItem('D_t',pDate);

alert('Project details successfully submited, press on the link CLICK HERE TO SEE THE DETAILS if you want to verify them');
 alert('And remember to fill in Work Experience form')
}

// get the stored project inputs
function load(){
	var storedValue = localStorage.getItem('projectName');
	var storedValue = localStorage.getItem('description');
	var storedValue = localStorage.getItem('D_t');
}
function clean(){

    confirm('This action clear projects details you submited;  Do u want to continue?');

	localStorage.removeItem('projectName');
	localStorage.removeItem('description');
	localStorage.removeItem('D_t');
}

//exprience details
function show(){


 // validating the code so that no blank for is submted
   var novalue = "";
    
    if (document.getElementById('N_W_experience').value=="") {
    	novalue += "Enter the organisation you once worked...\n";
    	document.getElementById('N_W_experience').style.borderColor = "red";
    }

    if (document.getElementById('frodate').value=="") {
    	novalue+= "Enter the starting date...\n";
		document.getElementById('frodate').style.borderColor = "red";
	}	
	if (document.getElementById('todate').value=="") {
		novalue += "Enter the due date...\n";
	    document.getElementById('todate').style.borderColor = "red";
    }
    if (novalue != "") {
    	alert(novalue);
    	return false;
    	
    }

   confirm('Make sure you have filled it correctly? if so press OK!!');

//set work exprience input	
    var workT = document.getElementById('N_W_experience').value;
	var workDate = document.getElementById('frodate').value;
	var workDate = document.getElementById('todate').value;

    localStorage.setItem('N_W_experience',workT);
	localStorage.setItem('frodate',workDate);
	localStorage.setItem('todate',workDate);
 alert('Work experiences have been successfully submited, press on the link CLICK HERE TO SEE THE DETAILS if you want to access them');
 alert('THANK YOU FOR YOUR TIME!!!!!!')
}
//get the work exprience input
function work(){
	var storedValue = localStorage.getItem('N_W_experience');
	var storedValue = localStorage.getItem('frodate');
	var storedValue = localStorage.getItem('todate');
}
//it will going to clear all work exprience localstorage
function cleared(){
     confirm('WARNING!!!!      This action clears the projects details you submited,  Do u want to continue?')

	localStorage.removeItem('N_W_experience');
	localStorage.removeItem('frodate');
	localStorage.removeItem('todate');
 }

	