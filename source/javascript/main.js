'use strict'

/*------------------------------------*\
 * JS Main entry file
 \*------------------------------------*/
import './config'
import '@utilities/polyfills'
import '@utilities/events'

import moduleInit from '@utilities/module-init'

//Async
/**
 * React
 */
moduleInit.async('[js-hook-react-app]', () => import('@components/react-app'))
