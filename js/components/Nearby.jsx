import React from 'react';

export default function Nearby() {
  return (
    <section id="nearby">
      <h2>Nearby</h2>
      <p>
        If you're staying the weekend, you're on your own on Saturday after breakfast and before
        things get started in the afternoon at 4pm. Here's a list of interesting things nearby to
        check out:
      </p>

      <div className="nearby-sections">
        <div className="nearby-section">
          <h3><span>Recreation</span></h3>
          <div className="nearby-entry">
            <h4>Sugar Hill Reservoir</h4>
            <p className="distance">10 minutes</p>
            <p>
              If you're into swimming, or you want to bring your own boats, you might want to check
              out this small body of water. It's about two miles away at the end of a pretty rough
              road, but it's a beautiful place to hang out. To get there:
            </p>
            <ul>
              <li>Take Goshen-Ripton road north</li>
              <li>In about a mile, there will be a right turn with a sign for the reservoir</li>
              <li><strong>Warning:</strong> The road can be pretty rough, so take it slow</li>
              <li>In about a mile, you will come upon a parking area and boat launch</li>
            </ul>
          </div>
          <div className="nearby-entry">
            <h4>Green Mountain National Forest</h4>
            <p>
              The inn is in the middle of the Green Mountain National Forest, there are tons of
              trails to explore, nearby if you're into a hike. The inn is also relatively close to
              Camel's Hump, Mount Abraham, Mount Ellen, and other larger Green Mountain peaks.
            </p>
          </div>
        </div>
        <div className="nearby-section">

          <h3><span>Museums</span></h3>
          <div className="nearby-entry">
            <h4>Middlebury College Museum of Art</h4>
            <p className="distance">30 minutes</p>
            <p>
              The museum of art has an exhibition on Japanese tattoo artwork and culture, and
              collections from many eras. They're open from noon to 5pm on Saturday and Sunday.
              Admission is free. <a href="http://museum.middlebury.edu">Website</a>{' '}
              <a href="https://goo.gl/maps/AKCcNH9n45S2">Directions</a>
            </p>
          </div>
          <div className="nearby-entry">
            <h4>Henry Sheldon Museum of Vermont History</h4>
            <p className="distance">30 minutes</p>
            <p>
              A museum dedicated to objects, photographs, and written records of Vermont in the 19th
              century. It's in downtown Middlebury, which makes it convenient to the museum of art
              above, and restaurants and shopping. Admission is $5, and they're open from 10am to
              5pm on Saturday. <a href="henrysheldonmuseum.org">Wesbite</a>{' '}
              <a href="https://goo.gl/maps/2cs39SdT2AL2">Directions</a>
            </p>
          </div>
          <div className="nearby-entry">
            <h4>Lake Champlain Maritime Museum</h4>
            <p className="distance">1 hour</p>
            <p>
              This museum maintains a small fleet of reproduction ships from the 18th and 19th
              centuries. It's a bit of a drive, but it's convenient to Vergennes, where there are
              several nice places to get lunch. <a href="http://www.lcmm.org">Website</a>{' '}
              <a href="https://goo.gl/maps/dQT5oi3yDZA2">Directions</a>
            </p>
          </div>
        </div>

        <div className="nearby-section">
          <h3><span>Places</span></h3>
          <p>
            If you're looking to go somewhere to peer in shops or get lunch, any of these places
            will have what you want:
          </p>
          <div className="nearby-entry">
            <h4>Middlebury</h4>
            <p className="distance">30 minutes</p>
            <p>
              Middlebury is close, has a number of small shops, cafes, art galleries, and
              restaurants. <a href="https://goo.gl/maps/sMiDL2CT4BH2">Directions</a>
            </p>
          </div>
          <div className="nearby-entry">
            <h4>Burlington</h4>
            <p className="distance">1 hour 20 minutes</p>
            <p>
              Burlington is our hometown, and has just about anything you might
              want. <a href="https://goo.gl/maps/7P3MzsqELCN2">Directions</a>
            </p>
          </div>
        </div>
      </div>
    </section>);
}
