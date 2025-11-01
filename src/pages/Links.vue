<script lang="ts" setup>
import VK from "@assets/svg/VkontakteFill.svg";
import TG from "@assets/svg/TelegramFill.svg";
import GH from "@assets/svg/GithubFill.svg";
</script>

<template>
    <div class="links">
        <a class="link" target="_blank" href="https://vk.com/wild.vlad">
            <VK></VK>
            <b>Вконтаке</b>
        </a>
        <a class="link" target="_blank" href="https://t.me/wild_vlad">
            <TG></TG>
            <b>Telegram</b>
        </a>
        <a class="link" target="_blank" href="https://github.com/vlad-wild">
            <GH></GH>
            <b>Github</b>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.links {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 16px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 32px;
    }

    @media (max-width: 480px) {
        gap: 24px;
    }

    .link {
    position: relative;
    display: inline-block;
    width: 128px;
    height: 128px;
    text-decoration: none;

    // Десктоп: svg на всю ширину
    svg {
        width: 128px;
        height: 128px;
        fill: aliceblue;
        transition: 0.3s ease;

        &:hover {
            transform: scale(1.3);
        }
    }

    // Десктоп: текст справа, появляется по ховеру
    b {
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%) translateX(-10px);
        margin-left: 8px;
        white-space: nowrap;
        color: aliceblue;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    &:hover {
        b {
            opacity: 1;
            visibility: visible;
            transform: translateY(-50%) translateX(0);
        }
    }

    // 📱 Мобильные: делаем .link flex-контейнером, чтобы разместить иконку и текст
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 96px;
        height: 96px;
        gap: 8px; // расстояние между иконкой и текстом

        svg {
            width: 96px;
            height: 96px;

            &:hover {
                transform: scale(1.1);
            }
        }

        b {
            // Полностью меняем поведение текста
            position: static !important;
            transform: none !important;
            margin-left: 0;
            opacity: 1 !important;
            visibility: visible !important;
            text-align: center;
            font-size: 16px;
            color: aliceblue;
            white-space: normal;
            max-width: 100px;
        }
    }

    @media (max-width: 480px) {
        width: 64px;
        height: 64px;
        gap: 6px;

        svg {
            width: 64px;
            height: 64px;
        }

        b {
            font-size: 14px;
            max-width: 80px;
        }
    }
}

}
</style>
