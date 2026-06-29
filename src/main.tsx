import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// Belépési pont. A vite-react-ssg build időben statikus HTML-t generál minden
// útvonalra (a routerből + a routes tömbből), majd a kliensen hidratál.
// A HelmetProvider-t és a routert maga a vite-react-ssg adja; a globális
// providerek a Layout-ban (a route-fán belül) élnek.
export const createRoot = ViteReactSSG({ routes });
