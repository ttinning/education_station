import { useDrop } from 'react-dnd'

// export const ImageDrop = ({word1Info}) => {
// const [{canDrop, isOver}, drop] = useDrop(() => ({
//     drop: () => ({name: 'Image'}),
//     collect: (monitor) => ({
//         isOver: monitor.isOver(),
//         canDrop: monitor.canDrop(),
//     }),
// }));

export const ImageDrop = ({word1Info}) => {


    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: 'Word',
        drop: () => ({name: 'ImageDrop'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

return (
    <li className="dnd-image" ref={drop} role={'ImageDrop'}></li>
)

};