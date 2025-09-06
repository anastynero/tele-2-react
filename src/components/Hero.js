import Button from "./Button";

export default function Hero() {
  return (
    <section className='hero'>
        <article className="left-block">
            <p>Акция продлится с 1 по 20 сентября</p>
            <h1>это ваша выгода!</h1>
            <p>Тариф «Мой онлайн+» и 1 ТБ трафика в подарок для новых абонентов</p>
            <Button text='Принять участие'/>
        </article>
        <article className="right-block">
            <img src="/img/hero.png"/>
        </article>
    </section>
  );
}