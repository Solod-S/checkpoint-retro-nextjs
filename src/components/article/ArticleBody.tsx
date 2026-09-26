import Image from "next/image";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { RetroFrame } from "@/components/ui/RetroFrame";

export function ArticleBody() {
  const redRocketSvg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%231f130b'/%3E%3Cpolygon points='400,80 340,320 460,320' fill='%23ff3b25'/%3E%3Ccircle cx='400' cy='120' r='20' fill='%23f4df19'/%3E%3Ctext x='400' y='380' fill='%23f1efe6' font-family='sans-serif' font-weight='900' font-size='28' text-anchor='middle'%3ERED ROCKET GAS STATION%3C/text%3E%3C/svg%3E";

  const officeSvg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%2310181b'/%3E%3Crect x='150' y='80' width='500' height='290' rx='8' fill='%23223136' stroke='%23485d64' stroke-width='4'/%3E%3Ctext x='400' y='230' fill='%23b7ff3c' font-family='monospace' font-size='24' text-anchor='middle'%3EINTERPLAY DEV OFFICE 1996%3C/text%3E%3C/svg%3E";

  return (
    <div className="article-body">
      {/* Intro paragraph with styled Dropcap */}
      <p className="article-paragraph article-paragraph--lead">
        <span className="article-dropcap">В</span>
        конце 1990-х небольшая студия Interplay рискнула сделать то, во что мало
        кто верил: большую изометрическую ролевую игру о мире после ядерной
        войны. Так родился Fallout — проект, объединивший настольные традиции,
        эстетику постапокалипсиса и взрослые темы, которые редко встречались в
        компьютерных играх того времени.
      </p>

      {/* Section 1 */}
      <section id="world" className="article-section">
        <h2 className="article-section__title">Мир после катастрофы</h2>
        <p className="article-paragraph">
          Идея Fallout родилась из интереса разработчиков к тому, как будет
          выглядеть общество после ядерной войны. Команда вдохновлялась «Безумным
          Максом», работами Р. А. Хайнлайна и настольными играми, где важнее не
          только сражения, но и выживание, моральный выбор и последствия
          решений.
        </p>

        {/* Inline Illustration */}
        <figure className="article-figure">
          <div className="article-figure__frame">
            <CornerBrackets variant="orange" size={8} />
            <div className="article-figure__image-wrap">
              <Image
                src={redRocketSvg}
                alt="Концепт-арт Red Rocket"
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="article-figure__image"
              />
            </div>
          </div>
          <figcaption className="article-figure__caption">
            Концепт-арт локации пустошей. Источник: архив Interplay / Black Isle
            Studios.
          </figcaption>
        </figure>

        {/* Quote Callout */}
        <blockquote className="article-quote">
          <RetroFrame brackets bracketVariant="orange" className="article-quote__frame">
            <div className="article-quote__icon" aria-hidden="true">
              “
            </div>
            <div className="article-quote__content">
              <p className="article-quote__text">
                «Мы хотели показать не просто пустыню с мутантами, а живой мир,
                где люди продолжают жить, торговать, воевать и строить надежды —
                даже после конца света».
              </p>
              <cite className="article-quote__author">
                — Тим Кейн, сооснователь проекта
              </cite>
            </div>
          </RetroFrame>
        </blockquote>
      </section>

      {/* Section 2 */}
      <section id="tabletop" className="article-section">
        <h2 className="article-section__title">От настольной игры к компьютеру</h2>
        <p className="article-paragraph">
          Механики Fallout во многом выросли из настольной RPG GURPS. Разработчики
          адаптировали сложную систему навыков, проверок и случайных событий,
          чтобы передать дух бумажных приключений в цифровой форме. Это позволило
          создавать нестандартные ситуации, где разговор мог быть не менее
          важен, чем бой.
        </p>

        <figure className="article-figure">
          <div className="article-figure__frame">
            <CornerBrackets variant="orange" size={8} />
            <div className="article-figure__image-wrap">
              <Image
                src={officeSvg}
                alt="Рабочее место разработчиков"
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="article-figure__image"
              />
            </div>
          </div>
          <figcaption className="article-figure__caption">
            Рабочее место разработчиков в Black Isle Studios. Источник: архив
            Interplay.
          </figcaption>
        </figure>
      </section>

      {/* Section 3 */}
      <section id="cult" className="article-section">
        <h2 className="article-section__title">Почему Fallout стал культовым</h2>
        <p className="article-paragraph">
          Fallout выделялся мрачной атмосферой, чёрным юмором и свободой выбора.
          Мир реагировал на действия игрока, а каждое решение могло привести к
          неожиданным последствиям. Игра показала, что постапокалипсис может быть
          не только про разрушение, но и про людей, их истории и попытки
          построить будущее.
        </p>
      </section>
    </div>
  );
}
