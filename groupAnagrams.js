/**
 * @param {string[]} strs
 * @return {string[][]}
 * Intution:
 * Here the key idea is to identify the anagrams are to identify the strings which got the same number of alphabets, i.e., eat, ate got 1e, 1t and 1a.
 * we can sort the strings but the timecomplexity becomes O(nklogk) where n is the length of the array and k is the length of the string.
 * To improve this we are using hashing technique for strings, i am creating an array and maintaining the character count for each string, and joining the counts with # 
 * to create the unique hash key.
 * Time complexity is: O(nk)
 * Space complexity is O(n)
 */
var groupAnagrams = function (strs) {
    let hashMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        const countArr = Array.from({ length: 26 }, () => 0);
        const currentString = strs[i];
        // hashkey 
        currentString.split('').forEach((char) => countArr[char.charCodeAt(0) - 97]++);
        const hashKey = countArr.join('#');
        if (hashMap.has(hashKey)) {
            // if this hashkey is already existing
            const existingArray = hashMap.get(hashKey);
            existingArray.push(currentString);
        } else {
            // new haskey
            hashMap.set(hashKey, [currentString]);
        }
    }
    return Array.from(hashMap.values());
};