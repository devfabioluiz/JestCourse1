const chunkArray = (arr, len) => {
    // Init chunked arr
    const chunkedArr = [];

    // Loop through arr
    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1];

        // Check if last and if last length is equal to the chunk len
        if(!last || last.length === len){
            chunkedArr.push([val]);
        }else{
            last.push(val);
        }
    });
    
    return chunkedArr;
}

module.exports = chunkArray;