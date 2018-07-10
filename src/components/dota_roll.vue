<template>
    <div id="particles-js" class="dota-roll visible－window">
        <div class='pic-contain visible－window'>
            <img id="dota_bg" :src='randomBg' class="bg">
            <div class="bg-shadow visible－window"></div>
        </div>
        <div class="roll-pannel">
            <div class="roll" @click="addRollItem">
                Roll your fate
            </div>
            <div style="margin: 30px 0 30px 0;">
                <!--<div v-for="(item, index) in list" :key="index" class="roll-item">{{item.label + '&#12288;&#12288;&#12288;' + item.number}}</div>-->
                <div v-for="(item, index) in list" :key="index" class="roll-item">
                    <span class="desc">{{label(index)}}</span>
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'particles.js'
    export default {
        data () {
            return {
                list: [],
                randomBg: `static/img/dota/p_${(parseInt(Math.random() * 32) + 1)}.jpg`
            }
        },
        methods: {
            addRollItem () {
                if (this.list.length < 3) {
                    this.list.push(Math.trunc(Math.random() * 100))
                }
            },
            label (index) {
                let list = this.list
                if (list[index] === Math.max(...list)) {
                    return 'Lucky guy'
                }
                if (list[index] === Math.min(...list)) {
                    return 'Shit man'
                }
                return 'Ordinary boy'
            }
        },
        mounted () {
            particlesJS.load('particles-js', 'static/json/particles.json', function () {
                console.log('callback - particles-js config loaded')
            })
            // 为背景添加过渡
            // TODO 性能待提升
            setTimeout(function () {
                document.getElementById('dota_bg').classList.add('bg-transition')
            }, 50)
        }
    }
</script>
<style lang="less">
    .dota-roll {
        .pic-contain {
            position: absolute;
            overflow: hidden;
            z-index: -1;
            text-align: center;
            .bg {
                display: inline-block;
                opacity: .3;
                transform-origin: 50% 50%;
                transition: transform 15s, opacity 3s;
                height: 100%;
                transform: scale(1.08);
            }
            .bg-transition {
                opacity: 1;
                transform: scale(1);
            }
            .bg-shadow {
                position: absolute;
                top: 0;
                background-color: rgba(0,0,0,.4);
            }
        }
        .roll-pannel {
            position: absolute;
            left: 50%;
            top: 50%;
            padding: 30px 40px 0px 40px;
            width: 300px;
            text-align: center;
            transform: translate(-50%, -50%);
            background-color: rgba(50, 50, 50, 0.6);
            .roll {
                margin-bottom: 30px;
                width: 300px;
                height: 40px;
                overflow: hidden;
                font-weight: 500;
                line-height: 40px;
                border-radius: 2px;
                font-size: 13px;
                cursor: pointer;
                white-space: nowrap;
                background-color: rgba(70,175,95,0.9);
                color: #fff;
                transition: all .25s cubic-bezier(.165,.84,.44,1), opacity 1ms linear;
                &:hover {
                    background-color: rgba(90,225,125,0.9);
                }
            }
            .roll-item {
                border-bottom: 1px solid rgba(50, 50, 50, 0);
                padding: 10px 0 10px 60px;
                width: 240px;
                font-size: 15px;
                color: #ccc;
                text-align: left;
                transition: all .25s cubic-bezier(.165,.84,.44,1), opacity 1ms linear;
                &:hover {
                    cursor: pointer;
                    color: white;
                    background-color: rgba(50,50,50,0.6);
                }
                .desc {
                    display: inline-block;
                    width: 50%;
                }
            }
        }
        @media (max-width: 420px) {
            .pic-contain {
                .bg {
                    transform: scale(1.08) translate(calc(-50% + 50vw), calc(-50% + 50vh));
                }
            }
            .roll-pannel {
                width: 200px;
                .roll {
                    width: 200px;
                }
                .roll-item {
                    width: 160px;
                    padding-left: 40px;
                    .desc {
                        width: 60%;
                    }
                }
            }
        }
    }
</style>
