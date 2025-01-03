
import moment from 'moment';
import FeaturedImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../shared-component/SectionTitle';
import '../Featured/Featured.css'

const Featured = () => {


    // getting current date using moment 

    const currentDate = moment().format('MMMM Do, YYYY');

    return (
        <div className='featured bg-fixed bg-cover bg-center bg-black/50 bg-blend-overlay text-white'>

            <div className='py-4'>
                <SectionTitle
                    subtitle={'check it out'}
                    title={"From Our Menu"}

                />
            </div>

            <div className='lg:flex  items-center justify-center lg:px-36 lg:py-20 gap-6' >
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>

                {/* text content  */}

                <div className='space-y-4'>
                    <p> {currentDate}</p>
                    <h2 className='text-2xl font-semibold'> Where Can I Get Some ? </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus ad numquam sed odit eos amet possimus saepe, soluta omnis, perferendis, corporis quam nihil doloremque molestiae accusantium. Consequatur, illum ipsa.
                        Amet, eos inventore deleniti, facilis animi atque consectetur veniam exercitationem magnam aliquam similique possimus fugiat aperiam est dolorem odio perferendis quos qui eum pariatur! Est, in? Quod voluptatem earum eveniet.</p>

                    <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;