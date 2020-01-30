routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            component: 'about'
        })
}
