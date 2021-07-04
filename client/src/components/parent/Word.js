

const Word = ({word, accounts}) => {

    const completedWords = accounts[0].student.completed_topics[0].words_first_time;
   
    const calculateCompletedStatus = function() {
        
        for (let completedWord of completedWords) {
            if (word === completedWord) {
                return "correct first time!";
            };
            
        };
    };
    

    const completedStatus = calculateCompletedStatus();


    return (
        <li>{word} {completedStatus} </li>
    )
};

export default Word;