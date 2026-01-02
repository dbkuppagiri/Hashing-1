/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Intution:
 * To check the isomorphic strings, i am using one for loop for iterating on both s and t, as they are of same length, one for loop is sufficient.
 * Checking if the current sChar have any mapping in the map, if yes making sure that character is mapped to the same value that we stored before.
 * If the entry is for the first time then, i am getting all the values in the map and checking if curr t character is not mapped any other schar.
 * Otherwise returning true.
 * 
 * T.C: O(n)
 * S.C: O(1)
 */
var isIsomorphic = function (s, t) {
    let stCharMap = new  Map();
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        if (stCharMap.has(sChar)) {
            const mappedChar = stCharMap.get(sChar);
            if (mappedChar !== t[i]) {
                return false;
            }
        } else {
            const currVals = [...stCharMap.values()];
            if (currVals.includes(tChar)) return false;
            stCharMap.set(sChar, tChar);
        }
    }
    return true;
};