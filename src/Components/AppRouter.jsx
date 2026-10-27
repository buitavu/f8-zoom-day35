import Home from "../Page/Home";
import Counter from "../Page/Counter";
import Todo from "../Page/Todo";
import Profile from "../Page/Proflie";
import Products from "../Page/Products";
import Comments from "../Page/Comments";
import Weather from "../Page/Weather";
import Buttons from "../Page/Buttons";
export const publicRouter = [
  { path: "/",  component: Home },
  { path: "/counter",  component: Counter },
  { path: "/todo",  component: Todo },
  { path: "/profile",  component: Profile },
  { path: "/products",  component: Products },
  { path: "/comments",  component: Comments },
  { path: "/weather",  component: Weather },
  { path: "/buttons",  component: Buttons },
];
