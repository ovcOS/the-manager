// @flow

declare type Id = string;

declare type Card = {|
  name: string,
  description: string,
  dueDate?: Date 
|}

declare type Category = {|
  name: string,
  cardIds: Id[]  
|}