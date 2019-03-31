import { Route } from './Route'

export class Router {
    routes: Route[]
    domElement: Element

    constructor (paramRoutes: Route[], domElm: string = '#app') {
        this.routes = paramRoutes
        let tmp: Element | null = document.querySelector(domElm)

        if (!tmp) {
            throw new Error('error: element container not found')
        }
        this.domElement = tmp
        window.addEventListener('hashchange', this.hashChanged.bind(this))
        this.hashChanged()
    }

    hashChanged (): void {
        let hash: string = window.location.hash
        let route: Route|undefined = this.routes.find(
            hash.length ? (route: Route): boolean => route.isActiveRoute(hash) : (route: Route): boolean => Boolean(route.default)
        )
        if (route) {
            this.goToRoute(route)
        }
    }

    async goToRoute(route: Route) {
        this.domElement.innerHTML = await window.fetch(`src/views/${route.htmlName}`).then((res:Response):Promise<string> => res.text())
        route.loadJs()
    }
}