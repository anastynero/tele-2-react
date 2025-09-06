import Button from "./Button";

export default function Tariff() {
  return (
    <section className='tariff'>
        <section className = 'tariff_left-side'>
            <h2>Заходите на сайт Tele2</h2>
            <p>Перейдите в магазин, оформите тариф «Мой онлайн+» 
                и на страничке активации введите ваш промокод. Готово! </p>
            <Button text="Оформить тариф"/>
        </section>
        <section className = 'tariff_right-side'>
            <img src="/img/tariff.png"></img>
        </section>
    </section>
  );
}