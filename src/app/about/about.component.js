import aboutView from './about.view.html'

import './about.component.scss'

const aboutComponent = {
    template: aboutView,
    controller: controller,
    controllerAs: 'vm'
}

controller.$inject = []
function controller() {
    const vm = this
}

export default aboutComponent
