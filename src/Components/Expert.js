import Icon from '@mdi/react'
import { mdilPhone, mdilEmail } from '@mdi/light-js'

import './style/expert.css'

const Expert = () => {

    return (
        <div className='expert'>
            <h1 className='expert__title'>Learn from our experts!</h1>
            <p className='expert__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac eros nulla. Donec tincidunt mauris.</p>
            <div className='person'>
                <div className='person__foto'></div>
                <h3 className='person__name'>Taya Riddle</h3>
                <h4 className='person__position'>Lead communications coordinator</h4>
                <span className='person__details'><Icon className='person__icon' path={mdilPhone} />06009977123</span>
                <span className='person__details'><Icon className='person__icon' path={mdilEmail} />e-learning@akarmi.valahol</span>
                <p className='person__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac congue leo. Vivamus eget turpis aliquet ligula tempus ultrices. Praesent tempus condimentum tortor, vitae congue nisi fermentum vitae. Ut blandit dui vitae ligula imperdiet, id egestas mauris lobortis. Morbi vitae quam pharetra, commodo dui a, posuere ex. Maecenas semper vulputate mauris, a dignissim quam dictum sed. Curabitur malesuada tortor nec consequat tristique. Nullam consectetur hendrerit blandit. Suspendisse maximus arcu ac lacus lobortis tempor. Nunc cursus placerat scelerisque. Nunc ullamcorper eleifend enim ac semper. Vivamus volutpat efficitur leo eget aliquet. Sed blandit quam blandit metus facilisis facilisis et at sapien. Sed quis rutrum lacus. In hendrerit nibh vel arcu tempus, id ornare nunc tempus.
                </p>
            </div>
            <div className='person'>
                <div className='person__foto'></div>
                <h3 className='person__name'>Aleksander Jennings</h3>
                <h4 className='person__position'>senior marketing producer</h4>
                <span className='person__details'><Icon className='person__icon' path={mdilPhone} />06009977123</span>
                <span className='person__details'><Icon className='person__icon' path={mdilEmail} />e-learning@akarmi.valahol</span>
                <p className='person__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac congue leo. Vivamus eget turpis aliquet ligula tempus ultrices. Praesent tempus condimentum tortor, vitae congue nisi fermentum vitae. Ut blandit dui vitae ligula imperdiet, id egestas mauris lobortis. Morbi vitae quam pharetra, commodo dui a, posuere ex. Maecenas semper vulputate mauris, a dignissim quam dictum sed. Curabitur malesuada tortor nec consequat tristique. Nullam consectetur hendrerit blandit. Suspendisse maximus arcu ac lacus lobortis tempor. Nunc cursus placerat scelerisque. Nunc ullamcorper eleifend enim ac semper. Vivamus volutpat efficitur leo eget aliquet. Sed blandit quam blandit metus facilisis facilisis et at sapien. Sed quis rutrum lacus. In hendrerit nibh vel arcu tempus, id ornare nunc tempus.
                </p>
            </div>
        </div>
    )
}

export default Expert