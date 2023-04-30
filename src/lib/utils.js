import { config } from 'dotenv'
import { Interface } from 'readline'

// Load .env file
config()

// Constants
export const TITLE = `
              NN   NN             dd               EEEEEEE      dd                  GGGG  PPPPPP  TTTTTTT 
              NNN  NN  oooo       dd   eee         EE           dd  gggggg   eee   GG  GG PP   PP   TTT   
              NN N NN oo  oo  dddddd ee   e _____  EEEEE    dddddd gg   gg ee   e GG      PPPPPP    TTT   
              NN  NNN oo  oo dd   dd eeeee         EE      dd   dd ggggggg eeeee  GG   GG PP        TTT   
              NN   NN  oooo   dddddd  eeeee        EEEEEEE  dddddd      gg  eeeee  GGGGGG PP        TTT   
                                                                    ggggg
`
export const { COOKIE_U } = process.env
export const __dirname = new URL('.', import.meta.url).pathname
export const MODE_CREATIVE = 'h3relaxedimg'
export const MODE_BALANCED = 'galileo'
export const MODE_PRECISE = 'h3precise'
export const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41'

export const DELIMITER = '\x1e'

/**
 * Generates random IP
 * @returns {string}
 */
export function generateRandomIP() {
  return `13.${Math.floor(Math.random() * 104) + 104}.${Array.from(Array(2))
    .map(() => Math.floor(Math.random() * 255))
    .join('.')}`
}

/**
 * gets headers for request
 * @returns Object
 */
export function getHeaders() {
  return {
    'user-agent': USER_AGENT,
    Origin: 'https://www.bing.com',
    Referer: 'https://www.bing.com/',
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
    'sec-ch-ua-platform': 'Windows',
    'x-forwarded-for': generateRandomIP(),
    Cookie: `_U=${COOKIE_U}`,
  }
}

export function createChatRequest(conversation, mode = MODE_BALANCED) {
  let invocationId = 0
  return (prompt) => ({
    arguments: [
      {
        source: 'cib',
        optionsSets: [
          mode,
          'nlu_direct_response_filter',
          'deepleo',
          'disable_emoji_spoken_text',
          'responsible_ai_policy_235',
          'enablemm',
          'dtappid',
          'trn8req120',
          'h3ads',
          'rai251',
          'blocklistv2',
          'localtime',
          'dv3sugg',
        ],
        isStartOfSession: invocationId++ === 0,
        message: {
          author: 'user',
          inputMethod: 'Keyboard',
          text: prompt,
          messageType: 'Chat',
        },
        conversationSignature: conversation.conversationSignature,
        participant: {
          id: conversation.clientId,
        },
        conversationId: conversation.conversationId,
      },
    ],
    invocationId: String(invocationId),
    target: 'chat',
    type: 4,
  })
}

/**
 * Read input from console
 * @param {Interface} rl
 * @returns {Promise<void>}
 */
export async function readInput(rl) {
  rl.setPrompt('You : ')
  rl.prompt()
  return new Promise((resolve) => {
    rl.on('line', (line) => resolve(line.trim()))
  })
}

/**
 * Sleep for ms milliseconds
 * @param {int} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
