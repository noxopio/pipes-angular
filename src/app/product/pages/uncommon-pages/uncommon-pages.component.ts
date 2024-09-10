import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {

  //i18nSelect pipe
  public name: string = 'Fernando ';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo ',
    'female': 'invitarla'
  }
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female'
  }

  //i18 plural pipe
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melisa ', 'Natalia']
  public clientsMap = {
    '=0 ': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando ',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient(): void {
    this.clients.shift()
  }

  // KeyValue pipe
  public person = {
    name: 'Fernando',
    age: 35,
    address: 'Calle 123	'
  }
// async pipe

  public myobservableTimer:Observable <number> =interval(1000).pipe(
    tap(value=>console.log('tap',value))
  )
// promesa async pipe
public promiseValue: Promise<string>=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data de promesa')
  },3500)
})






}
