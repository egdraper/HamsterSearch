import { Component } from '@angular/core';
import { SideBarComponent} from "./shared/components/sidebar.component"
import { TopBarComponent} from "./shared/components/topbar.component"
import { MainComponent} from "./shared/components/main.component"
import { ROUTER_DIRECTIVES }  from '@angular/router';



@Component({
  selector: 'my-app',
  template: `<top-bar></top-bar>
             <div style="display:flex">           
                <side-bar></side-bar> 
                <main></main>               
             </div>`,

  directives: [SideBarComponent, TopBarComponent, MainComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {

  
}