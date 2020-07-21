const axios = require('axios');


async function getSyllableCount (arr){
    let totalCount = 0;
    let wordSyllableCount = 0;
    let validHaiku = null;//val
    let validHaikuHelper = 0;//val
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
        console.log(`Line ${x + 1} syllable count: ${lineCount}`); 

        //line syllable count validation
        switch(x) {
            case 0:
              // line 1
              lineCount === 5 ? validHaikuHelper+= 1 : validHaikuHelper+= 0;
              break;
            case 1:
              // line 2
              lineCount === 7 ? validHaikuHelper+= 1 : validHaikuHelper+= 0;
              break;
            case 2:
            // line 3
            lineCount === 5 ? validHaikuHelper+= 1 : validHaikuHelper+= 0;
              break;
            default:
              console.log(`This isn't valid.`)
          }

    };
    console.log(`Total syllable count: ${totalCount}`);
    validHaikuHelper === 3 ? validHaiku = true : validHaiku = false;
    return(validHaiku);//returns the validation bool
}


export async function countOfSyllables  (haiku) {
    let valid = null;
    valid = await getSyllableCount(haiku);
    console.log(`This is a valid haiku: ${valid}`);
    return valid;
};