function robotic_hoover(){
  let fs = require('fs'); //Node.js module allows you to work with the file system on your computer
  let hoover_info = fs.readFileSync('input.txt').toString().split("\n");
  //open up local file, split file by row, converts rows to strings, and pushes them into an array
  for (item in hoover_info){ //loop through array
    new_item = hoover_info[item].replace(' ', ''); //remove blank spaces
    hoover_info[item] = new_item; //replaces items with no whitespace
  }
  
  let n_patches_cleaned = 0; //declares a counter
  let x = Number(hoover_info[1][0]); //declares beginning x position & converts to integer
  let y = Number(hoover_info[1][1]); //declares beginning y position & converts to integer
  let dirt_patches_str = hoover_info.slice(2,-1); //declares dirt patches as a slice of a list containing strings
  let dirt_patches = [];
  for (indx in dirt_patches_str){
    dirt_patches.push(Number(dirt_patches_str[indx])); //converts all strings to integers & pushes them into array
  }

  let obj_directions = (hoover_info.slice(-1)); //declares the directions as the last object in the list
  let directions = obj_directions.toString(); //converts directions to strings
  let num_check = 0; //declares 

  function current_position_check(x,y){ 
  /*helper function to check if current position is also a dirt patch, if it is 
  then remove from dirt_patches list since it has been cleaned up*/
    if (dirt_patches.includes(num_check)  === true) {
      n_patches_cleaned += 1;
      const index = dirt_patches.indexOf(num_check); //loops through dirt_patches, removes num_check 
      if (index > -1) { 
        dirt_patches.splice(index, 1);
      }
    }
  }
  for (indx_direction in directions){
      if (directions[indx_direction] == "N"){
          y += 1; //moves y up by 1
          num_check = (x*10)+y; //match formatting in dirt_patches list
          current_position_check(num_check) //calls helper function   
      } 
      else if (directions[indx_direction] == "S"){
          y -= 1; //moves y down by 1
          num_check = (x*10)+y; //match formatting in dirt_patches list
          current_position_check(num_check) //calls helper function 
      }
      else if (directions[indx_direction] == "E"){
          x += 1; //moves X over to the right by 1
          num_check = (x*10)+y; //match formatting in dirt_patches list
          current_position_check(num_check) //calls helper function 
      }
      else if (directions[indx_direction] == "W"){
          x-= 1; //moves X over to the left by 1
          num_check = (x*10)+y; //match formatting in dirt_patches list
          current_position_check(num_check); //calls helper function 
      }  
  }
  console.log(x,y)
  console.log(n_patches_cleaned)
} 
robotic_hoover()