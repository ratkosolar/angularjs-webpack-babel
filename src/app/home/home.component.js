import homeView from './home.view.html'

import './home.component.scss'

const homeComponent = {
    template: homeView,
    controller: controller,
    controllerAs: 'vm'
}

controller.$inject = []
function controller() {
    const vm = this

    vm.$onInit = () => {
        vm.value = 10
    }

    vm.increment = () => {
        vm.value++
    }

    vm.decrement = () => {
        vm.value--
    }
}

export default homeComponent
