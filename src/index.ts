import {Map} from 'immutable'

const invoice = Map<string, number>();
const newInvoice = invoice.set('x', 1);
export const Greeter = (name: string) => `Hello ${name}`;

