/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as NavBar} from './NavBar'
export {default as ClientList} from './ClientList'
export {default as Home} from './Home'
export {default as IndividualClient} from './IndividualClient'
export {Login, Signup} from './AuthForm'
export {default as Footer} from './Footer'
export {default as AddClient} from './AddClient'
export {default as MassAlert} from './MassAlert'
