import React from 'react'
import HeroSection from '../components/client/community/HeroSection/index'
import communityHero from '../assets/images/community/community-background.png'
import communityImg from '../assets/images/community/community-image.png'
import communityLine from '../assets/images/community/background-line.png'

function CommunityPage(props) {
  return (
    <div>
      <HeroSection
        description="The Sliit Media Unit is an essential part of the campus community, providing valuable support to various departments and faculties within the university. This group of volunteers is responsible for capturing important moments and creating content that promotes the university's activities, achievements, and events."
        imgAltText="lorem ipsum"
        imgSrc={communityHero}
        title={{ titleOne: 'SLIIT', titleTwo: 'Faculty of Computing', titleThree: 'Media Unit' }}
      />
      <div className="container-fluid row px-2 pb-4 m-0">
        <p>
          One of the primary roles of the Sliit Media Unit is photography. They use their skills and expertise to take high-quality photographs that document the university's activities, including workshops, seminars, and cultural events. These images are used for promotional materials, social media, and other marketing campaigns.
            Creative writing is another important aspect of the Sliit Media Unit's work.
        </p>
        <img className="px-0" src={communityImg} alt="community image" />

        <p className="mt-4">
          They are responsible for creating engaging content that tells stories about the university, its people, and its achievements. This content is used for newsletters, blogs, and other digital platforms, helping to promote the university to a wider audience.
            The Sliit Media Unit also creates digital media, including videos and animations. They use their skills and expertise to create engaging content that promotes the university's activities, achievements, and events. This content is used for promotional materials, social media, and other marketing campaigns.
        </p>

        <p className="mt-4">

            At the SLIIT Faculty of Computing Media Unit, we believe that diversity and collaboration are key to innovation and creativity. We are committed to fostering an inclusive and supportive environment where every voice is heard and respected. Our team of experienced professionals is dedicated to providing students with the skills and resources they need to succeed in a rapidly evolving digital landscape.
            So what are you waiting for? If you're a young and talented media enthusiast who is passionate about creating and delivering engaging content, we invite you to join us at the SLIIT Faculty of Computing Media Unit. Your moment to shine is now!
        </p>
        <img id="backgroundLineImage" className="px-0" src={communityLine} alt="community image" />
      </div>
    </div>
  )
}

export default CommunityPage
