import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {DataTableModule} from 'angular2-datatable';
import {NgSlimScrollModule, SLIMSCROLL_DEFAULTS} from 'ngx-slimscroll';
import {MyDatePickerModule} from 'mydatepicker';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FullCalendarModule} from 'ng-fullcalendar';
import {MorrisJsModule} from 'angular-morris-js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TokenInterceptor} from './interceptors/token.interceptor';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ChartsModule,
    DataTableModule,
    NgSlimScrollModule,
    MyDatePickerModule,
    NgxDatatableModule,
    FullCalendarModule,
    MorrisJsModule,
    TooltipModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {provide: SLIMSCROLL_DEFAULTS, useValue: { alwaysVisible: false }},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
