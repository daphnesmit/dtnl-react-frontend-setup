import Events from '@utilities/events'
import Swup from 'swup'

import EVENTS from './page-transition-events'

class PageTransition {
  constructor() {
    this.swup = this.constructSwup()

    this.mapEvents()
  }

  constructSwup() {
    return new Swup({
      containers: ['[js-hook-page-transition-container]'],
    })
  }

  mapEvents() {
    EVENTS.forEach(({ originalEvent, newEvent }) => {
      this.swup.on(originalEvent, () => {
        Events.$trigger(newEvent)
      })
    })
  }
}

export default PageTransition
