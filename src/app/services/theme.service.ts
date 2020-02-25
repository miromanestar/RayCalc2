import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Plugins, StatusBarStyle, KeyboardStyle } from '@capacitor/core';

const { Keyboard } = Plugins;
const { StatusBar } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark')
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
    Keyboard.setStyle({ style: KeyboardStyle.Dark });
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark')
    StatusBar.setStyle({ style: StatusBarStyle.Light });
    Keyboard.setStyle({ style: KeyboardStyle.Light });
  }
}
