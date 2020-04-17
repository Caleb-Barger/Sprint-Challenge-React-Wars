import React from 'react'

const NextPage = props => {
    const {setPage, page} = props
    const loadNextPage = e => {
        setPage(page + 1)
        debugger
    }
    return(
        <button onClick={loadNextPage}>Load Next</button>
    )
}

export default NextPage