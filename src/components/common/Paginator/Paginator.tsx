import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import s from './Paginator.module.scss';

type PaginatorType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  portionSize?: number;
  onPageChange: (pageNumber: number) => void;
  onPageSizeChange: (pageNumber: number, pageSize: number) => void;
};

export const Paginator = (props: PaginatorType) => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChange,
    portionSize = 10,
    onPageSizeChange,
  } = props;
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      <div className={s.lists}>
        {portionNumber > 1 && (
          <IoIosArrowBack
            className={s.arrow}
            onClick={() => setPortionNumber(portionNumber - 1)}
          />
        )}
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((page) => (
            <button
              key={page}
              className={currentPage === page ? s.selectedPage : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        {portionCount > portionNumber && (
          <IoIosArrowForward
            className={s.arrow}
            onClick={() => setPortionNumber(portionNumber + 1)}
          />
        )}
      </div>
      <div className={s.pageSize}>
        Page Size:
        <span
          onClick={() => onPageSizeChange(1, 5)}
          className={pageSize===5 ? s.active : ''}
        >
          5
        </span>
        <span
          onClick={() => onPageSizeChange(1, 10)}
          className={pageSize===10 ? s.active : ''}
        >
          10
        </span>
        <span
          onClick={() => onPageSizeChange(1, 15)}
          className={pageSize===15 ? s.active : ''}
        >
          15
        </span>
      </div>
    </div>
  );
};
