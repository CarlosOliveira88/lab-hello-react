import components from '../images/components.png';

function Components() {
    return (
        <div className="container">
            <img
                src={components} alt="Components ironhack" className='image' />
            <h2>Components</h2>
            <p>Build encapsulated <br></br> components that <br></br> manage their state.</p>
        </div>
    )
}

export default Components;