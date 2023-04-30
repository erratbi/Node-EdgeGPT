import readline from 'readline'
import { sleep, TITLE } from './lib/utils.js'

let retries = 5

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

while (true) {
  try {
    console.clear()
    console.log(TITLE)

    console.log('Connecting...\n\n')
    await sleep(5000)
    throw new Error('Failed to connect')
  } catch {
    if (retries-- > 0) {
      console.clear()
      console.log(TITLE)

      console.log('Failed to connect, retrying...')
      await sleep(5000)
    } else {
      console.clear()
      console.log(TITLE)

      console.log('Failed to connect, Abort.')
      process.exit(0)
    }
  }
}
