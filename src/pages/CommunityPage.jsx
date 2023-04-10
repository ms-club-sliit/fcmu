import React from "react"
import HeroSection from "../components/client/community/HeroSection/index"
import communityImg from "../assets/images/community/community-background.png"

function CommunityPage(props) {
  return (
    <div>
      <HeroSection description="Lorem ipsum dolor sit amet consectetur. Vulputate
                   iaculis facilisis consequat nec amet mi morbi blandit.
                   Facilisis posuere blandit massa turpis nulla. Sed risus
                   tellus nunc pellentesque. Suspendisse arcu commodo bibendum
                   risus. Amet risus facilisis vitae tellus adipiscing semper
                   arcu risus. Viverra non dui dui sodales auctor neque
                   phasellus varius. Vulputate lobortis felis diam eu at
                   viverra nulla. Eu nulla arcu in quam. Vitae justo ultrices
                   pellentesque in orci nulla duis. Neque non enim laoreet " imgAltText="lorem ipsum"
                   imgSrc={communityImg}
                   title={{ "titleOne": "SLIIT", "titleTwo": "Faculty of Computing", "titleThree": "Media Unit" }} />
    </div>
  )
}

export default CommunityPage