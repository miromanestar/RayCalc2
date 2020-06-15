import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface History {
  id: Date
  identifier: string,
  calcTitle: string,
  treatSite: string,
  energySelect: string,
  fieldSelect: string,
  script: string,
  inverseSqr: string,
  ssd: string,
  depth: string,
  length: string,
  x1: string,
  x2: string,
  width: string,
  y1: string,
  y2: string,
  equivalentSqr: string,
  dpf: string,
  scp: string,
  PDDTPR: string,
  mus: string,
  calcFormula: string,
  date: string,
  name: string,
}

const HIST_KEY = 'hist-key'
const NAME_KEY = 'name-key'
const ISO_KEY = 'iso-key'
const THEME_KEY = 'theme-key'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  getTheme(): Promise<string> {
    return this.storage.get(THEME_KEY)
  }

  setTheme(theme: string): Promise<string> {
    return this.storage.set(THEME_KEY, theme)
  }

  setName(name: string): Promise<string> {
    return this.storage.set(NAME_KEY, name)
  }

  getName(): Promise<string> {
    return this.storage.get(NAME_KEY)
  }

  setISO(iso: string): Promise<string> {
    return this.storage.set(ISO_KEY, iso)
  }

  getISO(): Promise<string> {
    return this.storage.get(ISO_KEY)
  }

  addHistory(history: History): Promise<History[]> {
    return this.storage.get(HIST_KEY).then((historys: History[]) => {
      if(historys) {
        historys.unshift(history)
        return this.storage.set(HIST_KEY, historys);
      } else {
        return this.storage.set(HIST_KEY, [history]);
      }
    });
  }

  getHistory(): Promise<History[]> {
    return this.storage.get(HIST_KEY);
  }

  deleteHistoryItem(id: Date): Promise<History> {
    return this.storage.get(HIST_KEY).then((historys: History[]) => {
      if(!historys || historys.length === 0) { return null; }
      let toKeep: History[] = [];
      for(let i of historys) {
        if (i.id.toString() !== id.toString()) {
          toKeep.unshift(i);
        }
      }
      return this.storage.set(HIST_KEY, toKeep.reverse());
    });
  }
  
  clearHistory(): Promise<any> {
    return this.storage.remove(HIST_KEY).then((historys: History[]) => {
      console.log(historys)
    })
  }
}
