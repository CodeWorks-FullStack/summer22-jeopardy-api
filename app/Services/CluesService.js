import { ProxyState } from "../AppState.js";
import { Clue } from "../Models/Clue.js";
import { Player } from "../Models/Player.js";
import { jeopardyApi, sandboxApi } from "./AxiosService.js"

class CluesService {
  async answered(correctly) {
    if (correctly) {
      ProxyState.player.points += ProxyState.clue.value
      ProxyState.player.correct++
    }
    else {
      ProxyState.player.points -= ProxyState.clue.value
      ProxyState.player.incorrect++
    }
    // ASYNC STUFF
    const res = await sandboxApi.put(`players/${ProxyState.player.id}`, ProxyState.player)
    console.log('put request for player', res.data);
    ProxyState.player = new Player(res.data)
  }
  setActiveClue(id) {
    let clue = ProxyState.clues.find(c => c.id == id)
    if (!clue) {
      return
    }
    ProxyState.clue = clue
  }
  async getClues() {
    const res = await jeopardyApi.get('api/random', { params: { count: 8 } })
    console.log('Get clues', res.data);
    ProxyState.clues = res.data.map(c => new Clue(c))
  }

}

export const cluesService = new CluesService()