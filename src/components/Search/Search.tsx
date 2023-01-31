import {useRef, useState,useCallback} from 'react'
import {  useDispatch } from 'react-redux'
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import debounce from 'lodash.debounce';

import {setSearchValue} from '../../redux/filter/filterSlice'
import s from './Search.module.scss'

const Search: React.FC = () => {
const dispatch = useDispatch()
const [value,setValue]=useState<string>("")
const inputRef = useRef<HTMLInputElement>(null)

    const handleClickClear =()=>{ 
        dispatch(setSearchValue(""))
        setValue("")
        inputRef.current?.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str: string) => {
        dispatch(setSearchValue(str));
        }, 250),[],
    );

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value);
    }
    return (
        <div className={s.root} >
            <GoSearch className={s.icon} />
            <input
            ref={inputRef} 
            className={s.input} 
            type="text"
            placeholder='Пошук піци'
            value={value} 
            onChange={handleChange} />
            {value && <GrClose onClick={handleClickClear}  className={s.clearIcon} />}
        </div>
    )
}

export default Search