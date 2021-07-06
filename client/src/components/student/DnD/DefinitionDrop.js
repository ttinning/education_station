import { useDrop } from 'react-dnd'

export const DefinitionDrop = ({word}) => {


    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: 'Word',
        drop: () => ({name: 'ImageDrop'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

return (
    <li className="dnd-image" ref={drop} role={'ImageDrop'}>{word.definitions[0].definition}</li>
)

};