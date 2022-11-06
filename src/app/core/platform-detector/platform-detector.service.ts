import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PlatformDetectorService{

  constructor(
          @Inject(PLATFORM_ID) private platformId: string
  ){}

  isPlatformBrowser(){
    return isPlatformBrowser(this.platformId);
  }
}
