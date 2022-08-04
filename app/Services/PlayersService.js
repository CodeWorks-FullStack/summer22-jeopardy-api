import { ProxyState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { sandboxApi } from "./AxiosService.js"

class PlayersService {
  setActivePlayer(id) {
    let player = ProxyState.players.find(p => p.id == id)
    if (!player) {
      return
    }
    ProxyState.player = player
  }
  async getPlayers() {
    const res = await sandboxApi.get('/players')
    console.log(res.data);
    ProxyState.players = res.data.map(p => new Player(p))
  }

}

export const playersService = new PlayersService()