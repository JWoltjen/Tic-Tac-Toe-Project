### Tic-Tac-Toe
 >A Javascript Project by Jeff Woltjen

## Introduction

This was the final project for Turing School of Software and Design's frontend Module 1 (2006). Students were challenged to create a working tic-tac-toe game from scratch using HTML, CSS, and Javascript. The final product features data that persists after reload, clickable squares using event listeners, dynamic data model using classes for game and player instantiations, and the ability to reset the game while keeping score. The project spanned approximately 8 days.

![Recordit GIF](http://g.recordit.co/JDE4VRfYYl.gif)

## Key Concepts

1. Storing Data in classes

2. Using event bubbling to create a dynamic DOM

3. Data Model Local Storage DOM data trajectory

4. CSS layout using grid

## Challenges

Perhaps the largest challenge during this project was handling how data stored in localStorage would be passed back into the data model and then the DOM after page reload. The Player class contained methods both to store and retrieve the number of wins recorded in/from localStorage. If the game instance begins with either player having at least 1 win already in localStorage, the model functions properly. However, if localStorage is then cleared and the page is reset, the wins will be displayed on the DOM as NaN. This is likely because it is impossible to parseInt a number that is no longer present within localStorage.

![Recordit Gif](http://g.recordit.co/5ymZNe5DGV.gif)
![Recordit Gif](http://g.recordit.co/Q8iaVGFK7t.gif)

The second biggest challenge was the implementation of DRY (don't repeat yourself) Programming. The code in this model does not achieve this maxim to a satisfactory degree, as each player has its own win condition checker, its own datamodel updater, its own mainclick handler, and its own function to record wins from storage. The total amount of JS code could likely be reduced in half if parameters were used and player was interpolated lower within the function.

## Successes

The largest success of the project was implementing a class instantiation of game which itself instantiated two instances of the player class, each with its own unique data. When a player recorded a win, the data in the game and player classes would be updated accordingly.

The second largest success was implementation of event bubbling to listen for click events within the 9 square grid. The event listener was placed on the parentNode of each grid square, so that no matter which of the nine squares were clicked, the event would bubble up to the parentNode and then be dealt with accordingly.

## Future Functionality

Future improvements to the current functionality include refactoring the code to make it more DRY, and debugging the LocalStorage functionality where the game has no data in localStorage to begin with. Finally, exploration of the timeout function may be warranted, as well as possibly displaying the winning grid on each player's sidebar after every winning game.

## Acknowledgements
Author: Jeff Woltjen
Project Manager: Hannah Hudson

A special thanks to all the instructors of Mod 1 for helping me climb this coding mountain one step at a time. While there is so much further to go, it is bewildering to take a step back and look at how much I have already learned. Here's to what's next!
