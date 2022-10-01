// Type definitions for dplayer 1.27
// Project: https://github.com/DIYgod/DPlayer#readme
// Definitions by: Guanyunhan <https://github.com/Guanyunhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export as namespace DPlayer;

export type Lang = 'en' | 'zh-cn' | 'zh-tw'
export type Preload = 'none' | 'metadata' | 'auto'
export type VideoType = 'auto' | 'hls' | 'flv' | 'dash' | 'webtorrent' | 'normal'
export type SubTitleType = 'webvtt' | 'ass'
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
  screenshot = 'screenshot',
  contextmenu_show = 'contextmenu_show',
  contextmenu_hide = 'contextmenu_hide',
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
  contextmenu?: DPlayerContextMenuItem[] | undefined
  highlight?: DPlayerHighLightItem[] | undefined
}

export interface DPlayerDanmakuItem {
  text: string
  color: string
  type: DirectionType
}

export interface DPlayerContextMenuItem {
  text: string
  link?: string | undefined;
  click?: (() => void) | undefined;
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
}

export default class DPlayer {
  events: any
  video: HTMLVideoElement
  fullScreen: FullScreen

  constructor(options: DPlayerOptions)

  controller: {
    setAutoHide(): void
    show(): void
    hide(): void
    isShow(): boolean
    toggle(): void
  }

  play(): void

  pause(): void

  seek(time: number): void

  toggle(): void

  on(event: string, handler: () => void): void

  switchVideo(video: DPlayerVideo): void

  notice(text: string, time: number, opacity: number): void

  switchQuality(index: number): void

  destroy(): void

  speed(rate: number): void

  volume(percentage?: number, nonotice?: boolean): void

  buildOptions(DPlayerOptions): DPlayerOptions
}
