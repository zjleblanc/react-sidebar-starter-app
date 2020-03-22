import { HomeResx, IHomeResx } from "./home";
import { NavigationResx, INavigationResx } from "./navigation";
import { FooterResx, IFooterResx } from "./footer";
import { NotFoundResx, INotFoundResx } from "./notfound";
import { RoutesResx, IRoutesResx } from "./routes";

export var Resources = {
    Home: HomeResx,
    Navigation: NavigationResx,
    Routes: RoutesResx,
    Footer: FooterResx,
    NotFound: NotFoundResx,
}

export type IResources = typeof Resources;