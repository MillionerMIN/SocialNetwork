import { Route, Switch } from "react-router"
import { Logo } from "../logo/Logo"

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={()=> <Logo/>}/>
    </Switch>
  )
}