import React from 'react'
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import s from './Search.module.scss'
interface Props {
    searchValue: string,
    setSearchValue: any
}

const Search: React.FC<Props> = ({ searchValue, setSearchValue }) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className={s.root} >
            <GoSearch className={s.icon} />
            <input className={s.input} type="text" placeholder='Пошук піци' value={searchValue} onChange={handleChange} />
            {searchValue && <GrClose onClick={() => setSearchValue("")} className={s.clearIcon} />}
        </div>
    )
}

export default Search