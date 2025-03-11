import { useNavigate } from "react-router-dom"
import Answer from "../components/Answer"
import QuestionNav from "../components/QuestionNav"
import useAnswerStore from "../store/answerStore"
import { useTranslation } from "react-i18next"

const Question4 = ({ setDirection }) => {
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
        setDirection(1)
        setAnswerStore(e.target.value)
        navigate("/result")
        return
    }

    return (
        <div className="flex flex-col font-prompt py-[24px] justify-between items-center h-dvh bg-[#E8E5E2] px-[32px]">
            <div className="flex flex-row justify-between w-full  ">
                <QuestionNav count={"4"} setDirection={setDirection} />
            </div>
            <div className="w-[300px]"><img src="/picQuestion/door.png" alt="pic" className="w-full" /></div>
            <div className="font-bold text-questionText text-[24px]">{t("question4")}</div>
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
export default Question4