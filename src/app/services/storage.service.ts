import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface History {
  id: Number
  identifier: string,
  calcTitle: string,
  treatSite: string,
  energySelect: string,
  script: string,
  inverseSqr: string,
  ssd: string,
  depth: string,
  length: string,
  width: string,
  equivalentSqr: string,
  dpf: string,
  scp: string,
  PDDTPR: string,
  mus: string,
  calcFormula: string,
}

const HIST_KEY = 'hist-key'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addHistory(history: History): Promise<History[]> {
    return this.storage.get(HIST_KEY).then((historys: History[]) => {
      if(historys) {
        historys.push(history)
        return this.storage.set(HIST_KEY, historys);
      } else {
        return this.storage.set(HIST_KEY, [history]);
      }
    });
  }

  getHistory(): Promise<History[]> {
    return this.storage.get(HIST_KEY);
  }

  deleteHistoryItem(id: number): Promise<History> {
    return this.storage.get(HIST_KEY).then((historys: History[]) => {
      if(!historys || historys.length === 0) { return null; }

      let toKeep: History[] = [];
      for(let i of historys) {
        if(i.id != id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(HIST_KEY, toKeep);
    });
  }

  clearHistory() {
    this.storage.clear()
  }
}
