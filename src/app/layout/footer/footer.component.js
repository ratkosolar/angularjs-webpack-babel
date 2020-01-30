import footerView from './footer.view.html'

import './footer.component.scss'

const footerComponent = {
    template: footerView,
    controller: controller,
    controllerAs: 'vm'
}

controller.$inject = []
function controller () {
    const vm = this

    vm.$onInit = () => {
        vm.copyrightYear = new Date().getFullYear()
    }
}

export default footerComponent
