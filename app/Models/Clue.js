export class Clue {
  constructor (data) {
    this.id = data.id
    this.category = data.category.title
    this.answer = data.answer
    this.question = data.question
    this.value = data.value || 1000
  }

  get CardTemplate() {
    return `
    <div class="col-md-3 my-3">
      <div onclick="app.cluesController.setActiveClue('${this.id}')" class="card elevation-2 selectable no-select" data-bs-toggle="modal" data-bs-target="#clue-modal">
        <div class="card-body text-center">
          <p><b>${this.category}</b></p>
          <h2>${this.value}</h2>
        </div>
      </div>
    </div>
  `
  }

  get ModalTemplate() {
    return `
    <div class="border-bottom pb-2 mb-2">
        <p>${this.question}</p>

      </div>
      <div class="text-center">
        <i class="mdi mdi-magnify f-18 me-2"></i>
        <h4 class="on-hover">${this.answer}</h4>
    </div>
    `
  }
}