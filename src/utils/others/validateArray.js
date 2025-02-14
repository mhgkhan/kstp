export const validateMultiple = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < 2) {
            return false
        }
        else {
            return true;
        }
    }
}