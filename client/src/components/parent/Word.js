

const Word = ({word, accounts}) => {

   
    
   
    const completedWords = accounts[0].student.learning_status.completed_topics[0].words_first_time;
    console.log(completedWords);

    const CompletedStatus = completedWords.some((completedWord) =>  {
        return word === completedWord;
    });

    // const completedStatus = accounts.student.learning_status.completed_topics.words_first_time.some((completed_word) => {
    //     return completed_word === word;
    // });

    // completedStatus();

    return (
        <li>{word}</li>
    )
};

export default Word;