import React from 'react';

function AllFeatures() {
  return (
    <div className='allFeatures'>
      <div className='container-middle'>
        <div className='allFeatures__content'>
          <div className='allFeatures__title'>Explore All Features</div>
          <div className='allFeatures__timeline'>
            {/* row */}
            <div className='allFeatures__row'>
              <div className='allFeatures__left'>
                <div className='allFeatures__left-box'>
                  Find and manage leads better
                </div>
              </div>
              <div className='allFeatures__right'>
                <div className='allFeatures__two'>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Lead Management
                    </div>
                    <div className='allFeatures__right-text'>
                      Track, filter, and qualify new prospective customers.
                    </div>
                  </div>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Duplicate blocking
                    </div>
                    <div className='allFeatures__right-text'>
                      Improve CRM data quality by preventing duplicates
                    </div>
                  </div>
                </div>

                <div className='allFeatures__two allFeatures__two--left'>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Lead assignment and routing
                    </div>
                    <div className='allFeatures__right-text'>
                      View the impact of your marketing activities on your sales
                      pipeline.
                    </div>
                  </div>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Web-to-lead capture
                    </div>
                    <div className='allFeatures__right-text'>
                      Generate leads with the prospecting data from your
                      company’s website visitors.
                    </div>
                  </div>
                </div>

                <div className='allFeatures__two'>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>Mass e-mail</div>
                    <div className='allFeatures__right-text'>
                      Automatically track which leads or contacts received
                      emails.
                    </div>
                  </div>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Campaign Management
                    </div>
                    <div className='allFeatures__right-text'>
                      Manage and track marketing campaigns across all channels
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}

            {/* row */}
            <div className='allFeatures__row allFeatures__row--reverse'>
              <div className='allFeatures__left'>
                <div className='allFeatures__left-box allFeatures__left-box--reverse'>
                  Manage customer and sales deals
                </div>
              </div>
              <div className='allFeatures__right'>
                <div className='allFeatures__two allFeatures__two--reverse'>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Account and contact management
                    </div>
                    <div className='allFeatures__right-text'>
                      Get a complete view of your customers
                    </div>
                  </div>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Customizable sales process
                    </div>
                    <div className='allFeatures__right-text'>
                      Easily personalize your team’s sales milestones with a
                      sales path.
                    </div>
                  </div>
                </div>

                <div className='allFeatures__two allFeatures__two--right  allFeatures__two--reverse'>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Opportunity Management
                    </div>
                    <div className='allFeatures__right-text'>
                      Track key details about every deal, such as stage, quotes,
                      products, and more.
                    </div>
                  </div>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Activity feed
                    </div>
                    <div className='allFeatures__right-text'>
                      Get the complete view of all customer engagement in one
                      place.
                    </div>
                  </div>
                </div>

                <div className='allFeatures__two allFeatures__two--reverse'>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>Sales Teams</div>
                    <div className='allFeatures__right-text'>
                      Specify collaborators assigned to each deal.
                    </div>
                  </div>
                  <div className='allFeatures__right-box'>
                    <div className='allFeatures__right-title'>
                      Person Accounts
                    </div>
                    <div className='allFeatures__right-text'>
                      Get a complete view of customers when they are individual
                      people.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllFeatures;
