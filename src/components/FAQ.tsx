import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких районах Костромской области вы работаете?",
    answer:
      "Мы работаем по всей Костромской области: Кострома, Буй, Галич, Нерехта, Шарья, Мантурово и другие районы. Выезжаем на участок для бесплатного замера и консультации.",
  },
  {
    question: "Сколько времени занимает строительство дома под ключ?",
    answer:
      "Сроки зависят от типа и площади дома. Каркасный дом 100 м² строится за 3–4 месяца, брусовой — 4–6 месяцев, бревенчатый — 6–8 месяцев. Работаем строго по договору с фиксированными сроками.",
  },
  {
    question: "Что входит в строительство «под ключ»?",
    answer:
      "Полный цикл: проектирование, фундамент, возведение стен и кровли, монтаж окон и дверей, подключение инженерных систем (электрика, водоснабжение, отопление), чистовая отделка. Вы получаете готовый дом, в который можно сразу въехать.",
  },
  {
    question: "Из какого дерева строите?",
    answer:
      "Используем преимущественно местную костромскую древесину: сосну и ель. Это сухой, хорошо подготовленный материал, прошедший естественную выдержку. Лес заготавливается в зимний период для лучшего качества.",
  },
  {
    question: "Есть ли гарантия на построенный дом?",
    answer:
      "Да, даём письменную гарантию: на конструктив — 5 лет, на кровлю — 3 года, на инженерные системы — 2 года. Все условия фиксируются в договоре. Выезжаем на гарантийные случаи в течение 5 рабочих дней.",
  },
  {
    question: "Как начать строительство?",
    answer:
      "Позвоните или напишите нам — договоримся о выезде на участок. Замер и первичная консультация бесплатны. После этого подготовим проект и смету в течение 5 дней. Строительство начинаем после подписания договора и первого платежа.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}