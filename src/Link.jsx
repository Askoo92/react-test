const Link = ({ mouseOverEvent, mouseOutEvent, src }) => {
    return (
     <img src={src} onMouseOver={mouseOverEvent} onMouseOut=
    {mouseOutEvent} />
    );
};


export default Link