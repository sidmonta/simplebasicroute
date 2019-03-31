export class Route {
    name: string
    htmlName: string
    default: boolean
    importFiles: string[]

    constructor(
        name: string,
        htmlName: string,
        defaultRoute: boolean = false,
        importFile: string[] = []
    ) {

        if (!name || !htmlName) {
            throw new Error('error: name and htmlName are mandatories')
        }

        this.name = name
        this.htmlName = htmlName
        this.default = defaultRoute
        this.importFiles = importFile
    }

    isActiveRoute (hashedPath: string): boolean {
        return hashedPath.replace('#', '') === this.name
    }

    async loadJs(): Promise<Map<string, any>> {
        if (this.importFiles.length) {
            const map = new Map<string, any>();
            for (let file of this.importFiles) {
                map.set(file, await import(/* webpackIgnore: true */file))
            }
          }
          return new Map()
    }
}
