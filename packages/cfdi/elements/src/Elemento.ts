
export class Elemento {
    _cfdi: string;
    _prefix: string;
    _name: string;
 
   constructor(prefijo: string, name: string) {
     this._prefix = prefijo
     this._name = name
     this._cfdi = `${prefijo}:${name}`
   }
 
    tag(): string {
     return this._cfdi;
   }
   
    prefix(): string {
     return this._prefix;  
   }
 
    name(): string {
     return this._name;
   }
 }