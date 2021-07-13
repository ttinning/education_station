import '../../styles/ProgressBar.css'
import {useEffect} from 'react'

const ProgressBar = ({questionNumber, answerCorrect}) => {

    let progressBar = document.getElementById('progress-bar-inner') 
    let progressBarWidth = questionNumber + 1

    // useEffect(() => {
    //     progressBar      
    // },[answerCorrect])
    
    useEffect(() => {
        progressBar = document.getElementById('progress-bar-inner')
        progressBar.style.width = progressBarWidth + '0%'
    }, [questionNumber])

    return(
        <>
            <div id='progress-bar-wrapper'>
                <div id='progress-bar-inner'>{progressBarWidth}/10</div>
            </div>
        </>    
    )
}

export default ProgressBar