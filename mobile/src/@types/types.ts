export interface RawOrder {
    id: string,
		waiterId : string,
		table: number,
		command: number,
		createHour: string,
		OrderChopp: 
			{
				OrderId: string,
				ChoppId: string,
				Quantity: number,
				Chopps: {
					name: string,
					type: string
				}
			}[],	
		OrderPortion: 
			{
				OrderId: string,
				PortionId: string,
				Quantity: number,
				Portions: {
					name: string,
					type: string
				}
			}[],
		waiter: {
			name: string
		}
}

export interface Order {
  id: string
  waiter: string,
  table: Number,
  command: Number,
  createHour: String,
  checked: boolean,
  products: { id: string ,name: string, quantity: Number }[],
}

export interface Chopps {
	[title: string]: {
		id: string,
		weight: string
	}[]
}

export interface Portions {
	[title: string]: {
		id: string,
		type: string
	}[]
}