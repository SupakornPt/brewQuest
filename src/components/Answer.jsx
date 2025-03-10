const Answer = ({ answer, value, index, action }) => {
    return (
        <button key={index} value={value} onClick={action} className="font-medium text-[18px] text-answerText rounded-[10px] py-[8px] px-[24px] font-prompt border border-answerText">
            {answer}
        </button>
    )
}
export default Answer