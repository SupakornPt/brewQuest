import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


const resources = {
    en: {
        translation: {
            "welcome": "Finding the right menu",
            "placeholder": "Fill your name",
            "buttonLandingPage": "Start journey",
            "hello": "Hello",
            "item": "Item",
            "back": "Back",
            "story": "It is said that… the right drink reflects the personality of the drinker. But not everyone can easily find it. Set out on a journey to find your perfect menu via the MBTI questionnaire and unlock the legendary drinks that await!Are you ready?",
            "buttonStory": "Let’s go",
            "question1": "Got a treasure map, what do you do?",
            "answer11": "Study the map carefully and plan your trip before you leave.",
            "answer12": "Invite your friends to join the adventure right now.",
            "answer13": "Find a way to get there as quickly as possible, even if it means taking risks.",
            "answer14": "Let me think first whether it is worth going or not.",
            "question2": "Two paths: one has risky sign, one safe but longer. Which do you choose?",
            "answer21": "Dangerous paths are interesting and may have shortcuts.",
            "answer22": "A safe path may be long, but it surely leads to the destination.",
            "answer23": "Gather more information, consult the team, or check the map.",
            "answer24": "Trust your instincts and choose the right path.",
            "question3": "You and your team are captured by pirates. How will you escape?",
            "answer31": "Use logic and carefully plan your escape.",
            "answer32": "Try to negotiate and soften their hearts.",
            "answer33": "Use physical abilities to escape with strength.",
            "answer34": "Deceive the pirates into fighting among themselves and escape during the confusion.",
            "question4": "You must solve a puzzle to unlock the treasure door. What will you do?",
            "answer41": "Analyze all the information carefully.",
            "answer42": "Try and fail, then find a new way if needed.",
            "answer43": "Use creativity to try new ways of solving the puzzle.",
            "answer44": "Divide tasks so the team can solve the puzzle together.",
            "result": "Your adventure is complete!",
            "suggest": ", you are best matched with a",
            "trig": "en"

        }
    },
    th: {
        translation: {
            "welcome": "ตามหาเมนูที่ใช้สำหรับคุณ",
            "placeholder": "กรุณากรอกชื่อ",
            "buttonLandingPage": "เริ่มผจญภัย",
            "hello": "สวัสดี",
            "item": "ข้อที่",
            "back": "ย้อนกลับ",
            "story": "ว่ากันว่า…เครื่องดื่มที่ใช่สะท้อนตัวตนของผู้ดื่ม แต่ไม่ใช่ทุกคนจะค้นพบมันได้ง่าย ๆ ออกเดินทางเพื่อค้นหาเมนูที่เหมาะกับคุณผ่านแบบสอบถาม MBTI และปลดล็อกเครื่องดื่มในตำนานที่รอคอย! คุณพร้อมหรือยัง?",
            "buttonStory": "ออกเดินทาง",
            "question1": "ได้รับแผนที่ขุมทรัพย์คุณจะทำอย่างไร",
            "answer11": "ศึกษาแผนที่อย่างละเอียด วางแผนก่อนออกเดินทาง",
            "answer12": "ชวนเพื่อนๆมาผจญภัยด้วยกันทันที",
            "answer13": "คิดหาทางไปถึงให้เร็วที่สุด แม้จะต้องเสี่ยง",
            "answer14": "ขอคิดก่อนว่าคุ้มค่าที่จะไปไหม",
            "question2": "มีทางแยกสองทาง ทางหนึ่งมีป้ายเตือนอันตราย อีกทางปลอดภัยแต่ไกลกว่า คุณเลือกเส้นทางไหน",
            "answer21": "เส้นทางอันตรายน่าสนใจ และอาจมีทางลัด",
            "answer22": "เส้นทางปลอดภัย แม้ไกลแต่ถึงเป้าหมายชัวร์",
            "answer23": "หาข้อมูลเพิ่มเติม ปรึกษาทีมหรือดูแผนที่",
            "answer24": "ใช้สัญชาตญาณเลือกทางที่ใช่",
            "question3": "คุณและทีมถูกโจรสลัดจับตัว คุณจะหนีอย่างไร",
            "answer31": "ใช้ตรรกะและวางแผนหาทางหนีที่รอบคอบ",
            "answer32": "พยายามพูดคุยเจรจา ทำให้พวกเขาใจอ่อน",
            "answer33": "ใช้ความสามารถด้านกายภาพ หลบหนีด้วยพละกำลัง",
            "answer34": "หลอกล่อให้โจรสลัดทะเลาะกันเอง แล้วใช้จังหวะนี้หนีไป",
            "question4": "คุณต้องไขปริศนาเพื่อเปิดประตูสมบัติ คุณจะทำอย่างไร",
            "answer41": "วิเคราะห์ข้อมูลทุกอย่างให้แน่ใจ",
            "answer42": "ลองผิดลองถูก ถ้าผิดก็หาทางใหม่",
            "answer43": "ใช้วิธีสร้างสรรค์ ทดลองแก้ปริศนาแบบใหม่ๆ",
            "answer44": "แบ่งหน้าที่ให้ทีมช่วยกันแก้ปริศนา",
            "result": "การผจญภัยของคุณสำเร็จแล้ว",
            "suggest": ", คุณเหมาะกับเมนู",
            "trig": "th"
        }
    }
};
const savedLanguage = localStorage.getItem("language") || "en";

i18n
    .use(LanguageDetector) // ✅ เพิ่ม Language Detector
    .use(initReactI18next) // เชื่อมต่อ i18next กับ React
    .init({
        resources, // โหลดข้อความที่แปลไว้
        lng: savedLanguage, // กำหนดภาษาหลัก
        fallbackLng: "en", // ถ้าภาษาที่เลือกไม่มี ใช้ภาษาอังกฤษแทน
        interpolation: {
            escapeValue: false // ปิดการ escape HTML เพื่อให้ใช้ HTML ในข้อความแปลได้
        }
    });

export default i18n;
