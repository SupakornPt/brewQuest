import { useNavigate } from "react-router-dom"
import Answer from "../components/Answer"
import QuestionNav from "../components/QuestionNav"
import useAnswerStore from "../store/answerStore"
import { useTranslation } from "react-i18next"

const Question2 = ({ setDirection }) => {
    const { t } = useTranslation();

    const setAnswerStore = useAnswerStore((state) => state.setAnswerStore)

    const answer = [
        { text: `${t("answer21")}`, value: "N" },
        { text: `${t("answer22")}`, value: "S" },
        { text: `${t("answer23")}`, value: "S" },
        { text: `${t("answer24")}`, value: "N" }
    ]

    const navigate = useNavigate()

    const handleOnAnswer = (e) => {
        setDirection(1)
        setAnswerStore(e.target.value)
        navigate("/question3")
        return
    }

    return (
        <div className="flex flex-col font-prompt py-[24px] justify-between items-center h-dvh bg-[#E8E5E2] px-[32px]">
            <div className="flex flex-row justify-between w-full  ">
                <QuestionNav count={"2"} setDirection={setDirection} />
            </div>
            <div className="w-[200px]"><img src="/picQuestion/twoways.png" alt="pic" className="w-full" /></div>
            <div className="font-bold text-questionText text-[20px]">{t("question2")}</div>
            <div className="flex flex-col gap-[16px]">
                {
                    answer.map((answer, index) => {
                        return <Answer answer={answer.text} value={answer.value} key={index} action={handleOnAnswer} />
                    })
                }
            </div>
        </div>
    )
}
export default Question2