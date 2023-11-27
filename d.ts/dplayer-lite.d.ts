// Type definitions for dplayer 1.27
// Project: https://github.com/DIYgod/DPlayer#readme
// Definitions by: Guanyunhan <https://github.com/Guanyunhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export as namespace DPlayer;

export type Lang = 'en' | 'zh-cn' | 'zh-tw'
export type Preload = 'none' | 'metadata' | 'auto'
export type VideoType = 'auto' | 'hls' | 'flv' | 'dash' | 'webtorrent' | 'normal'
export type DirectionType = 'top' | 'right' | 'bottom'
export type FullScreenType = 'web' | 'browser'

export enum DPlayerEvents {
  abort = 'abort',
  canplay = 'canplay',
  canplaythrough = 'canplaythrough',
  durationchange = 'durationchange',
  emptied = 'emptied',
  ended = 'ended',
  error = 'error',
  loadeddata = 'loadeddata',
  loadedmetadata = 'loadedmetadata',
  loadstart = 'loadstart',
  mozaudioavailable = 'mozaudioavailable',
  pause = 'pause',
  play = 'play',
  playing = 'playing',
  progress = 'progress',
  ratechange = 'ratechange',
  seeked = 'seeked',
  seeking = 'seeking',
  stalled = 'stalled',
  suspend = 'suspend',
  timeupdate = 'timeupdate',
  volumechange = 'volumechange',
  waiting = 'waiting',
  ready = 'ready',
  screenshot = 'screenshot',
  contextmenu_show = 'contextmenu_show',
  contextmenu_hide = 'contextmenu_hide',
  fetch_start = 'fetch_start',
  fetch_stop = 'fetch_stop',
  notice_show = 'notice_show',
  notice_hide = 'notice_hide',
  quality_start = 'quality_start',
  quality_end = 'quality_end',
  destroy = 'destroy',
  resize = 'resize',
  fullscreen = 'fullscreen',
  fullscreen_cancel = 'fullscreen_cancel',
}

export interface DPlayerOptions {
  [key: string]: any

  container: HTMLElement | null
  live?: boolean | undefined
  autoplay?: boolean | undefined
  debug?: boolean | undefined
  theme?: string | undefined
  loop?: boolean | undefined
  lang?: Lang | string | undefined
  screenshot?: boolean | undefined
  hotkey?: boolean | undefined
  preload?: Preload | undefined
  logo?: string | undefined
  volume?: number | undefined
  muted?: boolean | undefined
  mutex?: boolean | undefined
  video?: DPlayerVideo | undefined
  controls?: boolean | undefined,
  contextmenu?: DPlayerContextMenuItem[] | undefined
  highlight?: DPlayerHighLightItem[] | undefined
  loading?: boolean
}

export interface DPlayerDanmakuItem {
  text: string
  color: string
  type: DirectionType
}

export interface DPlayerContextMenuItem {
  text: string
  link?: string | undefined;
  click?: ((player: any) => void) | undefined;
}

export interface DPlayerHighLightItem {
  text: string
  time: number
}

export interface DPlayerVideoQuality {
  name: string
  url: string
  type?: string | undefined
}

export interface DPlayerVideo {
  url: string
  pic?: string | undefined
  type?: VideoType | string | undefined
  customType?: any
  quality?: DPlayerVideoQuality[] | undefined
  defaultQuality?: number | undefined
}

export interface FullScreen {

  request(type: FullScreenType): void

  cancel(type: FullScreenType): void

  toggle(type: FullScreenType): void
}

export default class DPlayer {
  events: any
  fullScreen: FullScreen
  options: DPlayerOptions
  paused: boolean
  video: HTMLVideoElement
  transition: boolean

  constructor(options: DPlayerOptions)

  controller: {

    hide(): void

    isShow(): boolean
    
    setAutoHide(): void

    show(): void

    toggle(): void
  }

  buildOptions(DPlayerOptions): DPlayerOptions
  
  destroy(): void

  muted(mute?: boolean): boolean

  notice(text: string, time: number, opacity: number): void

  on(event: string, handler: () => void): void

  pause(): void

  play(): void

  seek(time: number): void

  snapshot(): void

  speed(rate: number): void

  switchQuality(index: number): void

  switchVideo(video: DPlayerVideo): void

  toggle(): void

  toggleScreen(type: FullScreenType): void

  volume(percentage?: number, nonotice?: boolean): number

}
