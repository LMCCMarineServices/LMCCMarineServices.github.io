
//	var HullType= new Array();
//	Hull Type["Deep-Vee"]=2;
//	Hull Type["Shallow-Vee"]=1;
//	Hull Type["Deckboat"]=2;
//	Hull Type["Pontoon"]=.75;
//	Hull Type["Catamaran"]=1.25;
//	Hull Type["Trihull"]=1.5;
//	Hull Type["Pickle-Fork"]=1.75;
//	Hull Type["Skiff"]=1;
//	 
//	var DriveType= new Array();
//	Drive Type["Outboard"]=1.2;
//	Drive Type["I/O"]=2;
//	Drive Type["Direct-Drive"]=1;
//	Drive Type["V-Drive"]=2;
			
			
// Functions for calculations.


function Total_Weight() {
	var BoatWeightDry = Number(document.getElementById("Boat_Weight_Dry").value);
	var BoatWeightWet = Number(document.getElementById("Boat_Weight_Wet").value);
	var FuelCapacity = 6.35 * Number(document.getElementById("Fuel_Capacity").value);
	var WeightCapacity = Number(document.getElementById("Weight_Capacity").value);
	var BallastWeight = Number(document.getElementById("Ballast_Weight").value);
	var AselectNum = 0;
	var WetWtResponse = "Enter data to evaluate wet weight";
	var TotWtResponse = "Enter data to evaluate total weight";
	var DryBoatWeightCalc = BoatWeightDry + FuelCapacity;
		if (BoatWeightDry > 0) {AselectNum = AselectNum + 1;}
		if (BoatWeightWet > 0) {AselectNum = AselectNum + 2;}
		if (FuelCapacity > 0) {AselectNum = AselectNum + 4;}
		if (WeightCapacity > 0) {AselectNum = AselectNum + 8;}
		if (FuelCapacity > 0) {FuelCapacity = FuelCapacity + 10;}
		if (BoatWeightWet < DryBoatWeightCalc) {BoatWeightWet = DryBoatWeightCalc;}
	var TheTotalWeight = BoatWeightWet + WeightCapacity + BallastWeight;
	switch (AselectNum) {
case 0: WetWtResponse = "Enter data to evaluate wet weight" 
		document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,100,190)"; break;
case 1: WetWtResponse = "Enter fuel capacity to calculate wet weight"
		document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,100,190)"; break;
