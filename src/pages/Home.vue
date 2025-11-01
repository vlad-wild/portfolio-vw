<script lang="ts" setup></script>

<template>
    <div class="maininfo">
        <img class="img" src="@assets/iam.jpg" alt="Фото Влада Шубина" />
        <h1 class="name">Влад Шубин</h1>
        <h3 class="nickname">(Vlad Wild)</h3>
        <h3 class="info">Fullstack-разработчик | Умный дом и автоматизация<br />
            26 лет, Краснодар</h3>
    </div>
    <div class="about">
        <div class="frame">
            <h3>Привет, я Влад! 👋</h3>
            <p>
                Недавно переехал в Краснодар — и это стало новой главой в моей жизни.
                Я — начинающий <strong>fullstack-разработчик</strong>, увлечённый технологиями, автоматизацией и
                созданием полезных вещей.
            </p>
            <p>
                Программирование для меня — это не просто код, а возможность решать задачи,
                упрощать процессы и делать технологии ближе к людям.
                Сейчас активно ищу возможность начать карьеру в IT — и готов расти, учиться и вкладываться в проект.
            </p>
            <p>
                Увлекаюсь <strong>IoT-устройствами</strong> и «умным домом»:
                настраиваю датчики, контролирую климат и освещение, экспериментирую с Arduino.
                Также администрирую домашнюю сеть: роутер, сервер на Proxmox, виртуальные машины,
                Docker-контейнеры и автоматизированную инфраструктуру.
            </p>
            <p>
                <strong>Буду рад сотрудничеству</strong> — особенно если речь о чём-то интересном,
                где можно расти и создавать настоящее.
            </p>
        </div>
    </div>
    <div class="stacktitle">
        <h1>
            Стек разработки<br />
            и навыки
        </h1>
    </div>
    <div class="stack">
        <div class="stackitem">
            <img src="@assets/icons/frontend.png" />
            <div class="stackcont">
                <h3>Front-end</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>JS</li>
                    <li>TS</li>
                    <li>Vue 3</li>
                    <li>Webpack</li>
                </ul>
                <p class="description">
                    Основной фокус — создание удобных и отзывчивых интерфейсов.
                    Опыт работы с современными инструментами и адаптивной вёрсткой.
                    Стремлюсь к чистому коду и хорошему пользовательскому опыту.
                </p>
            </div>
        </div>
        <div class="stackitem">
            <img src="@assets/icons/backend.png" />
            <div class="stackcont">
                <h3>Back-end</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Nuxt 3</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Sequelize</li>
                </ul>
                <p class="description">
                    Разработка серверной логики, REST API и работа с базами данных.
                    Практикуюсь в создании масштабируемых и надёжных сервисов.
                    Умею подключать авторизацию и обработку запросов.
                </p>
            </div>
        </div>
        <div class="stackitem">
            <img src="@assets/icons/devops.png" />
            <div class="stackcont">
                <h3>DevOps</h3>
                <ul>
                    <li>Docker</li>
                    <li>Proxmox</li>
                    <li>Linux</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <li>CI/CD</li>
                </ul>
                <p class="description">
                    Настройка серверов, автоматизация сборок и деплоя.
                    Имею практический опыт в виртуализации и администрировании
                    домашней инфраструктуры. Уверенно чувствую себя в терминале.
                </p>
            </div>
        </div>
        <div class="stackitem">
            <img src="@assets/icons/other.png" />
            <div class="stackcont">
                <h3>Прочее</h3>
                <ul>
                    <li>Rust</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Arduino</li>
                </ul>
                <p class="description">
                    Изучаю системное программирование и IoT. Увлекаюсь
                    созданием умных устройств и автоматизацией.
                    Постоянно пробую новые технологии и расширяю кругозор.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.maininfo {
    width: 100%;
    height: 100vh;

    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img {
        width: 128px;
        height: 128px;
        object-fit: cover;
        border-radius: 128px;
    }

    .name {
        margin-bottom: 0;
        font-size: 3rem;
        font-weight: 400;
    }

    .nickname {
        margin-top: 0;
        margin-bottom: 16px;
        color: #888;
        font-weight: 200;
    }

    .info {
        text-align: center;
        line-height: 32px;
    }
}

.about {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: aliceblue;
    color: rgb(20, 20, 20);

    padding: 8px;
    box-sizing: border-box;

    .frame {
        max-width: 900px;
        width: max-content;
        font-size: 20px;
    }
}

.stacktitle {
    width: max-content;
    margin: 60px auto;
    text-align: center;
}

.stack {
    background-color: aliceblue;
    color: rgb(20, 20, 20);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.stackitem {
    margin: 48px 24px;
    display: flex;
    align-items: center;
    gap: 48px;

    img {
        height: 128px;
    }

    &:nth-child(odd) {
        flex-direction: row-reverse;
    }

    .stackcont {
        max-width: 400px;
        padding: 20px;
        box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
        border-radius: 10px;

        .description {
            margin-top: 16px;
            font-size: 0.95rem;
            color: #555;
            line-height: 1.5;
        }
    }

    // Адаптивность для мобильных
    @media (max-width: 768px) {
        flex-direction: column !important;
        // text-align: center;
        gap: 16px;

        img {
            order: 1; // картинка снизу
        }

        .stackcont {
            order: 2; // текст сверху
        }

        &:nth-child(odd) {
            // отменяем row-reverse на мобильных
            flex-direction: column !important;
        }
    }

}
</style>
