import { Router } from "@angular/router";
import { RouteLookupService } from "./route-lookup.service";
import { buildRoutes } from "./route.utils";
import { APP_ROUTES } from "./routes";

export function routeFactory(router: Router, routeLookupService: RouteLookupService) {
    return async () => {
        const microfrontends = await routeLookupService.lookup();
        const microfrontendRoutes = buildRoutes(microfrontends);
        router.resetConfig([...APP_ROUTES, ...microfrontendRoutes]);
        router.initialNavigation();
    }
}