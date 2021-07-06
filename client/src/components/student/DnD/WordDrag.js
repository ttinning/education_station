import { useDrag } from 'react-dnd';

export const WordDrag = function WordBox({ word, incrementScore }) {

    

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Word",
        item: { word },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                // alert(`You dropped ${word} into ${dropResult.name}!`);
                isCorrect(word, dropResult);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const isCorrect = (word, dropResult) => {
        if (word === dropResult.name) {
            // alert("Correct!")
            incrementScore()
        } else {
            alert("Sorry, that's wrong")
        }
        // word === dropResult.name ? alert("Correct!") : null;
    }
    

    const opacity = isDragging ? 0 : 1;
    return (<li className="dnd-word" ref={drag} style={{opacity}} role='Word'>{word}</li>);

};