import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

interface PaginationProps {
    handleChangePage: (page: number) => void;
    currentPage:number
}

const Pagination: React.FC<PaginationProps> = ({ handleChangePage,currentPage }) => {
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
                forcePage={currentPage - 1}
            />
        </>
    )
}

export default Pagination