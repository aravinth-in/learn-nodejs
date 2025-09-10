console.log("TypeScript");

let isDone: Boolean = true;
let num: number = 100;
let str: string = "TypeScript";
let list: number[] = [1, 2, 3];
let products: string[] = ["product1", "product2"];
let products_: Array<string> = ["product1", "product2"];

let randomVal: any = 4;
randomVal = "string";

let undefined_: undefined = undefined;
let null_: null = null;

enum Ticker {
  ETH,
  BTC,
  AAVE,
}
let name: Ticker = Ticker.ETH;

let tuple_: [string, number] = ["QQQ", 580];

interface User {
  name: string;
  id: number;
  email?: string; // ? -> Optional
  readonly createdAt: Date;
}
const user: User = {
  name: "Ethereum",
  id: 1,
  createdAt: new Date(),
};

type Product = {
  title: string;
  price: number;
};
const product_1: Product = {
  title: "Product 1",
  price: 54,
};

function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
};

function greet(name: string, greeting?: string): string {
  return `${name} ${greeting}`;
}
