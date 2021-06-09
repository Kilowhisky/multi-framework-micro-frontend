import { Routes, UrlMatcher, UrlSegment } from "@angular/router";
import { WrapperComponent } from "../wrapper/wrapper.component";
import { Microfrontend } from "./routes.config";

export function startsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.startsWith(prefix)) {
            return ({ consumed: url });
        }
        return null;
    };
}

export function buildRoutes(options: Microfrontend[]): Routes {
    return options.map(o => ({
        matcher: startsWith(o.routePath),
        component: WrapperComponent,
        data: {
            config: o
        }
    }));
}