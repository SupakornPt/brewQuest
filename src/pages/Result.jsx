import useAnswerStore from "../store/answerStore"
import useNameStore from "../store/NameStore"
import { FacebookShareButton, FacebookIcon } from "react-share"
import setResult from "../result/setResult"
import { useState } from "react"
import { useTranslation } from "react-i18next"


const Result = () => {
    const { t } = useTranslation();

    const nameCustomerStore = useNameStore((state) => state.nameCustomerStore)
    const answerStore = useAnswerStore((state) => state.answerStore)
    const shareUrl = "https://brew-quest.vercel.app/"
    const [imageUrl, setImageUrl] = useState(null);
    // const captureRef = useRef(null);


    console.log('shareUrl', shareUrl)
    const languageEn = useNameStore((state) => state.languageEn)


    const getMenu = () => {
        const menu = setResult.filter(data => data.mbti === answerStore)
        return menu
    }

    const result = getMenu()

    const randomIndexMenu = () => {
        const randomIndex = Math.floor(Math.random() * result[0]?.sub?.length)
        return randomIndex
    }

    const index = randomIndexMenu()

    // const captureScreenshot = async () => {
    //     if (captureRef.current) {
    //         const canvas = await html2canvas(captureRef.current);
    //         const imgData = canvas.toDataURL("image/png"); // แปลงเป็น Base64
    //         setImageUrl(imgData);
    //     }
    // };


    console.log('result', result)
    console.log('answerStore', answerStore)
    console.log('index', index)
    return (
        <div className="flex flex-col font-prompt items-center h-screen bg-[#E8E5E2] justify-center px-[32px]">
            <div className="flex flex-col gap-[56px] items-center ">
                <div className="w-[400px]"><img src={`${result[0]?.sub[index]?.picture}`} alt="pic" className="w-full" /></div>
                <div className="font-bold text-[24px]">{t("result")}</div>
                <div className="font-bold text-[18px]">
                    {
                        languageEn
                            ? `Traits: ${result[0]?.descriptionEN}.`
                            : `บุคลิก: ${result[0]?.descriptionTH}.`

                    }
                </div>
                <div className="font-bold text-[18px]"  >
                    {nameCustomerStore} {t("suggest")} {result[0]?.sub[index]?.name}."
                </div>

            </div>


            <div className="bg-button font-bold text-[24px] text-white rounded-[10px] py-[16px] px-[24px] font-prompt mt-[56px] ">
                <FacebookShareButton quote="Hello" hashtag="#RE_Coffee" url={shareUrl} className="flex flex-row items-center gap-[8px]">
                    <FacebookIcon size="36px" round />
                    <div>Facebook share</div>
                </FacebookShareButton>
            </div>


        </div >
    )
}
export default Result

