import { useNavigate } from "react-router-dom"
import Answer from "../components/Answer"
import QuestionNav from "../components/QuestionNav"
import useAnswerStore from "../store/answerStore"
import { useTranslation } from "react-i18next"

const Question1 = () => {
    const { t } = useTranslation();

    const setAnswerStore = useAnswerStore((state) => state.setAnswerStore)

    const answer = [
        { text: `${t("answer41")}`, value: "J" },
        { text: `${t("answer42")}`, value: "P" },
        { text: `${t("answer43")}`, value: "P" },
        { text: `${t("answer44")}`, value: "J" }
    ]

    const navigate = useNavigate()

    const handleOnAnswer = (e) => {
        setAnswerStore(e.target.value)
        navigate("/result")
        return
    }

    return (
        <div className="flex flex-col font-prompt gap-[56px] justify-center items-center h-screen bg-[#E8E5E2]">
            <div className="flex flex-row justify-between w-full px-[32px] py-[40px]">
                <QuestionNav count={"4"} />
            </div>
            <div className="w-[300px]"><img src="/picQuestion/door.png" alt="pic" className="w-full" /></div>
            <div className="font-bold text-questionText">{t("question4")}</div>
            <div className="flex flex-col gap-[32px]">
                {
                    answer.map((answer, index) => {
                        return <Answer answer={answer.text} value={answer.value} key={index} action={handleOnAnswer} />
                    })
                }
            </div>
        </div>
    )
}
export default Question1