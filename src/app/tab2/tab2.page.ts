import { Component } from '@angular/core';
import { Animation } from '@capacitor/status-bar';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertFavorito() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Deseja realmente favoritar o Filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim Favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'FILME ADICIONADO COM SUCESSO!',
      duration: 2000,
      color:'success',

    });
    toast.present();
  }


}
