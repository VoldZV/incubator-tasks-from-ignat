import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState[0]._id).toBe(1)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].age).toBe(3)
    expect(newState[5].name).toBe('Кот')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState[0].age).toBe(3)
    expect(newState[0].name).toBe('Кот')
    expect(newState[5]._id).toBe(1)
    expect(newState[5].name).toBe('Александр')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})


    expect(newState.findIndex(p => p.age === 3)).toBe(-1)
    expect(newState.findIndex(p => p.age === 66)).toBe(0)

})
