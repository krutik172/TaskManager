import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "hideme" ];
  connect() {
    console.log(this.element)
  }

  toggle(e) {
    const id = e.target.dataset.id
    const csrfToken = document.querySelector("[name='csrf-token']").content

    fetch(`/tasks/${id}/toggle`, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ completed: e.target.checked }) 
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message)
      })   
  }

  show(){
    if (this.inputTarget.checked) {

      this.hidemeTarget.style.color = "green"
      this.hidemeTarget.style.fontSize = "30px"

    }else {

      this.hidemeTarget.style.color = "red"
      this.hidemeTarget.style.fontSize = "30px"
      
    }
  }

  hide() {
    this.hidemeTarget.style.color = ""
    this.hidemeTarget.style.fontSize = "20px"
  }
  

}
