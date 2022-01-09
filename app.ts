interface student {
    name: string;
    avgMark: number;

}

interface statistics {
    avgMark: number;
    HighestMark: string;
    lowestMark: string;
}


const testMarks = [{
    name: 'Vasya' ,
    avgMark: 3.75

}, {
    name: 'Lena',
    avgMark: 4.89
    }]

    
function getStatistics(marks: student[]): statistics {
    let averageMark;    
    let avgMarkSum = 0;
        const len = testMarks.length;
        let iavg = null;
        let iname = null;
        for (let i = 0; i < len; i++) {
            iavg = testMarks[i];
            if (iavg.avgMark) {
                avgMarkSum = iavg.avgMark + avgMarkSum;
                averageMark = avgMarkSum / 2;
            }
        }
   const avg:  statistics = {
        avgMark: averageMark.toString(),
        HighestMark: 'Lena',
        lowestMark: 'Vasya'
    }
   return avg;
}
console.log(getStatistics(testMarks))