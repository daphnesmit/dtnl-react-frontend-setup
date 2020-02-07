import Events from '@utilities/events'
import RafThrottle from '@utilities/raf-throttle'

const MIN_DISTANCE = 20
let prevScrollPos = window.pageYOffset
let currentDirection = 'up'

class ScrollDirection {
  constructor() {
    this.bindEvents()
  }

  bindEvents() {
    RafThrottle.set([
      {
        element: window,
        event: 'scroll',
        namespace: this,
        fn: this.onScroll,
      },
    ])
  }

  onScroll() {
    const distance = prevScrollPos - window.pageYOffset

    if (distance > MIN_DISTANCE) {
      prevScrollPos = window.pageYOffset

      if (currentDirection !== 'up') {
        Events.$trigger('scrolldirection::up')
        currentDirection = 'up'
      }
    } else if (distance < MIN_DISTANCE * -1) {
      prevScrollPos = window.pageYOffset

      if (currentDirection !== 'down') {
        Events.$trigger('scrolldirection::down')
        currentDirection = 'down'
      }
    }
  }
}

export default new ScrollDirection()
