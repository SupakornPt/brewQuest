import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import useNameStore from "../store/NameStore"
import useAnswerStore from "../store/answerStore"
import { useTranslation } from "react-i18next"

const Story = () => {
    const { t } = useTranslation();
    const nameCustomerStore = useNameStore((state) => state.nameCustomerStore)
    const clearAnswerStore = useAnswerStore((state) => state.clearAnswerStore)
    console.log('nameCustomerStore', nameCustomerStore)

    const navigate = useNavigate()

    const handleOnButton = () => {
        clearAnswerStore()
        navigate("/question1")
    }
    return (
        <div className="flex flex-col font-prompt items-center h-screen bg-[#E8E5E2] py-[32px] justify-center">
            <div className="flex flex-col gap-[56px]">
                <div><img src="https://picsum.photos/350/200" alt="pic" /></div>
                <div className="text-[24px] ">{t("hello")} {nameCustomerStore}</div>
                <div className="text-[18px] text-answerText w-[329px]">{t("story")}</div>
            </div>

            <div className="absolute bottom-0 mb-[56px]">
                <Button name={t("buttonStory")} action={handleOnButton} />
            </div>
        </div>
    )
}
export default Story