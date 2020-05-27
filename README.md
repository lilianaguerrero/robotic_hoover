<b>Description</b> <br>
 A program written in Javascript for Node.js that navigates a imaginary robotic hoover (much like a Roomba) through an imaginary room.
 
 <b>Instructions on How to Run</b> <br>
A requirement to run this program is Node.js on your computer. 
You can also run this using a Node.js compiler in the browser such as https://repl.it/.
 
1. Ensure you have an "input.txt" file in your working directory alongside "robotic_hoover.js". <br>
   You can rewrite the contents of the input.txt file to test different directions & dirt area combinations. It must follow the following format:<br>
   (i). the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)<br>
   (ii). the second line holds the hoover position<br>
   (iii). subsequent lines contain the zero or more positions of patches of dirt (one per line)<br>
   (iv). the next line then always contains the driving instructions (at least one)<br>

2. In your shell, run the "node" command followed by "robotic_hoover.js".
3. The first line of the program output in your terminal displays the X and Y coordinates marking the position of the hoover after processing all commands.
The second line of the program output in your terminal displays the number of patches of dirt the robot cleaned up
