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
function display()
{
    instructionsOutput.innerHTML = instrs;
}