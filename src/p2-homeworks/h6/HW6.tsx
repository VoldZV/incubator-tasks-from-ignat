import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import './h6.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        // исправил минибаг с моей точки зрения - при нажатии на save (если активный input и в нем пустая строка или пробелы),
        // то просто исчезал и span и input, а также пустое значение сохранялось в localstorage,
        // и мы безвозвратно теряли span, как будто удаляли (плюс откорректировал ф-цию onChangeText,
        // чтобы не сеталась строка с пробелами)
        if(value.trim())saveState<string>('editable-span-value', value)
        // saveState<string>('editable-span-value', value) // старый вариант
    }
    const restore = () => {
        setValue(restoreState('editable-span-value',value))
    }

    const onChangeTextHandler = (textValue: string) => {
        // setValue(textValue) // старый вариант (только с оберткой)
        if(textValue.trim()) setValue(textValue)
        else setValue('')
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={'editableSpan'}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={onChangeTextHandler}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
