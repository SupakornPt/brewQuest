import { useNavigate } from "react-router-dom"
import useAnswerStore from "../store/answerStore"
import { useTranslation } from "react-i18next";

const QuestionNav = ({ count, setDirection }) => {
    const { t } = useTranslation();

    const removeLastAnswer = useAnswerStore((state) => state.removeLastAnswer)

    const navigate = useNavigate()

    const handleOnBack = () => {
        setDirection(-1)
        removeLastAnswer()
        navigate(-1)
    }
    return (
        <>
            <div>{t("item")} {count} / 4</div>
            <div><button onClick={handleOnBack}>{t("back")}</button></div>
        </>
    )
}
export default QuestionNav