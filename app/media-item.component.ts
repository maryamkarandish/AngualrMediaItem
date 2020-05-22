import {Component,Input,Output, EventEmitter} from 'angular2/core';
import {FavoriteDirective} from './favorite.directive';
@Component({
    selector: 'media-item',
    directives : [FavoriteDirective],
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    name = 'The Redemption';
    @Input() mediaItem;
    hasWatched(){
        return 'watched...';
    }
    @Output() deleted = new EventEmitter(); // event binding
    onDelete(){
        //console.log('deleted');
        //alert('deleted...!!');
        this.deleted.emit(this.mediaItem);
    }
}