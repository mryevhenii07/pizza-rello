import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

interface Props {
    handleChangePage: (number: number) => void;
}

const Pagination: React.FC<Props> = ({ handleChangePage }) => {
    return (
        <>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => { handleChangePage(e.selected + 1) }}
                pageRangeDisplayed={8}
                pageCount={4}
                previousLabel="<"
            // renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination