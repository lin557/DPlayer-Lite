<template>
<div class="dplayer-wrap">
    <div class="dplayer" ref="dplayer"><button class="load" v-on:click="load">Load demo</button></div>
</div>
</template>
<script>
export default {
    props: {
        immediate: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Object,
            default: () => ({
                autoplay: false,
                theme: '#FADFA3',
                loop: true,
                lang: 'zh-cn',
                hotkey: true,
                preload: 'auto',
                logo: 'https://i.loli.net/2019/06/06/5cf8c5d94521136430.png',
                volume: 0.7,
                mutex: true,
                screenshot: true,
                video: {
                    url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
                    pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
                    type: 'auto'
                },
                contextmenu: [
                    {
                        text: 'custom1',
                        link: 'https://github.com/DIYgod/DPlayer'
                    },
                    {
                        text: 'custom2',
                        click: (player) => {
                            console.log(player);
                        }
                    }
                ],
                highlight: [
                    {
                        time: 20,
                        text: '这是第 20 秒'
                    },
                    {
                        time: 120,
                        text: '这是 2 分钟'
                    }
                ]
            })
        },
    },
    methods: {
        load: function () {
            this.options.container = this.$refs.dplayer;
            setTimeout(() => {
                this.dplayer = new window.DPlayer(this.options);
            }, 0);
        }
    },
    mounted: function () {
        if (this.immediate) {
            setTimeout(() => {
                this.dplayer = new window.DPlayer(this.options);
            }, 0);
        }
    },
    beforeDestroy: function () {
        this.dplayer && this.dplayer.destroy();
    }
}
</script>
<style>
</style>
