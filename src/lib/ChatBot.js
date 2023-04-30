import { getHeaders, MODE_BALANCED } from './utils.js'
import axios from 'axios'
import ChatHub from './ChatHub.js'

export default class ChatBot {
  constructor(mode = MODE_BALANCED) {
    this.headers = getHeaders()
    this.mode = mode
  }

  async init() {
    const { data: conversation } = await axios.get('https://www.bing.com/turing/conversation/create', { headers: this.headers })
    this.chatHub = new ChatHub(conversation, this.mode)
  }

  async askSync(prompt, callback) {
    return new Promise((resolve) => {
      if (this.chatHub) {
        this.chatHub.on('message', callback)
        this.chatHub.once('final', ({ item }) => {
          this.chatHub.off('message', callback)
          // noinspection JSUnresolvedReference
          resolve(item.messages[1].adaptiveCards[0].body[0].text)
        })
      }
      this.chatHub.ask(prompt).then()
    })
  }

  async ask(prompt) {
    return new Promise((resolve) => {
      if (this.chatHub) {
        this.chatHub.once('final', ({ item }) => {
          // noinspection JSUnresolvedReference
          resolve(item.messages[1].adaptiveCards[0].body[0].text)
        })
      }
      this.chatHub.ask(prompt).then()
    })
  }

  close() {
    if (this.chatHub) this.chatHub.close()
  }

  async reset() {
    await this.init()
  }
}
