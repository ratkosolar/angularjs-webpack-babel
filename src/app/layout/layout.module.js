import angular from 'angular'

import layoutComponent from './layout.component'
import headerComponent from './header/header.component'
import footerComponent from './footer/footer.component'

const layout = angular.module('layout', [])

layout.component('layout', layoutComponent)
layout.component('layoutHeader', headerComponent)
layout.component('layoutFooter', footerComponent)

export default layout.name