import { Component} from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapse = true;
  // property holding an event emitter object
  // @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  // onSelect(feature: string) {
  //     this.featureSelected.emit(feature);
  // }
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  toggleCollapse() {
    this.collapse = !this.collapse;
  }
}
