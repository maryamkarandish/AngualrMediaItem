import {Pipe} from 'angular2/core';

@Pipe({
    name: 'categoryList' // this is the name we are using in out template
    // peer :  help that the pipe is stateless or stateful
    // pipes are stateless by defualt 
})
export class CategoryListPipe{
    // we need to implement a transform method
    // angular calls this method on pipe class
    // and pass the first argument as a value being pipe to it
    transform(mediaItems){
        var categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category)<=1){
                categories.push(mediaItem.category);
            }            
        });
        return categories.join(', ');
    }
}