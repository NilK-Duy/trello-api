/* eslint-disable no-console */

/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'

const START_SEVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hi ${env.AUTHOR} Back-end Server is running succesfully at Host: ${env.APP_HOST} and port: ${env.APP_POST}/`)
  })

  exitHook(() => {
    console.log('4. disconnecting...')
    CLOSE_DB()
    console.log('5. disconnected')
  })
}

// Chỉ khi kết nối tới Database thành công thì mới Start Server Back-end lên
// IIFE
(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas')

    // Khởi động Server Back-end sau khi Connect Database thành công
    START_SEVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// Chỉ khi kết nối tới Database thành công thì mới Start Server Back-end lên
// CONNECT_DB()
//   .then(() => console.log('Connected to MongoDB Cloud Atlas'))
//   .then(() => START_SEVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })

