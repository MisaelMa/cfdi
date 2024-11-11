
export class Elemento<T> {
    private _cfdi: string;
    private _prefix: string;
    private _name: string;
 
   constructor(tag: string){
    const [prefijo, name] = tag.split(':')
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