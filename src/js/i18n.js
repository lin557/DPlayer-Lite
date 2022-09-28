/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */

function i18n(lang) {
    this.lang = lang;
    // in case someone says en-us, and en is present!
    this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;
    this.tran = (key) => {
        key = key.toLowerCase();
        if (tranTxt[this.lang] && tranTxt[this.lang][key]) {
            return tranTxt[this.lang][key];
        } else if (tranTxt[this.fallbackLang] && tranTxt[this.fallbackLang][key]) {
            return tranTxt[this.fallbackLang][key];
        } else if (standard[key]) {
            return standard[key];
        } else {
            return key;
        }
    };
}

// abstract model for recognizing if valid translations are present
// const model = {
//     top: [],
//     bottom: [],
//     rolling: [],
//     'about-author': [],
//     'dplayer-feedback': [],
//     'about-dplayer': [],
//     loop: [],
//     speed: [],
//     normal: [],
//     'video-failed': [],
//     'switching-quality': [{ symbol: '%q', name: 'Quality', example: '720p' }],
//     'switched-quality': [{ symbol: '%q', name: 'Quality', example: '720p' }],
//     ff: [{ symbol: '%s', name: 'Seconds', example: '5' }],
//     rew: [{ symbol: '%s', name: 'Seconds', example: '5' }],
//     setting: [],
//     fullscreen: [],
//     'web-fullscreen': [],
//     send: [],
//     screenshot: [],
//     airplay: [],
//     chromecast: [],
//     'show-subs': [],
//     'hide-subs': [],
//     volume: [],
//     live: [],
//     'video-info': [],
// };

// Standard english translations
const standard = {
    top: 'Top',
    bottom: 'Bottom',
    rolling: 'Rolling',
    'about-author': 'About author',
    'dplayer-feedback': 'DPlayer feedback',
    'about-dplayer': 'About DPlayer',
    loop: 'Loop',
    speed: 'Speed',
    normal: 'Normal',
    'video-failed': 'Video load failed',
    'switching-quality': 'Switching to %q quality',
    'switched-quality': 'Switched to %q quality',
    ff: 'FF %s s',
    rew: 'REW %s s',
    setting: 'Setting',
    fullscreen: 'Full screen',
    'web-fullscreen': 'Web full screen',
    send: 'Send',
    screenshot: 'Screenshot',
    airplay: 'AirPlay',
    chromecast: 'ChromeCast',
    off: 'Off',
    volume: 'Volume',
    live: 'Live',
    'video-info': 'Video info',
};

// add translation text here
const tranTxt = {
    en: standard,
    'zh-cn': {
        top: '顶部',
        bottom: '底部',
        rolling: '滚动',
        'about-author': '关于作者',
        'dplayer-feedback': '播放器意见反馈',
        'about-dplayer': '关于 DPlayer 播放器',
        loop: '洗脑循环',
        speed: '速度',
        normal: '正常',
        'video-failed': '视频加载失败',
        'switching-quality': '正在切换至 %q 画质',
        'switched-quality': '已经切换至 %q 画质',
        ff: '快进 %s 秒',
        rew: '快退 %s 秒',
        setting: '设置',
        fullscreen: '全屏',
        'web-fullscreen': '页面全屏',
        send: '发送',
        screenshot: '截图',
        airplay: '无线投屏',
        chromecast: 'ChromeCast',
        off: '关闭',
        'show-subs': '显示字幕',
        'hide-subs': '隐藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '视频统计信息',
    },
    'zh-tw': {
        top: '頂部',
        bottom: '底部',
        rolling: '滾動',
        'about-author': '關於作者',
        'dplayer-feedback': '播放器意見回饋',
        'about-dplayer': '關於 DPlayer 播放器',
        loop: '循環播放',
        speed: '速度',
        normal: '正常',
        'video-failed': '影片載入失敗',
        'switching-quality': '正在切換至 %q 畫質',
        'switched-quality': '已經切換至 %q 畫質',
        ff: '快進 %s 秒',
        rew: '快退 %s 秒',
        setting: '設定',
        fullscreen: '全螢幕',
        'web-fullscreen': '頁面全螢幕',
        send: '發送',
        screenshot: '截圖',
        airplay: '無線投屏',
        chromecast: 'ChromeCast',
        off: '關閉',
        'show-subs': '顯示字幕',
        'hide-subs': '隱藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '影片統計訊息',
    },
    'ko-kr': {
        top: 'Top',
        bottom: 'Bottom',
        rolling: 'Rolling',
        'about-author': '만든이',
        'dplayer-feedback': '피드백 보내기',
        'about-dplayer': 'DPlayer 정보',
        loop: '반복',
        speed: '배속',
        normal: '표준',
        'video-failed': '비디오를 불러오지 못했습니다.',
        'Switching to': '',
        'Switched to': '',
        'switching-quality': '전환 %q 화질',
        'switched-quality': '전환 됨 %q 화질',
        ff: '앞으로 %s 초',
        rew: '뒤로 %s 초',
        setting: '설정',
        fullscreen: '전체 화면',
        'web-fullscreen': '웹 내 전체화면',
        send: '보내기',
        screenshot: '화면 캡쳐',
        airplay: '에어플레이',
        chromecast: 'ChromeCast',
        off: '끄다',
        'show-subs': '자막 보이기',
        'hide-subs': '자막 숨기기',
        Volume: '볼륨',
        live: '생방송',
        'video-info': '비디오 정보',
    },
    de: {
        top: 'Oben',
        bottom: 'Unten',
        rolling: 'Rollend',
        'about-author': 'Über den Autor',
        'dplayer-feedback': 'DPlayer Feedback',
        'about-dplayer': 'Über DPlayer',
        loop: 'Wiederholen',
        speed: 'Geschwindigkeit',
        normal: 'Normal',
        'video-failed': 'Das Video konnte nicht geladen werden',
        'switching-quality': 'Wechsle zur %q Qualität',
        'switched-quality': 'Zur %q Qualität gewechselt',
        ff: '%s s Vorwärts',
        rew: '%s s Zurück',
        setting: 'Einstellungen',
        fullscreen: 'Vollbild',
        'web-fullscreen': 'Browser Vollbild',
        send: 'Senden',
        screenshot: 'Screenshot',
        airplay: 'AirPlay',
        'show-subs': 'Zeige Untertitel',
        chromecast: 'ChromeCast',
        off: 'Schließung',
        'hide-subs': 'Verstecke Untertitel',
        volume: 'Lautstärke',
        live: 'Live',
        'video-info': 'Video Info',
    },
};

export { i18n };
