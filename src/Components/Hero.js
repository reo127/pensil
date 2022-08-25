import React from 'react'
import logo from '../images/pensilLogo.svg'
import image2 from '../images/section2.jpeg'
import image3 from '../images/section3.jpeg'

const Hero = () => {
  return (
    <div className='font-monstra'>
      <nav className='flex items-center justify-between py-4 px-8 sm:px-24 border-b'>
        <img src={logo} alt="Logo" />
        <div className='flex items-center hidden lg:block'>
          <a href="/" className='text-[#222] font-semibold mr-6'>Use case <i className="fa-solid fa-angle-down text-[#999] "></i> </a>
          <a href="/" className='text-[#222] font-semibold mr-6'>Resource <i className="fa-solid fa-angle-down text-[#999] "></i> </a>
          <a href="/" className='text-[#222] font-semibold mr-6'>Price </a>
          <a href="/" className='text-blue1 bg-light px-5 py-4 rounded-lg font-semibold mr-2'> Login </a>
          <a href="/" className='text-white bg-blue1 hover:bg-blue2 px-5 py-4 rounded-lg font-semibold'> Try for Free </a>
        </div>
        <i className="fa-solid fa-bars block lg:hidden text-2xl"></i>
      </nav>



      <section className="hero ">
        <div className='text-center flex flex-col items-center lg:my-32 my-8'>
          <h1 className='font-black lg:text-[70px] sm:text-5xl text-4xl max-w-[60rem] lg:leading-[80px] leading-10 '>One platform for all your community needs</h1>
          <a href="/" className='flex items-center mt-8'>
            <h1 className='text-blue1 hover:text-blue2 lg:text-[70px] sm:text-5xl text-4xl font-black hover:mr-3'>Try for free </h1>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/629ceee14ed0f655093154eb_angle-right%201%20blue.svg" alt="logo" className='w-[60px]' />
          </a>
        </div>

        <div className='mx-4 lg:m-auto mt-12'>
          <video id="40c8bdc3-257a-519a-bc71-f89559dbbb96-video" className=' object-cover bg-[url("https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-poster-00001.jpg")] w-[100rem] mx-auto lg:h-[90vh] h-auto rounded-2xl ' autoplay="true" loop="true" muted="true" playsinline="" data-wf-ignore="true" data-object-fit="cover">
            <source src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-transcode.mp4" data-wf-ignore="true" />
            <source src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/6299e2bcea253e73171caaf9_ezgif-4-a326cbc4b0-transcode.webm" data-wf-ignore="true" />
          </video>
        </div>


        <div className="clients grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 max-w-[1230px] mx-auto mt-24 place-items-center">
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bd09a054aa8bce8fff8_UG.png" alt="client Logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bd009523770f3027e85_Unschool%20Logo.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601b9ac55a2dcd2a41b48f_Frame%20908.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601b9a935c243776914697_Frame%20911.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601d964dd87e08f7cd391e_Frame%20912.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bcf4541a43b09c1be95_Pedal%20Start.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/61601b9a5ceb3528bf34aa78_Frame%20910.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39c89769b37a39217bdaa_Planet%20Spark.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a39bcfbd4a9e34be1306b2_RMonk.png" alt="logo" />
          <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62e28a9d65b5e0dfcf6f0cea_Kinship%20logo%20.png" alt="logo" />
        </div>
      </section>



      <section className="hero-two lg:mt-40 mt-12 px-4 lg:px-20 font-nunito">
        <h1 className='text-center text-[32px] lg:text-[45px] font-bold text-[#1D1916]'>Improve retention,  growth and advocacy with the all-in-one community engagement platform</h1>

        <div className="flex lg:items-center items-start flex-col lg:flex-row text-center sm:text-left mt-8">
          <img src={image2} alt="" className='lg:w-2/3 w-auto' />
          <div className='lga:w-1/3 lg:max-w-[30rem] w-auto lg:ml-12' >
            <h2 className='font-extrabold text-[36px] leading-[1.2em] mb-[10px] mt-4 lg:mt-0'>Designed for all usecases</h2>
            <p className='text-[24px] font-medium text-left lg:leading-[32px] lg:text-left'>From open discussion to gated content. Create different groups for all kind of use case, like coaching, mentoring, courses, forums, live classes etc</p>
            <p className='text-[#1D1916] font-medium mt-7'>Replace</p>
            <p className='font-extrabold text-[18px] mt-[8px]'>Slack OR Discord OR Forum</p>
          </div>
        </div>

        <div className="flex lg:items-center items-start flex-col-reverse lg:flex-row text-center sm:text-left mt-16 lg:mt-[10rem]">
          <div className='lga:w-1/3 lg:max-w-[30rem] w-auto lg:mr-12' >
            <h2 className='font-extrabold text-[36px] leading-[1.2em] mb-[10px] mt-4 lg:mt-0'>Your Community. Your Branding.</h2>
            <p className='text-[24px] font-medium text-left lg:leading-[32px] lg:text-left'>Design your community to match your branding. Make it feel like your own product with complete customization & integration, including mobile app</p>
            <p className='text-[#1D1916] font-medium mt-7'>Avoids</p>
            <p className='font-extrabold text-[18px] mt-[8px]'>Custom development</p>
          </div>
          <img src={image3} alt="" className='lg:w-2/3 w-auto' />
        </div>
      </section>



      <section className="live bg-black font-nunito py-20 mt-12  px-4 lg:px-20">
        <h1 className="text-white text-center mb-[50px] sm:text-[45px] text-[24px] font-bold">🔴 Live Sessions</h1>
        <div className=""><img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a638fa42b260e235ae4538_Video%20calling.png"
          loading="lazy" srcset="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a638fa42b260e235ae4538_Video%20calling-p-500.png 500w, https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a638fa42b260e235ae4538_Video%20calling-p-800.png 800w, https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a638fa42b260e235ae4538_Video%20calling-p-1080.png 1080w, https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a638fa42b260e235ae4538_Video%20calling.png 1564w"
          sizes="80vw" alt="Live video with recording within your community platform." className="mx-auto" /></div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-32 px-8 mt-0 sm:mt-12'>
          <div className='mt-8 sm:mt-0'>
            <h1 className='text-white text-[24px] font-semibold'>Immersive Experince</h1>
            <p className='text-white text-[20px] font-normal lg:mt-6 mt-0'>Conduct Live sessions or webinar, get the best audio video quality</p>
          </div>
          <div>
            <h1 className='text-white text-[24px] font-semibold'>Immersive Experince</h1>
            <p className='text-white text-[20px] font-normal lg:mt-6 mt-0'>Conduct Live sessions or webinar, get the best audio video quality</p>
          </div>
          <div>
            <h1 className='text-white text-[24px] font-semibold'>Immersive Experince</h1>
            <p className='text-white text-[20px] font-normal lg:mt-6 mt-0'>Conduct Live sessions or webinar, get the best audio video quality</p>
          </div>
        </div>
      </section>



      <section className="testimonial font-nunito py-24">
        <h2 className='text-[34px] text-black text-center font-bold leading-[1.2em] mb-8'>What our users have been saying</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center max-w-[90rem] mx-auto'>
          <div className='bg-light text-blue1 p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d1511a53c226bd91da8_image%20224.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Anurag Trivedi</p>
            <p className='text-base font-normal'>Shaan Foundation</p>
          </div>

          <div className='bg-white text-black p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>""I love the platform, ❤️❤️.All our students use Pensil for internal communication and academics. It has been awesome working with the Pensil team".</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d15a2ee0939b0a92408_image%20223.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Hetal Mundra</p>
            <p className='text-base font-normal'>Somaiya Design School</p>
          </div>

          <div className='bg-light text-blue1 p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"I run UPSC cohorts on Pensil. It is different from other applications - it is more fun, connects everyone and lets us study together."</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d15ace37f13ebb794c8_image%20225.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Abhijeet Yadav</p>
            <p className='text-base font-normal'>Perlims Focus Group</p>
          </div>

          <div className='bg-light text-blue1 p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d1511a53c226bd91da8_image%20224.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Anurag Trivedi</p>
            <p className='text-base font-normal'>Shaan Foundation</p>
          </div>

          <div className='bg-blue1 text-white p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"We are building a community for freelancers in the Middle East. Pensil provides a nice little place for us to come together."</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d168b917a008c4ec66d_image%20230.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Abed Mousley</p>
            <p className='text-base font-normal'>Tapflow.com</p>
          </div>

          <div className='bg-white text-black p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d1511a53c226bd91da8_image%20224.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Anurag Trivedi</p>
            <p className='text-base font-normal'>Shaan Foundation</p>
          </div>

          <div className='bg-white text-black p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d1511a53c226bd91da8_image%20224.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Anurag Trivedi</p>
            <p className='text-base font-normal'>Shaan Foundation</p>
          </div>

          <div className='bg-white text-black p-6 w-80 rounded-xl mt-4'>
            <p className='text-base font-normal mb-4 leading-[1.5em]'>"We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"</p>
            <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62751d1511a53c226bd91da8_image%20224.png" alt="profile" className='w-[75px]' />
            <p className='font-bold'>Anurag Trivedi</p>
            <p className='text-base font-normal'>Shaan Foundation</p>
          </div>

        </div>
      </section>



      <footer className="text-black body-font font-nunito">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="main Logo" />
            </a>
            <p class=" text-[16px] font-normal">© Pensil. All Rights Reserved.<br />
              <strong class="bold-text-2 font-bold text-[#173ed8]">Made with </strong>
              <span class="text-span-2"><strong>❤️</strong></span>
              <strong class="bold-text-2 font-bold text-[#173ed8]"> from India</strong>
              <br />
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[15px] text-gray-900 tracking-widest text-sm mb-3 ">Pensil</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[15px] text-gray-900 tracking-widest text-sm mb-3 ">Resources</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[15px] text-gray-900 tracking-widest text-sm mb-3 ">Compare</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[15px] text-gray-900 tracking-widest text-sm mb-3 ">Follow Us On</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/' >Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>




    </div>
  )
}

export default Hero