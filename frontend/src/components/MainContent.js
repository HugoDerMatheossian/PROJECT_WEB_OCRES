import React from 'react'

function MainContent() {
    return (
        <div className='main-head'>
            <form className='search-box'>
                <input
                    type="search"
                    placeholder='Search for an anime.'
                    required
                />
            </form>
        </div>
    )
}

export default MainContent
