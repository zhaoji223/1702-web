<template>
    <div id="particles-js">
        <div class='dota-pic-contain visible－window'>
            <img id="dota_bg" :src='randomBg' class="dota-bg">
            <div class="bg-shadow visible－window"></div>
        </div>
    </div>
</template>

<script>
    import 'particles.js'
    export default {
        mounted () {
            particlesJS.load('particles-js', 'static/json/particles.json', function () {
                console.log('callback - particles-js config loaded')
            })
            // 为背景添加过渡
            // TODO 性能待提升
            setTimeout(function () {
                document.getElementById('dota_bg').classList.add('bg-transition')
            }, 50)
        },
        computed: {
            randomBg: function () {
                return `static/img/dota/p_${(parseInt(Math.random() * 32) + 1)}.jpg`
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
            opacity: .3;
            transform-origin: 50% 50%;
            transition: transform 15s, opacity 3s;
            height: 100%;
            -webkit-transform: scale(1.08);
            -moz-transform: scale(1.08);
            -ms-transform: scale(1.08);
            -o-transform: scale(1.08);
            transform: scale(1.08);
        }
        .bg-transition {
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
        }
        .bg-shadow {
            position: absolute;
            top: 0;
            background-color: rgba(0,0,0,.4);
        }
    }
</style>
