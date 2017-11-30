# NBA-Cubed

[Live link][NBACUBED]

[NBACUBED]: http://kennethcng.com/NBA-Cubed


3D-NBA is 3D data visualization of all the players from the 2016-2017 season. Each cube represents an NBA player, and each cube's color is based on the player's team color scheme. Clicking on the cube will bring up that players statistics.


### Controls

Click and drag, zoom, or use your keyboard arrows to move around the 3D world.

### MVPs and Functionality

- [x] Funnel-shape to give a depiction of the NBA landscape based on points-per-game by all the players in the NBA
- [ ] Click on cubes to reveal stats of that player
- [ ] Search functionality


### Technologies

3D-NBA utilizes the three.js library, a cross-browser JavaScript library/wrapper around WebGL. 

### Issues

RESOLVED: 
1) At the time of writing this I'm trying to add a hover effect which should illuminate the cube the mouse is hovering over. However, because each cube's mesh (the thing that colors the cube) is used by other cubes with the same mesh, these other cubes also become illuminated. I believe I need to make each mesh unique...Will see what happens. 

1) Ok, fixed it. So the issue was I had a hashmap with invoked functions that created a material. My first issue was that because I used the same material for every cube so I shouldn't have had special functions to create team specific materials if all materials would be the same anyways. Secondly, Because all materials were initialized when the code is first run through by the browser because I had Immediately Invoked Functions. What I should've done is left them as variables, and invoked them only when I needed them.

### Progress

11/27/2017

Implemented the ability to hover over cubes. Each cube's material matches the player of the cube. Order of the cubes from top of the funnel to the bottom is arranged by points per game. 

Need to implement clicking on each cube and showing the stats of the selected cube. Also allow typing to search for a player's cube, or search for player's from a team.


