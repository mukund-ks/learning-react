function FunctionEvent() {
    const handleClick = () => console.log('Button is clicked');
    return (
        <div>
            Functinal Component
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

export default FunctionEvent;