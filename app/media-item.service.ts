import {Injectable} from 'angular2/core';
import {Http , URLSearchParams,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
    constructor(private http: Http) {}
    
    // get() {  
    //     return this.http.get('mediaitems')
    //         .map(response => {
    //             return response.json().mediaItems;
    //         });
    // }  // this method in service is requesting all media in items

    // let's refactor that to support url search query values
    // to filter media item list by medium add URLSearchParams to http import
    get(medium){
        var searchParams = new URLSearchParams();
        searchParams.append('medium', medium);
        return this.http.get('mediaitems',{search : searchParams })
            .map(response => {
                return response.json().mediaItems;
            });
    }
    
    // JSON.stringfy method change javascript object into JSON onbject
    add(mediaItem) {
        var headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('mediaitems',JSON.stringify(mediaItem),
        {headers : headers})
        .map(response => {});
        // this.mediaItems.push(mediaItem);
    }
    
    delete(mediaItem) {
        // var index = this.mediaItems.indexOf(mediaItem);
        // if (index >= 0) {
        //     this.mediaItems.splice(index, 1);
        // }
        return this.http.delete(`mediaitems/${mediaItem.id}`)
            .map(response => {});
    }
    
    mediaItems = [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
}