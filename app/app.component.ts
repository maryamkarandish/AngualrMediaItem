import { Component } from 'angular2/core';
// import {MediaItemComponent} from './media-item.component';
 import {MediaItemListComponent} from './media-item-list.component';
 import {MediaItemFormComponent} from './media-item-form.component';
 import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

 // this decorator takes an array of rout definitions
 @RouteConfig([
     {path: '/:medium', component : MediaItemListComponent , name: 'List'}, // name should be camel case with the capital first letter
     {path: 'add',component: MediaItemFormComponent, name: 'AddMediaItem'}
 ])

@Component({
    selector: 'media-tracker-app',
    // directives:[MediaItemListComponent, MediaItemFormComponent ],
    directives:[ROUTER_DIRECTIVES],
    templateUrl : 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    // onMediaItemDeleted(mediaItem){
    //     alert("deleted ... ")
    // }
    // firstMediaItem = {
    //     id :1,
    //     name: "Firebug",
    //     medium : "Series",
    //     category: "Science Fiction",
    //     year: 2010,
    //     watchedOn : 1294166565348,
    //     isFavorite: false
    // }
}
