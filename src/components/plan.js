import React from 'react'
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

import BgSection from './bgSection'

const items = [
  {
    src: require('../assets/images/millbrae1.png'),
    altText: 'Gateway at Millbrae Station Render 1',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae2.png'),
    altText: 'Gateway at Millbrae Station Render 2',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae3.png'),
    altText: 'Gateway at Millbrae Station Render 3',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae4.png'),
    altText: 'Gateway at Millbrae Station Render 4',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae5.png'),
    altText: 'Gateway at Millbrae Station Render 5',
    caption: ''
  }
];

export default () => (
  <>
    <Container className="plan" id="plan">
      <Row>
        <Col>
          <header>
            <h1>Plan and Renderings</h1>
          </header>
          <main>
            <article>
              <h2 className="focus">About our project</h2>
              <p>For decades, the City of Millbrae has considered the area directly surrounding Millbrae Station a critical juncture for the future of the city and region. With the introduction of the High-Speed Rail system, Millbrae Station will expand its role as a multi-modal transit operation center, connecting residents and visitors alike to regional job centers and economic powerhouses throughout the Peninsula and state. To that end, in 2017, the Millbrae City Council affirmed that making significant progress to enact the updated Millbrae Station Area Specific Plan (MSASP) was their number one priority for the year. Though the land within Transit Oriented Development Area of the MSASP makes up less than 1.0 percent of the total acreage of the City of Millbrae, its central location and extraordinary potential make it critical to develop responsibly.</p>

              <p><strong>Millbrae Station Specific Plan: </strong> <a href={require('../assets/downloadables/Plan-Final.pdf')} className="pdf-link">Click here</a></p>
              <p><strong>Millbrae Station Fact Sheet: </strong> <a href={require('../assets/downloadables/Fact-Sheet-Final.pdf')} className="pdf-link">Click here</a></p>

              {/* <h3>Our Vision: Gateway at Millbrae Station</h3>
              <p>Our vision is to create neighborhood-defining real estate projects, a centerpiece, that provide quality spaces where residents can access and enjoy everything their community has to offer. Our multifaceted business starts with identifying a concept for a neighborhood and being an agent of positive change. We create not only a place to live and work, but also a growing and thriving community.</p>

              <h3>Our Company: The Republic Family of Companies</h3>
              <p>Republic creates landmarks. We value smart growth and believe in transit-oriented and mixed-use projects. Over 25 years, Republic has successfully developed and invested in real estate transactions across the United States valued in excess of $4 billion and 17 million square feet of space. This experience includes award-winning real estate projects ranging from land development to historic adaptive reuse to shopping malls.</p>

              <h3>New Employment</h3>
              <p>The proposed project will provide up to 710 new employment opportunities. The office space will generate up to 550 employees. The retail space generate up to 95 employees. The hotel would generate up to 65 employees.</p>

              <h3>Retail Contribution</h3>
              <p>Gateway at Millbrae Station will be a portal to Millbrae’s urban center. This area has the potential to attract people from all areas: from local residents and office workers, to the transit commuters from San Francisco Air Port, BART and Caltrain. In line with the interests from the Millbrae residents, we are currently engaging with specialty retailers and signature restaurants to join and be a part of Millbrae’s diverse business community.</p>

              <h3>Improved Transportation System and Utilities</h3>
              <p>Gateway at Millbrae Station will renovate the current area at site 5 and 6 with newly paved roads and utilities. The improved infrastructure will create more convenience for both public and private transport, such as reducing travel time and easier transfer times.</p>

              <h3>School Fees</h3>
              <p>Gateway at Millbrae Station will provide over $1 MM in school fees to the city of Millbrae. These additional funds will benefit Millbrae’s already- strong public schools without raising taxes on homeowners. Because the housing at Gateway at Millbrae Station will be geared toward singles, young couples and empty-nest seniors, the new student impact on local schools will be minimal and once built out, the project will be a net contributor to local school budgets and help ensure continued educational excellence for Millbrae students.</p>

              <h3>Property Taxes to Millbrae</h3>
              <p>Gateway at Millbrae Station will generate over $280,000.00 per annum.</p>

              <h3>Property Taxes to San Mateo County</h3>
              <p>Gateway at Millbrae Station will generate over $2 MM per annum.</p>

              <h3>Sales Taxes to Millbrae</h3>
              <p>Gateway at Millbrae Station will generate over $81,000.00 per annum.</p>

              <h3>Net Revenue to Millbrae Businesses</h3>
              <p>Gateway at Millbrae Station will generate over $490,000.00 per annum.</p>

              <h3>A Better, Cleaner, and More Secure Neighborhood</h3>
              <p>Gateway at Millbrae Station will change the Millbrae landscape by providing key infrastructures for a growing city.</p>

              <h3>Neighborhoods will become safer because there will be more people on the street and more “eyes on the street.”</h3>
              <p>Gateway at Millbrae Station will provide electric charging stations for electric cars in order to influence more people to become eco-friendly. The project will increase BART ridership and will encourage more walking, reducing both traffic and pollution.</p>

              <h3>Transit Oriented Tax: Hotel 6A</h3>
              <p>The occupancy rate for San Francisco/San Mateo County hotels was 84.1 percent for 2014. Occupancy demand drivers are continuing to grow more robust, led by expanding employment and foreign tourism. Based on a conservative estimate, Gateway at Millbrae Station Hotel 6A will generate approximately $384,100 per annum in Transit Oriented Tax (12%) for the city of Millbrae. *The hotel will require no hotel subsidy.</p> */}

              <h2 className="focus">Renderings</h2>

              <UncontrolledCarousel interval={false} autoPlay={false} items={items} />
            </article>
          </main>
        </Col>
      </Row>
    </Container>
    <BgSection bgImageNum={4} />
  </>
)
