function initialize()
{
    instructionsOutput = document.getElementById("instructions");
    instrs = "";
	display();
}
function updateInstructions()
{
	instrs = "Welcome to the Haunted House! As you navigate your way through the house, you will have to make decisions based on the descriptions of your surroundings. Click the 'get started' button to begin, and remember, choose wisely!";
	display();
}
function display(){
	instructionsOutput.innerHTML=instrs;
}
count=0;
code=0;
function myFunction(){
	alert("Welcome to the hauntedv house!");
}
function saw()
{

	if(count==0){
		code=789;
		count++;
const tales=document.createElement("table");
tales.style.width="80px";
var cells=tales.insertRow(0);
var cell1=cells.insertCell(0);
cell2=cells.insertCell(1);
cell1.innerHTML="saw";
cell2.innerHTML="code:789";
document.getElementById("tease").appendChild(tales);
}
}
function knife(){
	if(count==0){
		code=450;
		count++;
const tales=document.createElement("table");
tales.style.width="80px";
var cells=tales.insertRow(0);
var cell1=cells.insertCell(0);
cell2=cells.insertCell(1);
cell1.innerHTML="knife";
cell2.innerHTML="code:450";
document.getElementById("tease").appendChild(tales);
}
}
function prompts(){

	document.getElementById("demo").innerHTML="Thank you, you have opened the tresure chest and survived with a great deal of riches! You win";
	
}
function bodies(){
		document.getElementById("numBodies").innerHTML="correct, click this button to escape!";
	
		const nextStep= document.createElement("BUTTON");
		nextStep.l
		const name= document.createTextNode("Next step");
		nextStep.appendChild(name);

		document.body.appendChild(nextStep);
		
}

