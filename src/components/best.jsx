import React from 'react'
import { bannerData } from "../data";
import { banner2 } from "../data";
import image1 from '../images/img1.png'
import image2 from '../images/img2.png'
import image3 from '../images/img3.png'
import image4 from '../images/img4.png'
import image6 from '../images/img6.png'

export const Best = () => {
  return (
    <div className='bestcss'>
      {/* thing is header */}
      <div className='mainheader'>
            <h1>Best Website builders in the US</h1>
            <div className='mainheader1'>
              <div className='mainheader2'>
                <span>
                  <img src={image1} alt="search" width={20} height={20} />&nbsp;
                  Last Updated - February 22, 2020
                </span>
                <span>
                  <img src={image2} alt="search" width={20} height={20} />&nbsp;
                  Advertising Disclosure
                </span>
              </div>
              <div className='mainheader3'>
                Top Relevant <img src={image3} alt="search" width={20} height={20} />
              </div>
            </div>
            <div className='mainheader4'>
              <span>Tools</span>
              <span>AWS Builder</span>
              <span>Start Build</span>
              <span>Build Supplies</span>
              <span>Tooling</span>
              <span>BlueHosting</span>
            </div>
            <div  className='mainheader5'>
              <span>Home  {">"}</span>
              <span>Hosting for all   {">"} </span>
              <span>Hosting  {">"} </span>
              <span>Hosting6  {">"} </span>
              <span>Hosting5</span>
            </div>
      </div>

      {/* this is middle one */}
      <div className='mainboxcss'>
        {
          bannerData.map((item, index) => {
            return (
              <>
                <div key={index} className='mainboxcss01'>
                  <div className='mainNumber'>
                    <span className='mainNumberchild'>{item.title}</span>
                    <span className='mainNumber01'>{item.id}</span>
                  </div>
                  <div className='mainImage'>
                    <div className='mainImagecent'>
                      <img src={item.image} alt="images" width={141} height={103} />
                      <p>{item.imageName}</p>
                    </div>
                  </div>
                  <div className='mainPara'>
                    <div>
                      <p><strong>{item.title02}- </strong> {item.discription1}</p>
                    </div>
                    {
                      item.id === 4 ? <div className='mainParabro'>
                        <strong>Main highlights</strong>
                        <div className='mainListing'>
                          <span >
                            <span className='mainListing01'>{item.discription4.head1.idex}</span>{" "}
                            <span>{item.discription4.head1.disk}</span>
                          </span>
                          <span>
                            <span className='mainListing01'>{item.discription4.head2.idex}</span>{" "}
                            <span>{item.discription4.head2.disk}</span>
                          </span>
                          <span>
                            <span className='mainListing01'>{item.discription4.head3.idex}</span>{" "}
                            <span>{item.discription4.head3.disk}</span>
                          </span>
                        </div>
                        <div className='loverpara'>
                          <p>Why we love it</p>
                          <span><img src={image4} alt="image" width={20} height={20} />Documentation</span>
                          <span><img src={image4} alt="image" width={20} height={20} />Easy Use</span>
                          <span><img src={image4} alt="image" width={20} height={20} />Out of box</span>
                        </div>
                      </div> :
                        <>
                          <div className='mainParabro'>
                            <strong>Main highlights</strong>
                            <p className='mainParabroNormal'>{item.discription2}</p>
                          </div>
                          <div className='showmore'><p>Show more</p><img src={image6} alt="image" width={20} height={20} /></div>
                        </>
                    }
                  </div>
                  <div className='starpattern'>
                    <div className='starpattern01'>
                      <span>{item.rating}</span>
                      <span>{item.wordrating}</span>
                      <span>*****</span>
                    </div>
                    <div className='starView'>
                      <button>View</button>
                    </div>
                  </div>
                </div >
              </>
            )
          })
        }
      </div>

      {/* this is for down part */}
      <div className='downpart'>
        <h1>Related deals you might like for</h1>
        <div className='downpart01'>
          {banner2.map((iteam, index) => {
            return (
              <>
                <div key={index} className='downpart02'>
                  <p>
                    <img src={iteam.image} alt="images" width={141} height={103} />
                  </p>
                  <p className='downpart03'>
                    <span>20% Off</span>
                    <span>Limited time </span>
                  </p>
                  <span className='downpartTitle'>{iteam.title}</span>
                  <span className='downpartdiscription'>
                    <p>{iteam.discription1}</p>
                    <p><span className='discription01'>$39.96</span><span className='discription02'>$49.96</span><span className='discription03'>(20% Off)</span></p>
                  </span>
                  <span className='viewdownpart'>View Deal</span>
                </div>
              </>
            )
          })}
        </div>
      </div>
      {/* this is bottom one */}
      <div className='signup'>
        <span>
          <p>Sign up and get exclusive special deals</p>
        </span>
        <span>
          <button>Sign Up</button>
        </span>
      </div>
    </div >
  )
}
