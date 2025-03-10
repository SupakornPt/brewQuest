const setResult = [
    {
        mbti: "ISTJ", descriptionTH: "มีระเบียบ, จริงจัง, และ เชื่อถือได้", descriptionEN: "Disciplined, earnest, and trustworthy.", sub: [
            { name: "BLACK", picture: "/menu/ThaiTea.jpg" },
            { name: "CLEAR HOJICHA", picture: "/menu/ThaiTea.jpg" }
        ]
    },
    {
        mbti: "ISFJ", descriptionTH: "อบอุ่น, ใส่ใจ, และ ดูแลคนอื่น", descriptionEN: "warm, caring, and considerate.", sub: [
            { name: "WHITE", picture: "/menu/ThaiTea.jpg" },
            { name: "BLACK HONEY", picture: "/menu/ThaiTea.jpg" },
            { name: "HOJICHA LATTE", picture: "/menu/ThaiTea.jpg" },
            { name: "MILK SALTED CARAMEL", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "INFJ", descriptionTH: "ลึกซึ้ง, มีอุดมการณ์, และ มองการณ์ไกล", descriptionEN: " thoughtful, ideal-driven, and forward-thinking.", sub: [
            { name: "BLACK HONEY", picture: "/menu/ThaiTea.jpg" },
            { name: "CLEAR MATCHA", picture: "/menu/ThaiTea.jpg" },
            { name: "HOJICHA LATTE", picture: "/menu/ThaiTea.jpg" },
            { name: "GREEN TEA LATTE", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "INTJ", descriptionTH: "ฉลาด, วางแผนล่วงหน้า, และ มีวิสัยทัศน์", descriptionEN: " smart, strategic, and visionary.", sub: [
            { name: "ESPRESSO", picture: "/menu/ThaiTea.jpg" },
            { name: "CLEAR MATCHA", picture: "/menu/ThaiTea.jpg" },
            { name: "CLEAR HOJICHA", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ISTP", descriptionTH: "นักทดลอง และ ชอบความท้าทาย", descriptionEN: " experimental and challenge-driven.", sub: [
            { name: "BLACK ORANGE", picture: "/menu/ThaiTea.jpg" },
            { name: "MIDNIGHT COCOA", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ISFP", descriptionTH: "อาร์ตติส, รักอิสระ, และ ชอบความสวยงาม", descriptionEN: " artist, independent, and beauty-loving.", sub: [
            { name: "MATCHA LATTE", picture: "/menu/ThaiTea.jpg" },
            { name: "MATCHA HONEY LEMON", picture: "/menu/ThaiTea.jpg" },
            { name: "GREEN TEA LATTE", picture: "/menu/ThaiTea.jpg" },
            { name: "HONEY LEMON SODA", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "INFP", descriptionTH: "อ่อนไหว, จินตนาการสูง, และ ชอบฝันกลางวัน", descriptionEN: " emotional, imaginative, and daydreamer.", sub: [
            { name: "SUMMER BREEZE", picture: "/menu/ThaiTea.jpg" },
            { name: "MATCHA HONEY LEMON", picture: "/menu/ThaiTea.jpg" },
            { name: "YUZU SPRING", picture: "/menu/ThaiTea.jpg" },
            { name: "HONEY LEMON SODA", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "INTP", descriptionTH: "นักวิเคราะห์, ฉลาด, และ อยากรู้อยากเห็น", descriptionEN: " critical thinker, intelligent, and exploratory.", sub: [
            { name: "CLEAR MATCHA", picture: "/menu/ThaiTea.jpg" },
            { name: "SPECIALTY BEANS", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ESTP", descriptionTH: "สายลุย, มั่นใจ, และ ชอบความตื่นเต้น", descriptionEN: " adventurous, confident, and excitement-loving.", sub: [
            { name: "ES-YEN", picture: "/menu/ThaiTea.jpg" },
            { name: "DIRTY", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ESFP", descriptionTH: "เฟรนลี่, ชอบปาร์ตี้, และ สนุกสนาน", descriptionEN: " friendly, party-loving, and entertaining.", sub: [
            { name: "THAI TEA", picture: "/menu/ThaiTea.jpg" },
            { name: "YUZU SPRING", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ENFP", descriptionTH: "กระตือรืนร้น และ ชอบลองของใหม่", descriptionEN: " enthusiastic and experimental.", sub: [
            { name: "SUN-RISE", picture: "/menu/ThaiTea.jpg" },
            { name: "YUZU SPRING", picture: "/menu/ThaiTea.jpg" },
            { name: "UME YUZU", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ENTP", descriptionTH: "ฉลาด, ชอบความท้าทาย, และ คิดนอกกรอบ", descriptionEN: " intelligent, challenge-driven, and creative.", sub: [
            { name: "CRAFT COCOA", picture: "/menu/ThaiTea.jpg" },
            { name: "UME YUZU", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ESTJ", descriptionTH: "ผู้นำ, จริงจัง, และ ชอบควบคุม", descriptionEN: " leader, focused, and controlling.", sub: [
            { name: "CAPPUCCINO", picture: "/menu/ThaiTea.jpg" },
            { name: "MIDNIGHT COCOA", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ESFJ", descriptionTH: "เป็นมิตร, ชอบช่วยเหลือ, และ รักสังคม", descriptionEN: " friendly, supportive, and sociable.", sub: [
            { name: "CLOUDY SUNSET", picture: "/menu/ThaiTea.jpg" },
            { name: "CARAMEL MACCHIATO", picture: "/menu/ThaiTea.jpg" },
            { name: "MILK SALTED CARAMEL", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ENFJ", descriptionTH: "มีเสน่ห์ และ เป็นแรงบันดาลใจให้คนอื่น", descriptionEN: " charming and inspiring.", sub: [
            { name: "SUN-SET", picture: "/menu/ThaiTea.jpg" },
            { name: "CLOUDY SUNSET", picture: "/menu/ThaiTea.jpg" },
        ]
    },
    {
        mbti: "ENTJ", descriptionTH: "นักวางกลยุทธ์, ฉลาด, และ มั่นใจ", descriptionEN: " strategist, smart, and confident.", sub: [
            { name: "DIRTY", picture: "/menu/ThaiTea.jpg" },
            { name: "SPECIALTY BEANS", picture: "/menu/ThaiTea.jpg" },
        ]
    },
]

export default setResult