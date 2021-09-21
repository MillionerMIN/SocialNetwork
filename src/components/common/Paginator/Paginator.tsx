import React from "react";
import s from './Paginator.module.scss'

type PaginatorType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorType) => {
  const { totalUsersCount, pageSize, currentPage, onPageChange } = props
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={s.lists}>
      {pages.map(p => <button key={p} className={currentPage === p ? s.selectedPage : ''}
        onClick={() => onPageChange(p)}>{p}</button>
      )}
    </div>
  )
}