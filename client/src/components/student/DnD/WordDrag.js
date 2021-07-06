import { useDrag } from 'react-dnd';

export const WordDrag = function WordBox({ word }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Word",
        item: { word },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const opacity = isDragging ? 0.4 : 1;
    return (<li className="dnd-word" ref={drag} role="Word">{word}</li>);

};

{/* <div ref={drag} role="Word" style={{ opacity }} data-testid={`box-${name}`}>
			{name}
		</div> */}