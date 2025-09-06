import Button from "./Button";

export default function Steps() {
  return (
    <section className="steps">
        <h2>Несколько шагов и 1 ТБ — ваш</h2>
        <Button text='Выслать промокод'/>
        <section className="steps-list">
            <article className="steps-item">
                <div>1</div>
                <p>Ведите свой номер телефона, затем дождитесь 
                    смс с промокодом для получения Тб</p>
            </article>
            <article className="steps-item">
                <div>2</div>
                <p>Перейдите на сайт Tele2 и активируйте 
                    промокод при подключении на тариф «Мой Онлайн+»</p>
            </article>
            <article className="steps-item">
                <div>3</div>
                <p>Используйте свой подарочный ТБ от Tele2 в течение всего года</p>
            </article>
        </section>
    </section>
  );
}