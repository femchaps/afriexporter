import React from 'react'
import homeImage from '../../assets/images/homeImage.png'

const OnboardingImage = () => {
    return (
        <div className={styles}>
            <img src={homeImage} />
        </div>
    )
}

export default OnboardingImage

const styles = {
    alignSelf: "flex-end"
}
