import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useState } from "react"
import useNameStore from "../store/NameStore"
import { useTranslation } from "react-i18next";
import "../../src/i18n"

const LandingPage = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const setNameCustomerStore = useNameStore((state) => state.setNameCustomerStore)
    const setLanguage = useNameStore((state) => state.setLanguage)
    const navigate = useNavigate()

    const [nameCustomer, setNameCustomer] = useState("")

    const handleOnButton = () => {
        setNameCustomerStore(nameCustomer)
        navigate("/story")
    }

    const handleOnInput = (e) => {
        setNameCustomer(`${e.target.value}`)
    }


    const handleOnTh = () => {
        setLanguage(false)
        changeLanguage("th")
    }

    const handleOnEn = () => {
        setLanguage(true)
        changeLanguage("en")
    }

    return (
        <div className="flex flex-col justify-between items-center h-screen bg-[#E8E5E2] font-prompt ">
            {/* Header */}
            <div className="flex flex-row w-full pr-[24px] font-prompt text-[16px] gap-[10px] justify-end mt-[24px] mr-[24px]">
                <div><button onClick={handleOnTh}>TH</button></div>
                <div>|</div>
                <div><button onClick={handleOnEn}>EN</button></div>
            </div>
            {/* CONTENT */}
            <div className="flex flex-col gap-[40px] items-center px-[32px]">
                <div className="flex flex-col gap-[8px] items-center">
                    <div className="text-[56px] font-bold">BrewQuest</div>
                    <div className="text-[24px]">{t("welcome")}</div>
                </div>
                <div>
                    <input onChange={handleOnInput} type="text" placeholder={t("placeholder")} className=" text-[16px] border border-[#C0BDBA] rounded-[6px] px-[12px] py-[11px] w-[329px] bg-white" />
                </div>
                <div>
                    <Button name={t("buttonLandingPage")} action={handleOnButton} />
                </div>
            </div>
            {/* FOOTER */}
            <footer className=" font-bold text-[16px] mb-[24px]">
                By RE_Coffee
            </footer>
        </div>
    )
}
export default LandingPage