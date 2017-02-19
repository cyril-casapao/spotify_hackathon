var interface = function() {
    var matrix;

    function setMatrix(m) {
        this.matrix = m;
    }

    function getMatrix() {
        return this.matrix();
    }

    function printMatrix() {
        for(var row = 0; row < this.matrix.length; row++) {
            for(var col = 0; col < this.matrix[0].length; col++) {
                console.log(matrix[row][col] + ' ');
            }
            console.log('\n');
        }
    }
}

var myInterface = new Interface();
myInterface.setMatrix([0,1, 2], [3, 4, 5]);
myInterface.printMatrix();
