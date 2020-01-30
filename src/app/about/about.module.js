import angular from 'angular'

import routes from './about.routes'

import aboutComponent from './about.component'

const about = angular.module('about', [])

about.component('about', aboutComponent)
about.config(routes)

export default about.name