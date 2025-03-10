const Button = ({ name, action }) => {
    return (
        <button className="bg-button font-bold text-[24px] text-white rounded-[10px] py-[16px] px-[24px] font-prompt" onClick={action}>
            {name}
        </button>
    )
}
export default Button