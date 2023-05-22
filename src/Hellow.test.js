import { Hellow } from "./Hellow";
import {render,unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
let container=null;

beforeEach(()=>{
    container=document.createElement('div')
    document.body.appendChild(container)
})

it("test static text",()=>{
    act(()=>{
        render(<Hellow />,container)
    })
    const h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe("Hellow Sachin");
})

afterEach(()=>{
   unmountComponentAtNode(container)
   container.remove()
   container=null;
})