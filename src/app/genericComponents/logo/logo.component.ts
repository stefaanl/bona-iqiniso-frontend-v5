import {Component, Input} from '@angular/core';
import {MessageService} from "../../genericServices/message.service";
import {StorageService} from "../../genericServices/storage.service";
import {BreadcrumbService} from "../../genericServices/breadcrumb.service";
import {Router} from "@angular/router";
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() logo!: string;

  constructor(
    private storage: StorageService,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {

  }
  onLogin() {
    console.log('logo click - login');
    this.router.navigateByUrl('/login');
  }
  onRegister() {
    console.log('logo click - register');
    this.router.navigateByUrl('/register');
  }
  onProfile() {
    console.log('logo click - profile');
    this.router.navigateByUrl('/profile');
  }

  onLogout() {
    console.log('logo click - logout');
    this.breadcrumbService.clean();
    this.logo = "enabled-logged-out";
    this.storage.clearUser();
    this.router.navigateByUrl('/welcome');
  }

  setLanguage(lang: string) {
    this.storage.setLanguage(lang);
    //console.log("Language is set to ", this.storage.getLanguage());
  }

  bonaByThaste = 'data:image/png;base64,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';

}
