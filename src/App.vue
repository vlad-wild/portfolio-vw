<script lang="ts" setup>
import Footer from "@components/footer.vue";
import Headerbar from "@components/headerbar.vue";
</script>

<template>
    <vue-particles id="tsparticles" style="z-index: -1; position: absolute; top: 0; left: 0;" :options="{
        background: {
            color: '#000011',
        },
        particles: {
            color: '#7878784d',
            number: {
                value: 50,
            },
            links: {
                color: '#7878784d',
                distance: 125,
                enable: true,
                triangles: {
                    enable: true,
                    opacity: 0.1,
                },
            },
            move: {
                enable: true,
                speed: 2,
            },
            size: {
                value: 1,
            },
            shape: {
                type: 'circle',
            },
        }
    }" />
    <div class="view">
        <Headerbar />
        <RouterView />
        <Footer />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=WDXL+Lubrifont+SC&display=swap');

body {
    margin: 0;
}

.view {
    font-family: "Rubik", sans-serif;
    color: rgb(219, 219, 219);

}

a {
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}
</style>
