import { LoadRemoteModuleOptions } from "@angular-architects/module-federation"

export type Microfrontend = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    elementName: string;
}

export const ROUTES: Microfrontend[] = [
    {
        // For Loading
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './web-components',
        elementName: 'mfe1-element',

        // For Routing
        displayName: 'mfe1',
        routePath: 'mfe1',
    },
    {
        // For Loading
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './web-components',
        elementName: 'mfe2-element',

        // For Routing
        displayName: 'mfe2',
        routePath: 'mfe2'
    },
    {
        // For Loading
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'mfe3',
        exposedModule: './web-components',
        elementName: 'mfe3-element',

        // For Routing
        displayName: 'mfe3',
        routePath: 'mfe3'
    },
    {
        // For Loading
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        remoteName: 'mfe4',
        exposedModule: './web-components',
        elementName: 'mfe4-element',

        // For Routing
        displayName: 'mfe4',
        routePath: 'mfe4'
    },
]