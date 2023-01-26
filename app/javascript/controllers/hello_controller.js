import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";




export default class extends Controller {
  static targets = [ "inputDate" ]

  connect() {
    flatpickr(this.inputDateTarget, {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      min_date: Time.zone.now,
      enableTime: true,
    });
  }
}
