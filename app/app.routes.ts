import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent} from "./components/search.component";
import { HomeComponent } from "./components/home.component";
import { ArchiveComponent } from "./components/archive.component";

const routes: RouterConfig = [
        {
        path: 'search-page',
        component: SearchComponent
    },{
        path: "",
        component: HomeComponent
    },{
        path: "home-page",
        component: HomeComponent,
    },{
        path: "archive-page",
        component: ArchiveComponent
}
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]