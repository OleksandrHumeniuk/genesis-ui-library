import React, {FC} from 'react';
import {Pagination as PaginationMUI, PaginationProps} from '@mui/material';

import "./Pagination.scss";

const Pagination: FC<PaginationProps> = (props) => {
    return (
        <PaginationMUI className="pagination" {...props}/>
    );
};

export default Pagination;