import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, Rating , Product} from './components/components';
import { HttpModule, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map'

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule
   ],
  declarations: [ AppComponent, Rating, Product],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
