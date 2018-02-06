import { Injectable } from '@angular/core';
 
@Injectable()
export class ArrayHolder {
     
    item = new Array();
 
    constructor() {
      	
    }
  
    pushArrayWith(data1: string[]) {
    	this.item.push(data1);    
    }
  
    popArrayDataInIndex(title : string, desc : string, date : string) {
       for(let i = 0; i<this.item.length; i++){
       		if(title == this.item[i][0] && desc == this.item[i][1] && date == this.item[i][2]){
       			this.item.splice(i, 1);
       		}
       }
    }	

    getArray(){
    	return this.item;
    }

    updateIndexDescOf(oldTitle: string, oldDesc: string, oldDate: string, newDesc : string){
    	var date = new Date().toLocaleDateString();
    	for(let i = 0; i<this.item.length; i++){
    		if(oldTitle == this.item[i][0] && oldDesc == this.item[i][1] && oldDate == this.item[i][2]){
    			this.item[i][1] = newDesc;
    			this.item[i][2] = date;
    		}
    	}
    }	
}