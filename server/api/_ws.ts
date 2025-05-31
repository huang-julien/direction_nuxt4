import { consola } from 'consola'

const VALID_ANSWERS = ['nuxt', 'vue', 'none']

export default defineWebSocketHandler({
  open(peer) {
    consola.log('Peer connected:', peer.id)
    peer.subscribe('response')
  },
  async message(peer, message) {
    consola.log('Received message:', peer.id, message.toString())

    if (VALID_ANSWERS.includes(message.toString().toLowerCase())) {
      console.log('Sending response:', message.toString())

      peer.publish('response', message.toString())
    }
  },
  close(peer) {
    consola.log('Peer disconnected:', peer.id)
  },
})
