import {render, unmountComponentAtNode } from "react-dom";
import { Players } from "./Players";
import {act} from 'react-dom/test-utils'

let container=null

beforeEach(()=>{
    container=document.createElement('div')
    document.body.appendChild(container)
})

it('with props',()=>{
    act(()=>{
        render(<Players ></Players>,container)
    })
    const h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe('Hellow Sachin')
})

it('with out props',()=>{
    act(()=>{
        render(<Players name='UV'></Players>,container)
    })
    const h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe('Hellow UV')
})

afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove()
    container=null
})