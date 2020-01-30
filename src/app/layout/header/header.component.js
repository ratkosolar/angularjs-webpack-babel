import headerView from './header.view.html'

import './header.component.scss'

import logoImg from '../../../assets/angular-js-logo.png'

const headerComponent = {
    template: headerView,
    controller: controller,
    controllerAs: 'vm'
}

controller.$inject = []
function controller () {
    const vm = this

    vm.$onInit = () => {
        vm.logoImg = logoImg
    }
}

export default headerComponent
