import { ProxyState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPlayers() {
  let template = ''
  ProxyState.players.forEach(p => template += p.ButtonTemplate)
  // @ts-ignore
  document.getElementById('stage').innerHTML = template
}

function _drawPlayer() {
  let player = ProxyState.player
  if (!player) {
    return
  }
  // @ts-ignore
  document.getElementById('player-name').textContent = `Hello, ${player.name}`
  // @ts-ignore
  document.getElementById('player-points').textContent = player.points
}

export class PlayersController {
  constructor () {
    ProxyState.on('players', _drawPlayers)
    ProxyState.on('player', _drawPlayer)
    this.getPlayers()
  }

  async getPlayers() {
    try {
      await playersService.getPlayers()
    } catch (error) {
      Pop.error(error)
      console.error('[getPlayers]', error);
    }
  }

  setActivePlayer(id) {
    playersService.setActivePlayer(id)
  }
}