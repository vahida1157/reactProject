const Button = ({text, onClick}) => {
    return (
        <>
            <button type={"button"} value={text} onClick={onClick} className={'btn'}
                    style={{'margin': '20px'}}>{text}</button>
        </>
    )
}

export default Button