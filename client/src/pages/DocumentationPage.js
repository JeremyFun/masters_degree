import React from "react"
import Title from "antd/es/typography/Title";

const DocumentationPage = () => {
    return (
        <div className="home">
            <Title>Підручник від Владислава Яція з API Google Sheets Javascript.</Title>
            <Title level={3}>Ось що вам потрібно, щоб зробити цю роботу:</Title>
            <ul>
                <li><Title level={4}>Електронна таблиця та її ідентифікатор</Title></li>
                <li><Title level={4}>Маркер для відправки на Sheets API з правильними даними</Title></li>
                <li><Title level={4}>Запит fetch () із правильною інформацією (тіло, заголовки автентифікації)</Title>
                </li>
            </ul>
            <Title level={3}>1. Ідентифікатор електронної таблиці</Title>
            <Title level={4}>Це проста частина. Перейдіть на сторінку sheets.google.com, увійдіть за допомогою свого облікового
                запису Google і створіть електронну таблицю. Коли ви побачите електронну таблицю, ідентифікатор
                електронної таблиці буде в URL-адресі , як показано нижче.</Title>
            <img src={'/img/screen.png'} style={{width: "80%"}}/>
            <Title level={4}>Отже, наш ідентифікатор у цьому випадку:<strong>1nIrrHDVn0Jx3AbyWowfvLoBkvHg7jqvtP5LH1yRI2Ks</strong></Title>
            <Title level={4}>Скопіюйте його та вставте у адмін панелі.</Title>
            <Title level={3}>2. Token
                Щоб отримати токен від Google, вам знадобиться система Google OAuth. Ми отримаємо токен із майданчика
                Google Auth2:</Title>
            <a href="https://developers.google.com/oauthplayground/"><Title level={4} style={{color: "blue"}}>Перейдіть за цим посиланням</Title></a>
            <Title level={4}>Перейдіть на веб-сайт, на який посилається вище.</Title>
            <img src={'/img/screen2.png'} style={{width: "80%"}}/>
            <Title level={4}>Тепер у лівій колонці знайдіть API Google Sheets V4:</Title>
            <Title level={4}>Клацніть на нього, а потім натисніть на область: https://www.googleapis.com/auth/</Title>
            <img src={'/img/screen3.png'} style={{width: "50%"}}/>
            <Title level={4}><strong>Перевірка</strong> повинна з'явитися зліва від нього.</Title>
            <Title level={4}>Нарешті, натисніть <strong>Авторизувати API. Це синя кнопка вгорі.</strong></Title>
            <Title level={4}>Вас попросять увійти в систему Google і надати доступ. Увійдіть у систему, а потім натисніть <strong>Дозволити</strong>, щоб ви могли використовувати область.</Title>
            <Title level={4}>Після входу та авторизації ви отримаєте <strong>код авторизації</strong>, як показано нижче. <strong>Клацніть
                Код авторизації Exchange для токенів.</strong></Title>
            <img src={'/img/screen4.png'} style={{width: "50%"}}/>
            <Title level={4}>
                Попередження: Обов’язково перейдіть до кроку 2, вам не потрібно ДО 3.
                І це все! Ви щойно отримали “маркер доступу”. Скопіюйте його та вставте у адмін панелі! Технічно ми готові оновити нашу електронну таблицю. Тож давайте вперед і зробимо це!
            </Title>
        </div>
    )
}

export default DocumentationPage
