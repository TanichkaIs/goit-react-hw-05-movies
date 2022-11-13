import {Link} from 'react-router-dom'

export default function NotFoundView () {
    return (
        <h1>Not found information. Go to <Link to='/'>Homepage</Link></h1>
    )
}