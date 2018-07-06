<template>
    <div id="particles-js">
        <div class="dota-pic-contain visible－window">
            <img id="dota_bg" :src='"../../"+randomBg + ".jpg"' class="dota-bg">
            <div class="bg-shadow visible－window"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style lang="less">
    .dota-pic-contain {
        position: absolute;
        overflow: hidden;
        z-index: -1;
        text-align: center;
        .dota-bg {
            display: inline-block;
            opacity: 0;
            transform-origin: 50% 50%;
            transition: transform 15s, opacity 3s;
            height: 115%;
        }
        .bg-transition {
            opacity: 1;
            transform: translateX(10px) scale(1.08);
        }
        .bg-shadow {
            position: absolute;
            top: 0;
            background-color: rgba(0,0,0,.4);
        }
    }
</style>
