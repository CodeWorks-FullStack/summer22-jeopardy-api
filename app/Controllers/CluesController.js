import { ProxyState } from "../AppState.js";
import { cluesService } from "../Services/CluesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawClues() {
  let template = ''
  ProxyState.clues.forEach(c => template += c.CardTemplate)
  // @ts-ignore
  document.getElementById('stage').innerHTML = template
}

function _drawClue() {
  if (!ProxyState.clue) {
    return
  }
  // @ts-ignore
  document.getElementById('clue-modal-title').innerText = ProxyState.clue.category + ' ' + ProxyState.clue.value
  // @ts-ignore
  document.getElementById('clue-modal-body').innerHTML = ProxyState.clue.ModalTemplate
}

export class CluesController {
  constructor () {
    ProxyState.on('player', this.getClues)
    ProxyState.on('clues', _drawClues)
    ProxyState.on('clue', _drawClue)
  }

  async getClues() {
    try {
      if (!ProxyState.player) {
        return
      }
      await cluesService.getClues()
    } catch (error) {
      Pop.error(error)
      console.error('[getClues]', error);
    }
  }

  setActiveClue(id) {
    try {
      cluesService.setActiveClue(id)
    } catch (error) {
      Pop.error(error)
      console.error('[setActiveClue]', error);
    }
  }

  async answered(correct) {
    try {
      await cluesService.answered(correct)
    } catch (error) {
      Pop.error(error)
      console.error('[answerQuestion]', error);
    }
  }
}