import { Component, ViewChild, OnInit } from '@angular/core';
import { StorageService, History } from '../services/storage.service';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  historys: History[] = [];

  @ViewChild('hist-key')myList: List;

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.loadHistory();
  }

  loadHistory() {
    this.storageService.getHistory().then(historys => {
      this.historys = historys;
    });
  }

  deleteSingleHistory(history: History) {
    this.storageService.deleteHistoryItem(history.id).then(history => {
      this.myList.closeSlidingItems();
      this.loadHistory();
    })
  }

  ngOnInit() {

  }
}
