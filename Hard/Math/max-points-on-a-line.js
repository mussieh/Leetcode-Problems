function maxPoints(points) {
    if (points.length === 1 || points.length === 2) {
        return points.length;
    }
    let point1 = [];
    let point2 = [];
    let yIntercept = 0;
    let xIntercept = 0;
    let xCord = 0;
    let yCord = 0;
    let b = 0;
    let slopeObj = {};
    let lineFunc;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            point1 = points[i];
            point2 = points[j];
            xCord = point1[0];
            yCord = point1[1];
            yIntercept = point2[1] - point1[1];
            xIntercept = point2[0] - point1[0];
            slope = yIntercept / xIntercept;
            b = yCord - slope * xCord;
            lineFunc = getLineFunction(point2[0], point2[1], slope, b);
            if (slopeObj[lineFunc] === undefined) {
                slopeObj[lineFunc] = new Set();
            }
            slopeObj[lineFunc].add(point1);
            slopeObj[lineFunc].add(point2);
        }
    }
    let slopeList = Object.values(slopeObj);
    let maxNumPoints = 0;
    let currentMax = 0;
    for (let i = 0; i < slopeList.length; i++) {
        currentMax = slopeList[i].size;
        if (currentMax > maxNumPoints) {
            maxNumPoints = currentMax;
        }
    }
    return maxNumPoints;
}

function getLineFunction(x, y, slope, b) {
    if (slope === 0 || slope === -0) {
        return `y = ${y}`;
    } else if (slope === Infinity || slope === -Infinity) {
        return `x = ${x}`;
    } else {
        return `y = ${slope}x + ${b}`;
    }
}

console.log(
    maxPoints([
        [7, 3],
        [19, 19],
        [-16, 3],
        [13, 17],
        [-18, 1],
        [-18, -17],
        [13, -3],
        [3, 7],
        [-11, 12],
        [7, 19],
        [19, -12],
        [20, -18],
        [-16, -15],
        [-10, -15],
        [-16, -18],
        [-14, -1],
        [18, 10],
        [-13, 8],
        [7, -5],
        [-4, -9],
        [-11, 2],
        [-9, -9],
        [-5, -16],
        [10, 14],
        [-3, 4],
        [1, -20],
        [2, 16],
        [0, 14],
        [-14, 5],
        [15, -11],
        [3, 11],
        [11, -10],
        [-1, -7],
        [16, 7],
        [1, -11],
        [-8, -3],
        [1, -6],
        [19, 7],
        [3, 6],
        [-1, -2],
        [7, -3],
        [-6, -8],
        [7, 1],
        [-15, 12],
        [-17, 9],
        [19, -9],
        [1, 0],
        [9, -10],
        [6, 20],
        [-12, -4],
        [-16, -17],
        [14, 3],
        [0, -1],
        [-18, 9],
        [-15, 15],
        [-3, -15],
        [-5, 20],
        [15, -14],
        [9, -17],
        [10, -14],
        [-7, -11],
        [14, 9],
        [1, -1],
        [15, 12],
        [-5, -1],
        [-17, -5],
        [15, -2],
        [-12, 11],
        [19, -18],
        [8, 7],
        [-5, -3],
        [-17, -1],
        [-18, 13],
        [15, -3],
        [4, 18],
        [-14, -15],
        [15, 8],
        [-18, -12],
        [-15, 19],
        [-9, 16],
        [-9, 14],
        [-12, -14],
        [-2, -20],
        [-3, -13],
        [10, -7],
        [-2, -10],
        [9, 10],
        [-1, 7],
        [-17, -6],
        [-15, 20],
        [5, -17],
        [6, -6],
        [-11, -8],
    ])
);

// console.log(point1, point2);
// console.log(slopeObj);
// slopeObj[slope] =
//     slopeObj[slope] === undefined ? 1 : slopeObj[slope] + 1;
