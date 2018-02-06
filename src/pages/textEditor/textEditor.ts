import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ArrayHolder } from '../classOfArray/ArrayHolder';


@Component({
  selector: 'page-editor',
  templateUrl: 'textEditor.html'
})
export class textEditorPage {

  data = new Array();
  todo = {title: "", disp: "Content here.."}; 
  

  constructor(public navCtrl: NavController, public holder : ArrayHolder, public alertCtrl : AlertController){ 
      
  }

  test()
  {
      if(this.todo.disp && this.todo.title != ''){
        var date = new Date().toLocaleDateString();
        var title =  JSON.stringify(this.todo.title);
        var  desc = JSON.stringify(this.todo.disp);
        this.data.push(title.substring(1,title.length-1),desc.substring(1,desc.length-1), date);
        console.log(this.data);
        this.holder.pushArrayWith(this.data);
        this.navCtrl.pop();
      }else{
       
        
          if(this.todo.title == ''){
                const alert = this.alertCtrl.create({
                title: 'No Title',
                subTitle: 'Fill up title field.',
                buttons: ['Ok']
                });

                alert.present();
          }else{
                const alert = this.alertCtrl.create({
                title: 'No Content',
                subTitle: 'Fill up Contet field.',
                buttons: ['Ok']
                });

                alert.present();
          }
      }
  }
} 
