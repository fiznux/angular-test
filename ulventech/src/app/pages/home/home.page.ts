import {Component} from '@angular/core';
import {FormApiService} from '../../services/form-api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastController} from '@ionic/angular';
import {FormApiResponse, FormInterface} from '../../interfaces/form';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form: FormGroup;
  public responses: FormApiResponse;
  public isLoaded: boolean = false;
  public isSubmit: boolean = false;

  constructor(private formApiService: FormApiService, private toastController: ToastController) {
  }

  ngOnInit() {
    this.getForm();
  }

  async getForm() {
    this.isLoaded = false;
    this.form = new FormGroup({});
    this.responses = await this.formApiService.get();
    if (this.responses && this.responses.success) {
      this.responses.data.forEach(r => {
        this.form.addControl(r.fieldName,
          new FormControl(r.value));
      });
    }
    this.toastMessage(this.responses.message);
    this.isLoaded = true;
  }

  async toastMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark',
    });
    toast.present();
  }

  async submit() {
    this.isSubmit = true;
    const response = await this.formApiService.post(this.form.value);
    if (response) {
      this.toastMessage(response.message);
    }
    this.isSubmit = false;
  }
}
