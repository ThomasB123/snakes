/*
Original sketch from openprocessing.org
By user 'skizzm', 2nd November 2017
User profile:
https://www.openprocessing.org/user/105743
Original Sketch:
https://www.openprocessing.org/sketch/469866

Originally licensed under Creative Commons,
Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
https://creativecommons.org/licenses/by-sa/3.0/
*/

var cellSize = 10; // Size of each pixel (block)
var gridSize = 10; // Number of pixels in grid
var Size = 100; // Size of each box. gridSize * cellSize

var padding = 30; // Space between each box
var border = 50; // Space between edge of box and edge of canvas

var number = 2; // Number of snakes in each box

var count = 3; // Number of boxes in each row and column

var speed = 15; // Speed of the snakes

var snakes = [];

function setup() {
    background(40);
    colorMode(HSB, 360, 100, 100, 100);
    Size = gridSize * cellSize;

    createCanvas((Size * count) + ((count - 1) * padding) + border * 2, (Size * count) + ((count - 1) * padding) + border * 2);

    snakes = [];
    for (var y = 0; y < count; y++) { // Number of boxes in each column
        for (var x = 0; x < count; x++) { // Number of boxes in each row
            for (var i = 0; i < number; i++) { // number of snakes in each box
                snakes.push(new Snake(x * Size + x * padding + border, y * Size + y * padding + border));
            }
        }
    }
}

function incrementBoxes() {
    if (count * cellSize * gridSize < 2000) {
        count++;
        setup();
    }
}

function decrementBoxes() {
    if (count > 1) {
        count--;
        setup();
    }
}

function incrementSnakes() {
    if (number < 5) {
        number++;
        setup();
    }
}

function decrementSnakes() {
    if (number > 1) {
        number--;
        setup();
    }
}

function incrementCell() {
    if ((cellSize + 5) * gridSize < 650) {
        cellSize += 5;
        setup();
    }
}

function decrementCell() {
    if ((cellSize - 5) * gridSize > 25) {
        cellSize -= 5;
        setup();
    }
}

function incrementGrid() {
    if ((gridSize + 5) * cellSize < 650) {
        gridSize += 5;
        setup();
    }
}

function decrementGrid() {
    if ((gridSize - 5) * cellSize > 25) {
        gridSize -= 5;
        setup();
    }
}

function incrementSpeed() {
    if (speed < 40) {
        speed += 5;
        setup();
    }
}

function decrementSpeed() {
    if (speed > 10) {
        speed -= 5;
        setup();
    }
}

function draw() {
    noStroke();
    fill(0, 0, 20, 50);
    rect(0, 0, width, height, 30);

    for (var i = 0; i < snakes.length; i++) {
        snakes[i].update();
        snakes[i].draw();
        if (snakes[i].dead) {
            snakes[i] = new Snake(snakes[i].x, snakes[i].y);
        }
    }
}

/*
This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
*/