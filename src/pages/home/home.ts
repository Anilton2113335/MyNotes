import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { textEditorPage } from '../textEditor/textEditor';
import { ArrayHolder } from '../classOfArray/ArrayHolder';
import { ViewEditPage } from '../viewEdit/viewEdit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


	item: [string, string, string];
	items = new Array();	

	constructor(public navCtrl: NavController, public holder: ArrayHolder) {
		this.items = holder.getArray(); 
	}

  	addItem(){
  	
  	this.navCtrl.push(textEditorPage);


  	//this.itemems.length+=1;
  	//console.log('ll', this.items.length);

  	/**
  	this.item = ['Title 1','Ang alamat bow','timeSaved'];
  	this.items.push(this.item);
  	console.log('b4', this.items);

  	this.items[0][0] = "Title 2";
  	console.log('aftr', this.items);
	**/
  	}

  	viewNote(title, descp, date){
  		this.navCtrl.push(ViewEditPage,{
  			title : title,
  			descp : descp,
  			date : date
  		});
  	}

}
