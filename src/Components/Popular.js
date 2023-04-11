import './style/popular.css'

const Popular = () => {

    return (
        <div className='popular'>
            <h2 className='popular__title'>Our most popular courses</h2>
            <p className='popular__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu vulputate urna. Fusce congue, libero et sagittis posuere, eros justo rutrum augue, et posuere diam.</p>
            <div className='popular__container'>
                <div className='cards'>
                    <div className='cards__background'></div>
                    <h3 className='cards__title'>Social media marketing</h3>
                    <p className='cards__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus efficitur hendrerit. Vestibulum vehicula tellus vitae nibh sagittis ultricies. Cras posuere tellus nec justo tincidunt, at volutpat lacus tempor. Donec rhoncus, elit accumsan pulvinar ultrices, sem arcu rhoncus dolor, viverra pellentesque lacus mi nec diam. Curabitur mattis ex elit, ac consequat sem malesuada nec. Maecenas varius placerat lacus sed vulputate. Quisque vitae sapien pulvinar, sodales leo sit amet, porttitor purus. Donec et dui ut velit porttitor efficitur. </p>
                    <p className='cards__duration'>Duration: 100 hours / 65% completed</p>
                    <button className='cards__btn'>Start / Continue</button>
                    {/* <label>
                        <progress className='cards__progress' max='100' value='65'></progress>
                        65% completed
                    </label> */}
                    <p className='cards__price'>50 EUR</p>
                </div>
                <div className='cards'>
                    <div className='cards__background'></div>
                    <h3 className='cards__title'>Email marketing strategies</h3>
                    <p className='cards__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus efficitur hendrerit. Vestibulum vehicula tellus vitae nibh sagittis ultricies. Cras posuere tellus nec justo tincidunt, at volutpat lacus tempor. Donec rhoncus, elit accumsan pulvinar ultrices, sem arcu rhoncus dolor, viverra pellentesque lacus mi nec diam. Curabitur mattis ex elit, ac consequat sem malesuada nec. Maecenas varius placerat lacus sed vulputate. Quisque vitae sapien pulvinar, sodales leo sit amet, porttitor purus. Donec et dui ut velit porttitor efficitur. </p>
                    <p className='cards__duration'>Duration: 100 hours / 80% completed</p>
                    <button className='cards__btn'>Start / Continue</button>
                    {/* <label>
                        <progress className='cards__progress' max='100' value='80'></progress>
                        80% completed
                    </label> */}
                    <p className='cards__price'>50 EUR</p>
                </div>
                <div className='cards'>
                    <div className='cards__background'></div>
                    <h3 className='cards__title'>Content marketing</h3>
                    <p className='cards__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus efficitur hendrerit. Vestibulum vehicula tellus vitae nibh sagittis ultricies. Cras posuere tellus nec justo tincidunt, at volutpat lacus tempor. Donec rhoncus, elit accumsan pulvinar ultrices, sem arcu rhoncus dolor, viverra pellentesque lacus mi nec diam. Curabitur mattis ex elit, ac consequat sem malesuada nec. Maecenas varius placerat lacus sed vulputate. Quisque vitae sapien pulvinar, sodales leo sit amet, porttitor purus. Donec et dui ut velit porttitor efficitur. </p>
                    <p className='cards__duration'>Duration: 100 hours / 35% completed</p>
                    <button className='cards__btn'>Start / Continue</button>
                    {/* <label>
                        <progress className='cards__progress' max='100' value='35'></progress>
                        35% completed
                    </label> */}
                    <p className='cards__price'>50 EUR</p>
                </div>
            </div>
        </div>
    )
}

export default Popular