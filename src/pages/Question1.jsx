import { useNavigate } from "react-router-dom"
import Answer from "../components/Answer"
import QuestionNav from "../components/QuestionNav"
import useAnswerStore from "../store/answerStore"
import { useTranslation } from "react-i18next"

const Question1 = () => {
    const { t } = useTranslation();

    const setAnswerStore = useAnswerStore((state) => state.setAnswerStore)

    const answer = [
        { text: `${t("answer11")}`, value: "I" },
        { text: `${t("answer12")}`, value: "E" },
        { text: `${t("answer13")}`, value: "E" },
        { text: `${t("answer14")}`, value: "I" }
    ]

    const navigate = useNavigate()

    const handleOnAnswer = (e) => {
        setAnswerStore(e.target.value)
        navigate("/question2")
        return
    }



    return (
        <div className="flex flex-col font-prompt py-[24px] justify-between items-center min-h-dvh bg-[#E8E5E2] px-[32px]">
            <div className="flex flex-row justify-between w-full  ">
                <QuestionNav count={"1"} />
            </div>
            <div className="w-[200px]"><img src="/picQuestion/map.png" alt="pic" className="w-full" /></div>
            <div className="font-bold text-questionText text-[24px]">{t("question1")}</div>
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