case 2: 
case 3: if (BoatWeightWet > 3600) {WetWtResponse = BoatWeightWet + " pounds, boat exceeds wet weight limit"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(230,120,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(255,0,0)"}
		 else {WetWtResponse = BoatWeightWet + " pounds wet, boat weight is acceptable"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,150,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(0,180,0)";} break;
case 4: WetWtResponse = "Enter dry weight to calculate wet weight"
		document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(0,100,190)"; break;
case 5: 
case 6:
case 7: if (BoatWeightWet > 3600) {WetWtResponse = BoatWeightWet + " pounds, boat exceeds wet weight limit"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(230,120,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(255,0,0)"}
		 else {WetWtResponse = BoatWeightWet + " pounds wet, boat weight is acceptable"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,150,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(0,180,0)";}
		TotWtResponse = "Enter weight capacity to calculate total weight"
		document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(0,100,190)"; break;
case 8: TotWtResponse = "Enter wet weight to calculate total weight"
		document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(0,100,190)"; break;
case 9: WetWtResponse = "Enter fuel capacity to calculate wet weight"
		document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,100,190)"
		TotWtResponse = "Enter fuel capacity to calculate total weight"
		document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(0,100,190)"; break;
case 10: 
case 11: if (BoatWeightWet > 3600) {WetWtResponse = BoatWeightWet + " pounds, boat exceeds wet weight limit"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(230,120,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(255,0,0)"}
		 else {WetWtResponse = BoatWeightWet + " pounds wet, boat weight is acceptable"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,150,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(0,180,0)";}
		 if (TheTotalWeight > 5500) {TotWtResponse = TheTotalWeight + " pounds, boat exceeds total weight limit"
		 document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(230,120,75)";
		 document.getElementById("show_TWMetric").style.stroke = "rgb(255,0,0)"}
		 else {TotWtResponse = TheTotalWeight + " pounds total, boat weight is acceptable"
		 document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(0,150,75)";
		 document.getElementById("show_TWMetric").style.stroke = "rgb(0,180,0)";} break;
case 12: TotWtResponse = "Enter dry weight or wet weigh to calculate total weight"; break;
case 13: 
case 14: 
case 15: 
		 if (BoatWeightWet > 3600) {WetWtResponse = BoatWeightWet + " pounds, boat exceeds wet weight limit"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(230,120,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(255,0,0)"}
		 else {WetWtResponse = BoatWeightWet + " pounds wet, boat weight is acceptable"
		 document.getElementById("NoteOfWetWeightAcceptance").style.color = "rgb(0,150,75)";
		 document.getElementById("show_WWMetric").style.stroke = "rgb(0,180,0)";}
		 if (TheTotalWeight > 5500) {TotWtResponse = TheTotalWeight + " pounds, boat exceeds total weight limit"
		 document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(230,120,75)";
		 document.getElementById("show_TWMetric").style.stroke = "rgb(255,0,0)"}
		 else {TotWtResponse = TheTotalWeight + " pounds total, boat weight is acceptable"
		 document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(0,150,75)";
		 document.getElementById("show_TWMetric").style.stroke = "rgb(0,180,0)";} break;
}
if (BallastWeight > 0) {TotWtResponse = TotWtResponse + ", ballast must be deactivated"
						    document.getElementById("NoteOfTotWeightAcceptance").style.color = "rgb(230,120,75)";
							document.getElementById("show_TWMetric").style.stroke = "rgb(255,0,0)"}
document.getElementById("NoteOfWetWeightAcceptance").innerHTML = WetWtResponse
document.getElementById("NoteOfTotWeightAcceptance").innerHTML = TotWtResponse
show_metrics();
}
function Total_Length() {
	var TheTotalLength = Number(document.getElementById("OAL_FT").value) * 12  + Number(document.getElementById("OAL_IN").value);
	if (264<TheTotalLength) {document.getElementById("NoteOfLengthAcceptance").innerHTML = TheTotalLength + " inches, boat is too long"
							document.getElementById("NoteOfLengthAcceptance").style.color = "rgb(230,120,75)";
							document.getElementById("show_LgMetric").style.stroke = "rgb(255,0,0)"}
		else {document.getElementById("NoteOfLengthAcceptance").innerHTML = TheTotalLength + " inches, length is acceptable"
			  document.getElementById("NoteOfLengthAcceptance").style.color = "rgb(0,150,75)";
			  document.getElementById("show_LgMetric").style.stroke = "rgb(0,180,0)"}
show_metrics();
} 
function Total_Beam() {
	var TheTotalBeam = Number(document.getElementById("Beam_FT").value) * 12 + Number(document.getElementById("Beam_IN").value);
	if (102<TheTotalBeam) {document.getElementById("NoteOfBeamAcceptance").innerHTML = TheTotalBeam + " inches, boat is too wide"
							document.getElementById("NoteOfBeamAcceptance").style.color = "rgb(230,120,75)";
							document.getElementById("show_BmMetric").style.stroke = "rgb(255,0,0)"}
		else {document.getElementById("NoteOfBeamAcceptance").innerHTML = TheTotalBeam + " inches, beam is acceptable"
		document.getElementById("NoteOfBeamAcceptance").style.color = "rgb(0,150,75)";
		document.getElementById("show_BmMetric").style.stroke = "rgb(0,180,0)"}
show_metrics();					
}
function show_metrics(){
	document.getElementById("show_boat").style.visibility = "visible";
	document.getElementById("show_LgMetric").style.visibility = "visible";
	document.getElementById("show_BmMetric").style.visibility = "visible";
	document.getElementById("show_WWMetric").style.visibility = "visible";
	document.getElementById("show_TWMetric").style.visibility = "visible";
}	
function remove_it(){
document.getElementById("show_boat").style.visibility = "hidden"
document.getElementById("show_LgMetric").style.visibility = "hidden"
document.getElementById("show_BmMetric").style.visibility = "hidden"
document.getElementById("show_WWMetric").style.visibility = "hidden"
document.getElementById("show_TWMetric").style.visibility = "hidden";
}