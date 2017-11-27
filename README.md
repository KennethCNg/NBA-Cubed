# 3D-NBA (better name pending)

3D-NBA is 3D data visualization of all the players from the 2016-2017 season. Each cube represents an NBA player, and each cube's color is based on the player's team color scheme. Clicking on the cube will bring up that players statistics.

### Technologies

3D-NBA utilizes the three.js library, a cross-browser JavaScript library/wrapper around WebGL. 

### Issues

RESOLVED: 
1) At the time of writing this I'm trying to add a hover effect which should illuminate the cube the mouse is hovering over. However, because each cube's mesh (the thing that colors the cube) is used by other cubes with the same mesh, these other cubes also become illuminated. I believe I need to make each mesh unique...Will see what happens. 

Ok, fixed it. So the issue was I had a hashmap with invoked functions that created a material. My first issue was that because I used the same material for every cube so I shouldn't have had special functions to create team specific materials if all materials would be the same anyways. Secondly, Because all materials were initialized when the code is first run through by the browser because I had Immediately Invoked Functions. What I should've done is left them as variables, and invoked them only when I needed them.

### Progress

![screenshot](./app/assets/images/update1.gif)

Ability to hover. Each cube's material matches the player of the cube. Order of the cubes from top of the funnel to the bottom is arranged by points per game.


