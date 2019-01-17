function Snake(x, y) {
    this.dead = false;
    this.x = x;
    this.y = y;

    var segCount = random(2, 10);
    var segs = [];

    var dir = p5.Vector.fromAngle(floor(random(4)) * (TWO_PI / 4)).mult(cellSize);

    //var Size = gridSize*cellSize;

    var pos = createVector(Math.ceil(random(Size) / cellSize) * cellSize, Math.ceil(random(Size) / cellSize) * cellSize);

    var newPos = createVector(0, 0);

    segs.push(pos);

    frameRate(speed); // Controls speed of snakes

    this.update = function() {
        if (random() < 0.3) {
            var rot = 0;
            while (rot == 0) {
                rot = round(random(-1, 1));
            }
            dir.rotate(TWO_PI / 4 * rot);
        }

        //move
        newPos = p5.Vector.add(pos, dir);

        segs.unshift(newPos);
        pos = newPos;

        if (segs.length > segCount) {
            segs.pop();
        }
    }

    var c = color(random(360), random(10, 70), 100);

    this.draw = function() {
        noFill();
        strokeWeight(cellSize / 2); // How thick the snakes are
        strokeCap(ROUND);
        stroke(c);
        this.dead = true;

        for (var i = 0; i < segs.length - 1; i++) {
            var s = segs[i];
            var e = segs[i + 1];

            if (s.x >= 0 && s.x <= Size && s.y >= 0 && s.y <= Size) {
                if (e.x >= 0 && e.x <= Size && e.y >= 0 && e.y <= Size) {

                    line(s.x + this.x, s.y + this.y, e.x + this.x, e.y + this.y);
                    line(s.y + this.x, s.x + this.y, e.y + this.x, e.x + this.y);

                    line(Size - s.x + this.x, s.y + this.y, Size - e.x + this.x, e.y + this.y);
                    line(Size - s.y + this.x, s.x + this.y, Size - e.y + this.x, e.x + this.y);

                    line(s.x + this.x, Size - s.y + this.y, e.x + this.x, Size - e.y + this.y);
                    line(s.y + this.x, Size - s.x + this.y, e.y + this.x, Size - e.x + this.y);

                    line(Size - s.x + this.x, Size - s.y + this.y, Size - e.x + this.x, Size - e.y + this.y);
                    line(Size - s.y + this.x, Size - s.x + this.y, Size - e.y + this.x, Size - e.x + this.y);

                    //dead check

                    this.dead = false;
                }
            }
        }

        stroke(0, 0, 75);
        noFill();
        rect(this.x, this.y, Size, Size, 5, 5, 5, 5);
    }
}