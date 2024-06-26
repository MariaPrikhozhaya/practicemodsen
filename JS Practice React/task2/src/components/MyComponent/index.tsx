import React, {useState} from "react";


const MyComponent = ({text}) => {

    const [showFullText, setShowFullText] = useState(false);

    const handleToggle = () => {
        setShowFullText(!showFullText);
    };

  const firstSentence = text.split('.')[0] + '.';



    return (
        <div className="block">
            {showFullText ? (
                    <div className="text">{text}</div>
                ) : (
                    <div className="text">{firstSentence}</div>
                )}
                <button className="btn" onClick={handleToggle}>{showFullText ?'Скрыть' : 'Показать подробнее'}</button>
        </div>
    );
};

export default MyComponent;