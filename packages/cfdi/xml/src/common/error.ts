import { Logger } from "../utils/Logger";

interface XmlErrorParams {
  message: string;
  code: string;
  details?: any;
  name?: string;
  method?: string;
}

export class XmlError  {
  public readonly code: string;
  public readonly details?: any;
  public name: string;
  public message: string;
  public method: string = '';
  constructor({ message, code, details, name, method }: XmlErrorParams) {
   // super(message, { cause: details });
    this.message = message;
    this.code = code;
    this.details = details;
    this.name = name || 'XmlError';
    this.method = method || '';
  }
  setName(name?: string): void {
    if (!name) return;
    this.name = name;
  }

  setMethod(method?: string): void {
    if (!method) return;
    this.method = method;
}
  toString(): string {
    return `${this.name}: ${this.message} ${this.method}`;
  }
}

export function CFDIError({
  e,
  name,
  method,
  debug = false,
}: {
  e: any;
  method?: string;
  name?: string;
  debug?: boolean;
}): XmlError {
  
  if (e instanceof XmlError) {
    e.setName(name);
    e.setMethod(method);
    debug && Logger.error(e.toString());
      return e;
  }
  if (e instanceof Error) {
    const error = new XmlError({
      message: e.message,
      code: 'error',
      method: method,
      //details: e,
      name,
    });

    debug && Logger.error(error.toString());
    return error;
  }
  const error = new XmlError({
    message: String(e),
    code: 'error',
    name,
    method,
  });
  debug && Logger.error(error.toString());
  return error;
}
