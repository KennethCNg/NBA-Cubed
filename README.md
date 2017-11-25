# 3D-NBA (better name pending)

3D-NBA is 3D data visualization of all the players from the 2016-2017 season. Each cube represents an NBA player, and each cube's color is based on the player's team color scheme. Clicking on the cube will bring up that players statistics.

### Technologies

3D-NBA utilizes the three.js library, a cross-browser JavaScript library/wrapper around WebGL. 

### Issues

At the time of writing this I'm trying to add a hover effect which should illuminate the cube the mouse is hovering over. However, because each cube's mesh (the thing that colors the cube) is used by other cubes with the same mesh, these other cubes also become illuminated. I believe I need to make each mesh unique...Will see what happens. 