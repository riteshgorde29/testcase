import { render,unmountComponentAtNode } from "react-dom";
import { Count } from "./Count";
import {act} from 'react-dom/test-utils'
let container=null

beforeEach(()=>{
    container=document.createElement('div')
    document.body.appendChild(container)
})

it('initial val',()=>{
    act(()=>{
        render(<Count />,container)
    })
    const h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe('0')
})

it('after increment btn click',()=>{
    act(()=>{
        render(<Count />,container)
    })
    const h1Ref=document.querySelector('h1')
    const btnRef=document.querySelector('button')

    act(() => {
        btnRef.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

    expect(h1Ref.textContent).toBe('1')
})

afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove()
    container=null;
})