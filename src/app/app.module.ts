import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {LoadingComponent} from './loading/loading.component';
import {appState} from 'src/app/store/app.state';
import {environment} from 'src/environments/environment';
import {SharedModule} from 'src/app/shared/shared.module';
import {MainPageComponent} from './main-page/main-page.component';
import {ShopplingListModule} from './shopping-list/shoppling-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    AppRoutingModule,
    NgxsModule.forRoot(appState),
    environment.production
      ? []
      : NgxsReduxDevtoolsPluginModule.forRoot(),
    environment.production
      ? []
      : NgxsLoggerPluginModule.forRoot(),
    ShopplingListModule

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
