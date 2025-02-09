import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WindowService} from "./genericServices/window.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [WindowService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bona-iqiniso-frontend-v5';


  confEditor = {
    base_url: '/tinymce',
    suffix: '.min',
    height: 300,
    min_height: 150,
    menubar: false,
    plugins: 'lists advlist link image table code help wordcount',
    toolbar: 'undo redo styles bold underline italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
  };

}
