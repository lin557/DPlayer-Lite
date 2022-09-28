class Setting {
    constructor(player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.settingButton.addEventListener('click', () => {
            this.show();
        });

        // loop
        this.loop = this.player.options.loop;
        this.player.template.loopToggle.checked = this.loop;
        this.player.template.loop.addEventListener('click', () => {
            this.player.template.loopToggle.checked = !this.player.template.loopToggle.checked;
            if (this.player.template.loopToggle.checked) {
                this.loop = true;
            } else {
                this.loop = false;
            }
            this.hide();
        });

        // speed
        this.player.template.speed.addEventListener('click', () => {
            this.player.template.settingBox.classList.add('dplayer-setting-box-narrow');
            this.player.template.settingBox.classList.add('dplayer-setting-box-speed');
        });
        for (let i = 0; i < this.player.template.speedItem.length; i++) {
            this.player.template.speedItem[i].addEventListener('click', () => {
                this.player.speed(this.player.template.speedItem[i].dataset.speed);
                this.hide();
            });
        }
    }

    hide() {
        this.player.template.settingBox.classList.remove('dplayer-setting-box-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');
        setTimeout(() => {
            this.player.template.settingBox.classList.remove('dplayer-setting-box-narrow');
            this.player.template.settingBox.classList.remove('dplayer-setting-box-speed');
        }, 300);

        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.settingBox.classList.add('dplayer-setting-box-open');
        this.player.template.mask.classList.add('dplayer-mask-show');

        this.player.controller.disableAutoHide = true;
    }
}

export default Setting;
