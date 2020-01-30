import layoutView from './layout.view.html'

import './layout.component.scss'

const layoutComponent = {
    template: layoutView,
    controller: controller,
    controllerAs: 'vm'
}

controller.$inject = []
function controller () {
    const vm = this
}

export default layoutComponent
