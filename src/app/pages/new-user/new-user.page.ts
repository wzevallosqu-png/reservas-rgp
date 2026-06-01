import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class NewUserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
