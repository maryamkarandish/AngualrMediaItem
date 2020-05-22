import {Component,Inject} from 'angular2/core';
// import {ControlGroup, Control,Validators} from "angular2/common";
import { Control,Validators, FormBuilder } from "angular2/common";
import{MediaItemService} from './media-item.service';
import{LOOKUP_LISTS} from './providers';
import{Router} from 'angular2/router';

// other than using the routerLink you can use router class to navigate
@Component({
    selector: 'media-item-form',
    // providers: [MediaItemService], we add it in the bootstrap so all the application can use the service
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form; // it is a class property for the form
    // and we need to intialize the form property into a new ControlGroup
    // we will do this in an angular life cycle called ngOnInit
    // using life cycle events to make the unit test easier

    // services and using them in constructor injection
    constructor(private formBuilder: FormBuilder, 
        private mediaItemService : MediaItemService,
        @Inject(LOOKUP_LISTS) public lookupLists,
        private router : Router ){}

    ngOnInit(){
        // this.form = new ControlGroup({
        this.form = this.formBuilder.group({
            'medium' : new Control('Movies'),
            'name' : new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            'category' : new Control(''),
            'year' : new Control('',this.yearValidator)
        }); 
        // control group expected to be called with an object structure that has properties 
        // named for the controls that will be in a group set to a value of the new Control     
    }
    
    yearValidator(control){
        if(control.value.trim().length===0) return null;
        var year = parseInt(control.value);
        var maxYear = 1800;
        var minYear = 2500;
        if(year <= minYear && year >= maxYear) return null;
        return{'year' : {'min': minYear, 'max': maxYear}}
    }

    onSubmit(mediaItem){
        this.mediaItemService.add(mediaItem)
        .subscribe(()=> {
            this.router.navigate(['../List',{ medium:mediaItem.medium }]);
        });
        console.log(mediaItem);
    }
    
}