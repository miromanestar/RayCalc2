import { Component, ViewChild, OnInit } from '@angular/core';
import { StorageService, History } from '../services/storage.service';
import { Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HistoryviewPage } from '../historyview/historyview.page'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  historys: History[] = [];

  @ViewChild('myHistoryList', { static: false })myHistoryList: History;

  constructor(private storageService: StorageService, private plt: Platform, public router: Router, public modalController: ModalController) {
    this.plt.ready().then(() => {
      this.loadHistory();
    })
  }

  goToHistoryView(history: History) {
    const navigationExtras: NavigationExtras = { state: { history: history}};
    this.router.navigate(['/historyview'], navigationExtras);
  }

  loadHistory() {
    this.storageService.getHistory().then(historys => {
      this.historys = historys;
    });
  }

  deleteSingleHistory(history: History) {
    this.storageService.deleteHistoryItem(history.id).then(history => {
      this.loadHistory();
    })
  }

  clearHistory() {
    this.storageService.clearHistory()
    this.loadHistory()
  }

  ionViewWillEnter() {
    this.loadHistory();
  }

  ngOnInit() {

  }
}
