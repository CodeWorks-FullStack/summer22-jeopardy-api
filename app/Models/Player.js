export class Player {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.points = data.points
    this.correct = data.correct
    this.incorrect = data.incorrect
  }


  get ButtonTemplate() {
    return `
    <div class="col-md-2 mb-3">
      <button onclick="app.playersController.setActivePlayer('${this.id}')" class="btn btn-primary">
        <h4>
          <div>${this.name}</div>
          <div>${this.points}</div>
        </h4>
      </button>
    </div>
    `
  }
}