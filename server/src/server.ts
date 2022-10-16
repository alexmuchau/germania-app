import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { ChoppOrder, PortionOrder } from './types/types'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
  log: ['query']
})

app.get('/chopps', async (req, res) => {
  const chopps = await prisma.chopps.findMany({
    select: {
      id: true,
      name: true,
      type: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  return res.json(chopps)
})

app.post('/chopps', async (req, res) => {
  const body = req.body
  
  console.log(body)

  const chopps = await prisma.chopps.create({
    data: {
      name: body.name,
      type: body.type,
    },
  })

  return res.status(201).json(chopps)
})

app.get('/portions', async (req, res) => {
  const portions = await prisma.portions.findMany({
    select: {
      id: true,
      name: true,
      type: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  return res.json(portions)
})

app.get('/orders', async (req, res) => {
  const orders = await prisma.orders.findMany({
    include: {
      OrderChopp: true,
      OrderPortion: true,
    }
  })

  return res.json(orders)
})

app.post('/orders', async (req, res) => {
  // const body = req.body
  const chopps = req.body.chopps
  const portions = req.body.portions

  if(portions.length === 0 && chopps.length === 0) {
    return res.status(406).send('need one chopp or one portion')
  }

  let order = await prisma.orders.create({
    data: {
      waiterId: '7a310ec9-3c36-48f8-a258-71c3c9d58d64'
    }
  })
  
  let response = [order]

  if(chopps.length > 0) {
    const choppsOrder = chopps
      .map((value: ChoppOrder) => `("${order.id}", "${value.choppId}", ${value.quantity})`)
      .join(",\n\t")
    
    console.log(choppsOrder)
    
    await prisma.$executeRawUnsafe(`INSERT INTO \`main\`.\`OrderChopp\` (OrderId, ChoppId, Quantity) VALUES \n\t${choppsOrder};`)
    
    response.push(choppsOrder)
  }

  if(portions.length > 0) {
    const portionsOrder = portions
      .map((value: PortionOrder) => `("${order.id}", "${value.portionId}", ${value.quantity})`)
      .join(",\n\t")
    
    await prisma.$executeRawUnsafe(`INSERT INTO \`main\`.\`OrderPortion\` (OrderId, portionId, Quantity) VALUES \n\t${portionsOrder};`)
  }

  

  return res.status(201).json(response)
})

app.delete('/orders/:id', async (req, res) => {
  const orderId = req.params.id

  await prisma.orders.delete({
    where: {
      id: orderId,
    }
  })

  return res.status(201).send('delete successfully')
})

app.listen(3333)