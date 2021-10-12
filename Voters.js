const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    let answer = {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    }
    const countVotes = function (total, currentValue) {
        let { age, voted } = currentValue
        if (age < 26) {
            total.numYoungPeople++
            total.numYoungVotes = voted ? total.numYoungVotes + 1 : total.numYoungVotes
        }
        if (25 < age && age < 36) {
            total.numMidsPeople++
            total.numMidVotesPeople = voted ? total.numMidVotesPeople + 1 : total.numMidVotesPeople
        }
        if (age > 35) {
            total.numOldsPeople++
            total.numOldVotesPeople = voted ? total.numOldVotesPeople + 1 : total.numOldVotesPeople
        }
        return total
    }


    return arr.reduce(countVotes, answer)
}

console.log(voterResults(voters)); // Returned value shown below:
 /*
{ numYoungVotes: 1,
 numYoungPeople: 4,
 numMidVotesPeople: 3,
 numMidsPeople: 4,
 numOldVotesPeople: 3,
 numOldsPeople: 4
}
*/