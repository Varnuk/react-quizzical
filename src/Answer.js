const Anwser = (props) => {

    const styles={
        backgroundColor: props.endGame ?
            (props.id === props.correctAnswer ? "#94D7A2" : props.isHighlighted ? "#F8BCBC" : "white") :
            (props.isHighlighted ? "#D6DBF5" : "white"),
        color: props.endGame ? (props.id === props.correctAnswer ? "#293264" : "grey") : "#black",
        border: props.endGame ? props.id === props.correctAnswer ? "none" : props.isHighlighted? "none" :"" : ""
    }

    return(
        <button
            style={styles}
            id={props.id}
            key={props.id}
            onClick={props.answerChoosen}>
            {props.value
                .replaceAll("&quot;", "''")
                .replaceAll("&#039;s", "'s")
                .replaceAll('&#039;', "'")
                .replaceAll("&amp;", "&")
                .replaceAll("&eacute;", "é")}
        </button>
    )
}

export default Anwser