/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */

import illustration from '../../../../assets/images/AboutPage/peps-looking-at-laptop.png'
import './styles.css'

const WhoWeAreSection = () => {
  return (
    <div id="intro-section" className="container">
      <div className="row">
        <div className="col">
          <h1 className="intro-header">Who We Are </h1>
        </div>
      </div>

      <div className="row d-flex align-items-center spacer-bottom">
        <div className="col-12 col-md-12 col-lg-6">
          <p className="para-dark-blue">
            <span className="firstcharacter">L</span>
            orem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam odio ab modi.
            Alias inventore quisquam placeat officia laborum, ad asperiores delectus impedit quas?
            Aliquam praesentium corporis dignissimos accusantium sunt?
          </p>
          <p className="para-dark-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam odio ab modi.
            Alias inventore quisquam placeat officia laborum, ad asperiores delectus impedit quas?
            Aliquam praesentium corporis dignissimos accusantium sunt?
          </p>
          <p className="para-dark-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam odio ab modi.
            Alias inventore quisquam placeat officia laborum, ad asperiores delectus impedit quas?
            Aliquam praesentium corporis dignissimos accusantium sunt?
          </p>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-end">
          <img src={illustration} alt="Illustration" className="intro-illustration" />
        </div>
      </div>

      <br />

      <div className="row spacer-bottom">
        <div className="col">
          <p className="para-dark-blue">
            Nibh in posuere donec sed quis ac sollicitudin lacus consectetur. Pellentesque quam
            lacus rhoncus commodo ornare urna id auctor. Ultricies suspendisse egestas tortor cursus
            at quis. Dictum ipsum quam arcu pretium vitae viverra. Placerat porta enim montes nunc
            turpis leo duis eu vitae. Elementum enim nulla malesuada quam hac aliquam. Nunc est quis
            dui mattis nunc. Nulla eu felis scelerisque id at facilisis. Scelerisque diam faucibus
            nibh faucibus sollicitudin. Feugiat turpis velit fermentum metus. Ipsum ultrices quam
            egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit pellentesque
            tortor sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in a lorem id
            egestas. Cras cum vitae blandit massa.
          </p>
          <p className="para-dark-blue">
            Vitae id egestas condimentum hac eget dictum bibendum elementum. Ornare arcu
            pellentesque sociis malesuada risus accumsan. Nunc nisi sed eu lacus ut tortor blandit.
            Et semper nibh tristique lacus et quis neque lectus a. Sed nec ante dignissim egestas
            felis suspendisse purus in cum. Quis est vitae arcu at. Eget praesent fames non nec
            fusce. Convallis elementum velit dignissim risus tempus amet. Imperdiet ac in donec
            ultrices euismod cursus enim. In tempor sed lobortis dictum quis dignissim diam quis. Ut
            consequat bibendum sem mattis tincidunt. Dolor mi semper turpis penatibus pellentesque.
            Augue ut sagittis sed adipiscing volutpat. Eget nisi dictumst blandit hendrerit
            accumsan. Lectus viverra semper tristique eros.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
