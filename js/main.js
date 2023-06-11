 function subtractYears(date, years) {  //calling subtractYears function from years
  date.setFullYear(date.getFullYear() - years);

  return date;
}

function cleanerrors () {  // this function will clear error messages
	const errorelements = document.getElementsByClassName("errmessage");
    for (let i = 0; i < errorelements.length; i++) {
             errorelements[i].innerHTML="";
     }
}
function validateform(){
	//First name validation
	cleanerrors ();
	var fn = document.getElementById("fname").value;
	if (fn == ""){
		
		document.getElementById("message1").innerHTML="*Please fill your First name";
		return false;
	}
	//Last name validation
	var ln = document.getElementById("lname").value;
	if (ln == ""){
		document.getElementById("message2").innerHTML="*Please fill your Last name";
		return false;
	}
	//Parent's First name validation
	var pfn = document.getElementById("pfname").value;
	if (pfn == ""){
		
		document.getElementById("pfmessage").innerHTML="*Please fill your First name";
		return false;
	}
	//Parent's Last name validation
	var pln = document.getElementById("plname").value;
	if (pln == ""){
		document.getElementById("plmessage").innerHTML="*Please fill your Last name";
		return false;
	}
	//Address validation
	var add = document.getElementById("Address").value;
	if (add == ""){
		document.getElementById("message3").innerHTML="*Please fill your full address"
		return false;
	}
	//phone validation 
	var a = document.getElementById("phoneno.").value;
	if (a == ""){
		document.getElementById("message").innerHTML="*Please fill mobile number"
		return false;
	}
	if(isNaN(a)){
		document.getElementById("message").innerHTML="*Please fill only numbers"
		return false;
	}
	if(a.length != 10){
		document.getElementById("message").innerHTML="*Phone number must be 10 digits only"
		return false;
	}
	

	 // date of birth
	var dob = document.getElementById("DOB").value;
	var isValidDate = new Date(dob); //get date from the calendar - this is the date of birth of candidate	
	var maxdate = subtractYears(new Date(), 5); // this is the maximum date of birth i.e. the candidate must be atleast 5 years today so this is the maximum date which is 5 years ago from today .. if today is 5 may 2023 then this is 5 may 2018.
	var mindate = subtractYears(new Date(), 50); //this is the minimum date of birth i.e. the candidate must be atleast 50 years today so this is the minimum date of birth which is 50 years ago from now ... if today is 5 may 2023 then this is 5 May 1973.
	if ((isValidDate > mindate) && (isValidDate < maxdate)){
	  //do nothing since  date of birth of candidate is more than 50 years ago from now and less than 5 years ago from now
	  //{alert(" allowed");
	  }        
    else {
	    document.getElementById("dobmessage").innerHTML="*The age of the candidate must be between 5 and 50 years as of today."
		return false;   // date of birth is either more than 5 years ago from now or less than 50 years ago from now
	}
	alert ("Form submitted successfully!! Our Customer Support team will contact you shortly");
}


 function validateEnquiryform(){
	//phone validation 
	var a = document.getElementById("phoneno.").value;
	
	if (a == ""){
		document.getElementById("message").innerHTML="*Please fill mobile number"
		return false;
	}
	if(isNaN(a)){
		document.getElementById("message").innerHTML="*Please fill only numbers"
		return false;
	}
	if(a.length != 10){
		document.getElementById("message").innerHTML="*Phone number must be 10 digits only"
		return false;
	}

 
}

	