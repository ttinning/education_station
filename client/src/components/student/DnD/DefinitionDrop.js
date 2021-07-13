import { useDrop } from 'react-dnd'

export const DefinitionDrop = ({word}) => {

    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: 'Word',
        drop: () => ({name: `${word.word}`}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    
    return (
        <div>
            
            { word.definitions ? <li className="dnd-definition" id={word.word} ref={drop} role={'DefinitionDrop'}>{word.definitions[0].definition}</li> : null}
        </div>
    )
};