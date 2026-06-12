import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const houseTypes = [
  { id: "frame", label: "Каркасный", pricePerSqm: 35000 },
  { id: "timber", label: "Из бруса", pricePerSqm: 45000 },
  { id: "log", label: "Бревенчатый", pricePerSqm: 55000 },
]

const foundations = [
  { id: "pile", label: "Свайный", price: 120000 },
  { id: "strip", label: "Ленточный", price: 220000 },
  { id: "slab", label: "Плита", price: 350000 },
]

const finishOptions = [
  { id: "rough", label: "Черновая отделка", multiplier: 1 },
  { id: "standard", label: "Стандартная", multiplier: 1.25 },
  { id: "comfort", label: "Комфорт", multiplier: 1.5 },
]

const floorOptions = [
  { id: "1", label: "1 этаж", multiplier: 1 },
  { id: "1.5", label: "1,5 этажа", multiplier: 1.35 },
  { id: "2", label: "2 этажа", multiplier: 1.6 },
]

export function Calculator() {
  const [houseType, setHouseType] = useState(houseTypes[1])
  const [area, setArea] = useState(100)
  const [foundation, setFoundation] = useState(foundations[0])
  const [finish, setFinish] = useState(finishOptions[0])
  const [floors, setFloors] = useState(floorOptions[0])

  const basePrice = houseType.pricePerSqm * area * floors.multiplier * finish.multiplier
  const total = basePrice + foundation.price

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(price)

  return (
    <section id="calculator" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стоимость строительства</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Калькулятор</HighlightedText>
            <br />
            вашего дома
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Рассчитайте примерную стоимость строительства. Точная смета — после выезда на участок.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-10">
            {/* House type */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide">Тип дома</p>
              <div className="grid grid-cols-3 gap-3">
                {houseTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setHouseType(type)}
                    className={`py-3 px-4 text-sm border transition-all duration-200 ${
                      houseType.id === type.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground/40 text-foreground"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium tracking-wide">Площадь дома</p>
                <span className="text-2xl font-medium">{area} м²</span>
              </div>
              <input
                type="range"
                min={60}
                max={400}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-px bg-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>60 м²</span>
                <span>400 м²</span>
              </div>
            </div>

            {/* Floors */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide">Этажность</p>
              <div className="grid grid-cols-3 gap-3">
                {floorOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFloors(f)}
                    className={`py-3 px-4 text-sm border transition-all duration-200 ${
                      floors.id === f.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground/40 text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Foundation */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide">Фундамент</p>
              <div className="grid grid-cols-3 gap-3">
                {foundations.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFoundation(f)}
                    className={`py-3 px-4 text-sm border transition-all duration-200 ${
                      foundation.id === f.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground/40 text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide">Уровень отделки</p>
              <div className="grid grid-cols-3 gap-3">
                {finishOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinish(f)}
                    className={`py-3 px-4 text-sm border transition-all duration-200 ${
                      finish.id === f.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground/40 text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-foreground text-primary-foreground p-10">
              <p className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase mb-8">Ориентировочная стоимость</p>

              <div className="space-y-4 mb-8 border-b border-primary-foreground/20 pb-8">
                <div className="flex justify-between text-sm text-primary-foreground/70">
                  <span>Строительство ({houseType.label}, {area} м²)</span>
                  <span>{formatPrice(basePrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-primary-foreground/70">
                  <span>Фундамент ({foundation.label})</span>
                  <span>{formatPrice(foundation.price)}</span>
                </div>
              </div>

              <div className="flex items-end justify-between mb-10">
                <p className="text-primary-foreground/70 text-sm">Итого</p>
                <p className="text-4xl font-medium leading-none">{formatPrice(total)}</p>
              </div>

              <p className="text-primary-foreground/50 text-xs leading-relaxed mb-8">
                Расчёт является ориентировочным. Точная стоимость определяется после выезда специалиста на участок и составления сметы.
              </p>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
              >
                Получить точный расчёт
                <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
