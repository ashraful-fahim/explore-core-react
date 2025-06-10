import Book from './Book';

export default function Library ({books}){
    return(
        <div>
            <h2>My National Central Library</h2>
            <p>Address: </p>
            <p>Books Collection: {books.length}</p>
            <ul>
                {
                    books.map(book => <Book key ={book.id} book ={book}></Book>)
                }
            </ul>
        </div>
    )
}