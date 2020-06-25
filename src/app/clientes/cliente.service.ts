import { Injectable } from '@angular/core';
import { CLIENTES } from './cliente.json';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  constructor() {
    //Código
  }

  getClientes(): Cliente[] {
    return CLIENTES;
  }

}
