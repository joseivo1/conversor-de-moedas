export class ConversaoResponse {
  constructor(public base: string, public date: string, public rates: any) {}
}

//any response return from Server
//{"base":"USD","date":"2020-16-06","rates":{"BRL":5.6}}
