import single from '../images/single-way.png';

function Single() {
    return (
        <div className="container">

            <img src={single} alt='single way' className='image' />
            <h2>Single-Way</h2>
            <p>A set of immutable <br></br> values are passed to <br></br> the component's.</p>
        </div>
    )
}

export default Single