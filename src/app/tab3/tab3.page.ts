import { Component, ViewChild, OnInit } from '@angular/core';
import { StorageService, History } from '../services/storage.service';
import { Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HistoryviewPage } from '../historyview/historyview.page'
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  historys: History[] = [];
  historyMsgStyle: any;

  @ViewChild('myHistoryList', { static: false })myHistoryList: History;

  constructor(private storageService: StorageService, private plt: Platform, public router: Router, public modalController: ModalController) {
    this.plt.ready().then(() => {
      this.loadHistory();
    })
  }

  goToHistoryView(history: History) {
    const navigationExtras: NavigationExtras = { state: { history: history}};
    this.router.navigate(['/tabs/tab3/historyview'], navigationExtras);
  }

  loadHistory() {
    this.storageService.getHistory().then(historys => {
      if(historys.length !== 0) { this.historys = historys; this.historyMsgStyle = { 'display': 'none' } } else { this.historys = historys; this.historyMsgStyle = { 'display': 'block' } }
    });
  }
  loadHistoryClear() { //Exists because for some reason hitting "clear" breaks the if statement...
    this.storageService.getHistory().then(historys => {
      if(historys) { this.historys = historys; this.historyMsgStyle = { 'display': 'none' } } else { this.historys = historys; this.historyMsgStyle = { 'display': 'block' } }
    });
  }

  deleteSingleHistory(history: History) {
    this.storageService.deleteHistoryItem(history.id).then(history => {
      this.loadHistory();
    })
  }

  clearHistory() {
    this.storageService.clearHistory()
    this.loadHistoryClear()
  }

  ionViewWillEnter() {
    this.loadHistory();
  }

  ngOnInit() {

  }
}
