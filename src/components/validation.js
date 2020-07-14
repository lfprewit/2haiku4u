const axios = require('axios');


export async function getSyllableCount (arr){
    let totalCount = 0;
    let wordSyllableCount = 0;
    for (let x = 0; x < arr.length; x++) {
        let lineCount = 0;
        let lineText = '';
        lineText+= arr[x];
        let lineArray = lineText.split(" ");
        for (let i = 0; i < lineArray.length; i ++) {
            
            await axios.get(`https://api.datamuse.com/words?sp=${lineArray[i]}&md=s`)
            .then ( async (results) => {
                wordSyllableCount = results.data[0].numSyllables;
                return wordSyllableCount;
            })    
            .then( (results) => {
                lineCount+= results; 
                totalCount+= results;
            })
            .catch((e) => console.error(e));
            
        };
        console.log(`Line ${x + 1} count is: ${lineCount}`); 
        //line syllable count validation should go here
    };
    return(totalCount);
}



export async function countOfSyllables  (haiku) {
    let syllableCount = 0;
    syllableCount = await getSyllableCount(haiku);
    console.log(`Total syllable count: ${syllableCount}`);
    return syllableCount;
};

