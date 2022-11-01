import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { ChoppOrder, Chopps, PortionOrder, Portions } from './types/types'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
  log: ['query']
})

app.get('/chopps', async (req, res) => {
  const rawChopps = await prisma.chopps.groupBy({
    by: ['id', 'name', 'type'],
    orderBy: {
      name: 'asc'
    }
  })

  const choppTitles = await prisma.chopps.groupBy({
    by: ['name'],
    orderBy: {
      name: 'asc'
    }
  })

  let chopps = choppTitles.map(title => {
    return {[title.name]: <Chopps[]>[]}
  })

  rawChopps.forEach(rawChopp => {
    chopps.forEach(chopp => {
      if(rawChopp.name === Object.keys(chopp)[0]) {
        chopp[rawChopp.name].push({
          id: rawChopp.id,
          weight: rawChopp.type
        })
      }
    })
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
  const rawPortions = await prisma.portions.groupBy({
    by: ['id', 'name', 'type'],
    orderBy: {
      name: 'asc'
    }
  })

  const portionTitles = await prisma.portions.groupBy({
    by: ['name'],
    orderBy: {
      name: 'asc'
    }
  })

  let portions = portionTitles.map(title => {
    return {[title.name]: <Portions[]>[]}
  })

  rawPortions.forEach(rawPortion => {
    portions.forEach(portion => {
      if(rawPortion.name === Object.keys(portion)[0]) {
        portion[rawPortion.name].push({
          id: rawPortion.id,
          type: rawPortion.type
        })
      }
    })
  })

  return res.json(portions)
})

app.get('/orders', async (req, res) => {
  const orders = await prisma.orders.findMany({
    include: {
      OrderChopp: {
        include: {
          Chopps: {
            select: {
              name: true,
              type: true
            }
          },
        },
        
      },
      OrderPortion: {
        include: {
          Portions: {
            select: {
              name: true,
              type: true,
            }
          },
        },
        
      },
      waiter: {
        select: {
          name: true
        }
      }
    }
  })

  return res.json(orders)
})

app.post('/orders', async (req, res) => {
  const body = req.body
  const chopps = req.body.chopps
  const portions = req.body.portions
  const hour = `${new Date().getHours()}:${new Date().getMinutes()}`

  if(portions.length === 0 && chopps.length === 0) {
    return res.status(406).send('need one chopp or one portion')
  }

  let order = await prisma.orders.create({
    data: {
      waiterId: '7a310ec9-3c36-48f8-a258-71c3c9d58d64',
      command: body.command,
      table: body.table,
      createHour: hour
    }
  })
  
  if(chopps.length > 0) {
    const choppsOrder = chopps
      .map((value: ChoppOrder) => `("${order.id}", "${value.choppId}", ${value.quantity})`)
      .join(",\n\t")
    
    console.log(choppsOrder)
    
    await prisma.$executeRawUnsafe(`INSERT INTO \`main\`.\`OrderChopp\` (OrderId, ChoppId, Quantity) VALUES \n\t${choppsOrder};`)
    
  }

  if(portions.length > 0) {
    const portionsOrder = portions
      .map((value: PortionOrder) => `("${order.id}", "${value.portionId}", ${value.quantity})`)
      .join(",\n\t")
    
    await prisma.$executeRawUnsafe(`INSERT INTO \`main\`.\`OrderPortion\` (OrderId, portionId, Quantity) VALUES \n\t${portionsOrder};`)
  }

  // const response = {...order, chopps: chopps, portions: portions}

  return res.status(201).json(order)
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

app.delete('/orders/', async (req, res) => {
  const deletedUsers = await prisma.orders.deleteMany({})

  return res.status(201).send('delete successfully')
})

app.listen(3333)