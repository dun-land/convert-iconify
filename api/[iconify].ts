import sharp from 'sharp'

import { Buffer } from 'buffer'
import { extname } from 'path'
import { $fetch } from 'ohmyfetch'

import type { VercelRequest, VercelResponse } from '@vercel/node'

sharp.cache({ memory: 512 })

export default async (req: VercelRequest, res: VercelResponse) => {
  const iconifyFileName = req.query.iconify as string | undefined

  // Missing filename
  if (!iconifyFileName) {
    return error(res, 404)
  }

  const extension = extname(iconifyFileName)
  const icon = iconifyFileName.replace(extension, '')
  const format = extension.replace(/^\./, '')

  const apiBuffer = await $fetch(
    `${icon}.svg`,
    {
      method: 'GET',
      baseURL: 'https://api.iconify.design/',
      params: req.query,
      responseType: 'arrayBuffer'
    }
  ).catch((e) => {
    console.error(e)
    return error(res, 503)
  })

  if (!apiBuffer) {
    return error(res, 404)
  }

  const buffer = Buffer.from(apiBuffer as ArrayBuffer)

  if (format === 'svg') {
    return res.end(buffer)
  }

  const convertedImage = sharp(buffer)

  switch (format) {
    case 'png':
      res.setHeader('Content-Type', 'image/png')
      convertedImage.png()
      break
    case 'jpg':
    case 'jpeg':
      res.setHeader('Content-Type', 'image/jpg')
      convertedImage
        .flatten({ background: { r: 255, g: 255, b: 255 } }) // background color to white
        .jpeg({ quality: 100 })
      break
    case 'webp':
      res.setHeader('Content-Type', 'image/webp')
      convertedImage.webp()
      break
    default:
      return error(res, 400)
  }

  res.send(await convertedImage.toBuffer())
  res.end()
}

function error(res: VercelResponse, statusCode: number) {
  res.status(statusCode)
  res.end()
}
