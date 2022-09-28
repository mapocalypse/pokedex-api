import React from 'react';

const Pagination = (props) => {
    const {onPreviousClick, onNextClick, page, totalPages} = props;

    return (
        <nav>
        <ul className="pagination pagination-sm">
            <li className="page-item"><button className="page-link link-secondary" onClick={onPreviousClick}>Previous</button></li>
            <li className="page-item"><button className="page-link disabled link-secondary">{page} of {totalPages}</button></li>
            <li className="page-item"><button className="page-link link-secondary" onClick={onNextClick}>Next</button></li>
        </ul>
        </nav>
    )
}

export default Pagination;