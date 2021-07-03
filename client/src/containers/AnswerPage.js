import {useState, useEffect} from 'react'

const AnswerPage = () => {
    const exampleWord = 'lion'

    const [answer, setAnswer] = useState('')

    const handleAnswer = (event) => {
        setAnswer(event.target.value.toLowerCase())
    }




    const handleSubmit = (event) => {
        event.preventDefault()
        if(exampleWord === answer){
            console.log('correct', answer)
        }
        else{
            console.log('wrong')
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleAnswer}></input>
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default AnswerPage