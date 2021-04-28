import {
  Component
} from '@angular/core';
import { MyDet } from './shared/models/det.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  detectors: MyDet[] = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      let detector = new MyDet();
      let names = ["C-3PO", "Робокоп", "Sonny", "Саманта", "Марвин", "ВАЛ-ЛИ", "Ева", "Бишоп 341-B", "Дэвид 8", "TARS"];
      var rand = Math.floor(Math.random() * names.length);
      detector.id = i;
      detector.name = names[rand]
      this.detectors.push(detector);
    }
  }

  addDetector(name: any) {
    if (this.detectors.length === 0) {
      this.detectors.push({ id: 1, name: name.value, status: (Math.random() >= 0.5) })
    } else {
      this.detectors.push({ id: this.detectors[this.detectors.length - 1].id + 1, name: name.value, status: (Math.random() >= 0.5) })
    }
  }

  deleteDetector(element: any) {
    console.log(element);
    for (var i = 1; i < this.detectors.length; i++) {
      if (this.detectors[i].id == element)
        this.detectors.splice(i, 1)
    }
  }
}
