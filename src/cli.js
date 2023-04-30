import readline from 'readline'
import { readInput, TITLE } from './lib/utils.js'
import ChatBot from './lib/ChatBot.js'

let retries = 5

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const bot = new ChatBot()

while (true) {
  try {
    console.clear()
    console.log(TITLE)
    console.log('Connecting...\n\n')

    await bot.init()

    console.clear()
    console.log(TITLE + '\n\n')

    while (true) {
      let prompt = await readInput(rl)

      if (prompt.trim() === ':quit') {
        bot.close()
        break
      } else if (prompt.trim() === ':reset') {
        console.clear()
        console.log(TITLE + '\n\n')
        await bot.reset()
        continue
      }

      let index = 0
      process.stdout.write('\n\n🤖 : ')
      await bot.askSync(prompt, (res) => {
        process.stdout.write(`${res.substring(index)}`)
        index = res.length
      })
      index = 0
      process.stdout.write('\n\n')
    }
  } catch {
    if (retries-- > 0) {
      console.clear()
      console.log(TITLE)

      console.log('Failed to connect, retrying...')
    } else {
      console.clear()
      console.log(TITLE)

      console.log('Failed to connect, Abort.')
      break
    }
  }
}
