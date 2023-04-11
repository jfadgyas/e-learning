import './style/landing.css'

const Landing = () => {

    return (
        <div className='landing'>
            <h1 className='landing__title'>Landing Lorem Ipsum</h1>
            <p className='landing__motto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nunc diam. Nunc viverra, massa ac lobortis fringilla, lectus lectus volutpat velit, vitae tempus urna massa quis metus. Sed nec accumsan nunc. Aliquam congue euismod fermentum. Aenean consequat dui ac venenatis ultricies. 
            </p>
            <button className='landing__btn'>Try it!</button>
            <div className='landing__media'>
                <div className='landing__icons landing__icons--fb'></div>
                <div className='landing__icons landing__icons--insta'></div>
                <div className='landing__icons landing__icons--tiktok'></div>
            </div>
        </div>
    )
}

export default Landing