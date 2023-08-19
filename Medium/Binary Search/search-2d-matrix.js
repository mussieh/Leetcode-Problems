function searchMatrix(matrix, target) {
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let rowMid = Math.floor((rowEnd - rowStart) / 2);
    let l = 0;
    let mid;
    let r = matrix[rowMid].length - 1;
    while (l <= r && rowStart <= rowEnd) {
        rowMid = rowStart + Math.floor((rowEnd - rowStart) / 2);
        mid = l + Math.floor((r - l) / 2);
        middleElement = matrix[rowMid][mid];
        if (target === middleElement) {
            return true;
        } else if (target < middleElement) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
        if (
            (rowMid !== 0 && target < matrix[rowMid][0]) ||
            (rowMid !== matrix.length - 1 &&
                target > matrix[rowMid][matrix[rowMid].length - 1])
        ) {
            rowEnd =
                rowMid !== 0 && target < matrix[rowMid][0]
                    ? rowMid - 1
                    : rowEnd;
            rowStart =
                rowMid !== matrix.length - 1 &&
                target > matrix[rowMid][matrix[rowMid].length - 1]
                    ? rowMid + 1
                    : rowStart;
            l = 0;
            r = matrix[rowMid].length - 1;
        }
    }
    return false;
}

// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
//  l              r

console.log(
    searchMatrix(
        [
            [-10, -9, -9, -9, -9, -7, -7, -6],
            [-4, -2, -1, 0, 0, 0, 2, 3],
            [4, 4, 5, 7, 7, 8, 8, 10],
            [12, 12, 12, 14, 14, 15, 15, 16],
            [17, 18, 20, 22, 22, 22, 23, 24],
            [27, 29, 30, 32, 33, 33, 34, 35],
            [36, 36, 37, 37, 38, 39, 39, 41],
            [43, 44, 44, 46, 46, 47, 48, 48],
            [51, 51, 53, 53, 54, 54, 55, 56],
            [58, 58, 59, 61, 61, 63, 63, 64],
            [65, 67, 69, 71, 72, 72, 72, 74],
            [77, 77, 79, 81, 82, 82, 84, 85],
            [88, 88, 89, 90, 90, 90, 92, 94],
            [96, 97, 98, 100, 101, 103, 104, 106],
            [108, 108, 110, 111, 112, 114, 115, 115],
            [116, 117, 117, 119, 121, 121, 121, 123],
            [124, 125, 125, 126, 127, 127, 128, 130],
            [132, 132, 134, 134, 136, 137, 137, 139],
            [142, 142, 142, 143, 143, 144, 146, 146],
            [147, 147, 149, 150, 151, 151, 151, 153],
            [155, 156, 157, 159, 160, 160, 160, 160],
            [162, 162, 164, 165, 166, 166, 166, 167],
            [168, 169, 169, 170, 171, 172, 174, 176],
            [178, 180, 180, 180, 182, 183, 183, 183],
            [186, 187, 187, 188, 190, 190, 192, 192],
            [193, 194, 195, 197, 198, 198, 200, 202],
            [205, 207, 207, 207, 207, 207, 207, 209],
            [212, 212, 212, 213, 215, 215, 216, 217],
            [220, 222, 222, 224, 224, 224, 226, 228],
            [230, 231, 233, 234, 235, 236, 236, 237],
            [240, 242, 244, 244, 246, 246, 247, 249],
            [252, 253, 254, 255, 257, 258, 258, 260],
            [262, 262, 263, 264, 265, 266, 266, 266],
            [269, 270, 272, 274, 276, 276, 277, 279],
            [282, 282, 283, 283, 285, 287, 287, 288],
            [290, 291, 293, 294, 296, 296, 296, 297],
            [299, 301, 301, 301, 302, 303, 304, 305],
            [308, 308, 309, 309, 310, 312, 312, 313],
            [314, 315, 316, 318, 318, 320, 321, 321],
            [323, 324, 325, 326, 327, 329, 330, 330],
            [333, 334, 335, 336, 336, 338, 338, 339],
            [341, 343, 344, 346, 348, 350, 351, 353],
            [355, 355, 355, 357, 357, 358, 360, 362],
            [363, 364, 366, 368, 369, 369, 369, 370],
            [372, 374, 376, 378, 380, 380, 380, 381],
            [384, 385, 386, 387, 389, 391, 393, 394],
            [395, 395, 395, 396, 398, 399, 399, 399],
            [400, 402, 402, 403, 405, 405, 407, 408],
            [409, 409, 410, 410, 410, 411, 412, 412],
        ],
        186
    )
);
