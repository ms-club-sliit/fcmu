import React from 'react'
import HeroSection from '../components/client/community/HeroSection/index'
import communityHero from '../assets/images/community/community-background.png'
import communityImg from '../assets/images/community/community-image.png'
import communityLine from '../assets/images/community/background-line.png'

function CommunityPage(props) {
  return (
    <div>
      <HeroSection
        description="Lorem ipsum dolor sit amet consectetur. Vulputate
                   iaculis facilisis consequat nec amet mi morbi blandit.
                   Facilisis posuere blandit massa turpis nulla. Sed risus
                   tellus nunc pellentesque. Suspendisse arcu commodo bibendum
                   risus. Amet risus facilisis vitae tellus adipiscing semper
                   arcu risus. Viverra non dui dui sodales auctor neque
                   phasellus varius. Vulputate lobortis felis diam eu at
                   viverra nulla. Eu nulla arcu in quam. Vitae justo ultrices
                   pellentesque in orci nulla duis. Neque non enim laoreet "
        imgAltText="lorem ipsum"
        imgSrc={communityHero}
        title={{ titleOne: 'SLIIT', titleTwo: 'Faculty of Computing', titleThree: 'Media Unit' }}
      />
      <div className="container-fluid row px-2 pb-4 m-0">
        <p>
          faucibus sollicitudin. Feugiat turpis velit fermentum metus. Ipsum ultrices quam egestas
          turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit pellentesque tortor
          sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in a lorem id egestas.
          Cras cum vitae blandit massa. faucibus sollicitudin. Feugiat turpis velit fermentum metus.
          Ipsum ultrices quam egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur
          blandit pellentesque tortor sagittis enim suspendisse. Varius vitae ullamcorper mus
          ultricies in a lorem id egestas. Cras cum vitae blandit massa.
        </p>
        <img className="px-0" src={communityImg} alt="community image" />

        <p className="mt-4">
          faucibus sollicitudin. Feugiat turpis velit fermentum metus. Ipsum ultrices quam egestas
          turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit pellentesque tortor
          sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in a lorem id egestas.
          Cras cum vitae blandit massa. faucibus sollicitudin. Feugiat turpis velit fermentum metus.
          Ipsum ultrices quam egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur
          blandit pellentesque tortor sagittis enim suspendisse. Varius vitae ullamcorper mus
          ultricies in a lorem id egestas. Cras cum vitae blandit massa.
        </p>

        <p className="mt-4">
          faucibus sollicitudin. Feugiat turpis velit fermentum metus. Ipsum ultrices quam egestas
          turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit pellentesque tortor
          sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in a lorem id egestas.
          Cras cum vitae blandit massa. faucibus sollicitudin. Feugiat turpis velit fermentum metus.
          Ipsum ultrices quam egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur
          blandit pellentesque tortor sagittis enim suspendisse. Varius vitae ullamcorper mus
          ultricies in a lorem id egestas. Cras cum vitae blandit massa.faucibus sollicitudin.
          Feugiat turpis velit fermentum metus. Ipsum ultrices quam egestas turpis in. Sapien nulla
          magnis ornare nulla. Consectetur blandit pellentesque tortor sagittis enim suspendisse.
          Varius vitae ullamcorper mus ultricies in a lorem id egestas. Cras cum vitae blandit
          massa. faucibus sollicitudin. Feugiat turpis velit fermentum metus. Ipsum ultrices quam
          egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit pellentesque
          tortor sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in a lorem id
          egestas. Cras cum vitae blandit massa.
        </p>
        <img id="backgroundLineImage" className="px-0" src={communityLine} alt="community image" />
      </div>
    </div>
  )
}

export default CommunityPage
