import gsap from 'gsap'
import { $ } from '../tools/utils'

export default class Intro {
  constructor () {
    this.DOM = {
      title: $('.intro__title > h1'),
      icon: $('.intro__icon > svg')
    }
  }

  init () {
    const { title, icon } = this.DOM
    const time = 3

    gsap.timeline()
      .to(title, {
        y: 0,
        ease: 'Expo.easeOut',
        duration: time
      })
      .to(icon, {
        y: 0,
        ease: 'Expo.easeOut',
        duration: time
      }, `-=${time * 0.8}`)
  }
}
