function sumDistinctElements(set1, set2) {
    let sum = 0;
    
    // Iterate through elements in set1
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            sum += set1[i]; // Add to sum if not in set2
        }
    }
    
    // Iterate through elements in set2
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            sum += set2[i]; // Add to sum if not in set1
        }
    }
    
    return sum;
}


const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log(sumDistinctElements(set1, set2));  