import React from "react";
import Accordion from "react-bootstrap/Accordion";
const HelpFaq = () => {
  return (
    <div style={{ width: "82vw", marginLeft: 265, marginTop: "90px" }}>
      <h4>FAQs</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. What is displayed on the dashboard?
          </Accordion.Header>
          <Accordion.Body>
            <li>
              This page provides you with an overview of the entire statistics,
              including key metrics such as the Total Number of Users, Orders
              received during the respective quarter, Number of Leads, and Total
              Pending Requests waiting for approval. Additionally, it presents
              the percentage change compared to the previous quarter, offering
              insights into performance trends.
            </li>
            <br></br>
            <li>
              Visual representations, in the form of graphs, facilitate the
              understanding of data patterns related to the Total Number of
              Orders from distinct users and the corresponding Order Quantity.
            </li>
            <br></br>
            <li>
              The page also showcases details regarding the top 10 performers
              for both the month and year, along with their accumulated points.
              This information provides you with insight into high-performing
              users within the specified timeframe.
            </li>
            <br></br>
            <li>
              The page highlights the count of redeemed products, with a pie
              chart illustrating the distribution of redeemed rewards in terms
              of various products. This gives a clear understanding of the
              demand for specific products and helps you in refining product
              offerings in upcoming quarters.
            </li>
            <br></br>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. How to handle and process orders?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              1. Click on the icon 'Requests' on the left side of the HomePage
            </p>
            <p>
              2. Click on the icon 'Requests' on the left side of the HomePage
            </p>
            <p>3. Select ‘Orders’ under the Orders section.</p>
            <p>
              a. View counts for Total Requests, Pending Requests, Accepted
              Requests, and Rejected Requests at the top of the Request page.
            </p>
            <p>
              b. The details of the order requests are displayed in the middle
              section of the page.
            </p>
            <p>
              c. To accept/Reject an order, go to the right side of the page and
              click on the ‘View Request’ icon under the section Action.
            </p>
            <p>
              d. Verify the details given and decide whether to click on the
              Accept/Reject icon based on the eligibility of the order.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. How to access the order history?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. Go to HomePage</p>
            <p>
              2. Locate and click on the ‘Points’ icon on the left side of the
              HomePage
            </p>
            <p>3. Choose ‘'Orders' under the Points icon.</p>
            <p>
              a. The complete list of orders is displayed on this page, along
              with their respective status indicated as
              Accepted/Pending/Rejected.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What are ‘points’?</Accordion.Header>
          <Accordion.Body>
            <li>
              It’s a benefit earned by Engineers/Contractors/Architects for the
              purchase request they make.
            </li>
            <li>
              The number of loyalty points they get depends on the quantity of
              steel they purchase.{" "}
            </li>
            <li>
              The points will be only credited to the user’s account once both
              the Sales POCs and distributors approve the purchase.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            5. How can a Contractor/Architect/Engineer earn points?
          </Accordion.Header>
          <Accordion.Body>
            <li>
              When a Contractor/Architect/Engineer initiates a purchase request
              from their account, a notification will be sent to both the
              distributor and Sales POCs.{" "}
            </li>
            <li>
              Upon receiving the notification, the distributor and Sales POCs
              will have to review the purchase details.{" "}
            </li>
            <li>
              If both parties approve the purchase request, a corresponding
              number of loyalty points based on the quantity of purchase will be
              credited to the user's account.
            </li>
            <li>
              These earned points will be displayed on the user's Homepage.
            </li>
            <br></br>
            <table style={{ marginLeft: "4rem", width: "40%" }}>
              <thead>
                <tr>
                  <th colSpan="2" style={{ textAlign: "center" }}>
                    Contractor Point System
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 1-100 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 100 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 101-150 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 125 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 151-249 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 150 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 250-300 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 200 points per ton</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <table style={{ marginLeft: "4rem", width: "40%" }}>
              <thead>
                <tr>
                  <th colSpan="2" style={{ textAlign: "center" }}>
                    Engg/Architect Point System
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 1-49 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 200 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 50-249 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 250 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 250-349 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 300 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 350-449 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 350 points per ton</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; 450-500 Ton</td>
                  <td>&nbsp;&nbsp;&nbsp; 400 points per ton</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <table style={{ marginLeft: "4rem", width: "40%" }}>
              <thead>
                <tr>
                  <th colSpan="2" style={{ textAlign: "center" }}>
                    Lead Points Engg/Architect Point System
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp; Per lead point</td>
                  <td>&nbsp;&nbsp;&nbsp; 25 points </td>
                </tr>
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. What is a Reward?</Accordion.Header>
          <Accordion.Body>
            <li>
              A reward is a special benefit that Contractor/Architect/Engineer
              receives in exchange for the points they've collected.{" "}
            </li>
            <li>
              To use these loyalty points, the user will have to simply select a
              gift from the reward catalog and provide their delivery address to
              have it sent to them.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. How to redeem Loyalty points Rewards?
          </Accordion.Header>
          <Accordion.Body>
            <li>
              To redeem the loyalty points, users will have to select a gift
              from the reward catalog and provide the delivery address. The
              backend team does the fulfillment of the reward and it is not
              taken care of within the app.{" "}
            </li>
            <li>
              Points can't be carried forward beyond a certain timeframe(A
              quarter).
            </li>
            <li>
              Each redemption attempt allows for the selection of just one gift,
              regardless of the number of points earned.{" "}
            </li>
            <li>Users can only redeem one gift at a time. </li>
            <li>
              For instance, if a user has 5000 points, they can redeem a single
              gift within a specific category. It's not possible to combine
              points to redeem multiple gifts, like one gift worth 1000 points
              and two gifts each worth 2000 points.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. How to add/edit a product to the Rewards Catalog?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. Open the ‘HomePage’.</p>
            <p>
              2. Click on the ‘Rewards’ icon on the left side of the HomePage.
            </p>
            <p>3. Select the ‘Reward Products’ section under the Rewards.</p>
            <p>
              a. The top section of the page displays information like the
              Redemption Window, Total Redeemed Products, Quarterly Redemptions,
              and Active Reward Products.
            </p>
            <p>
              b. The page also lists the products that can be redeemed as
              rewards.
            </p>
            <p>
              c. To add a new reward product, locate and click on the 'Add
              Reward Product' button on the right part of the page.{" "}
            </p>
            <li>
              After clicking, a window will pop up where you can input product
              details, points required, and upload a product image.
            </li>
            <li>The size of the product image should be 140*140.</li>
            <li>Click on the ‘Upload’ button.</li>
            <li>
              The newly added product will now be visible in the rewards catalog
              list.
            </li>
            <p>
              d. To edit product details, find the ‘Edit’ button on the right
              side of the page.
            </p>
            <li>
              Click the Edit button, make the necessary updates, upload product
              image(140*140) and then click ‘Confirm’.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. What is the Redemption Window?</Accordion.Header>
          <Accordion.Body>
            <p>
              Rewards have an expiration date. Once that time is up, the reward
              section won't work anymore. Sale POCs can use the 'Open/close'
              icon on the redemption window to turn this feature on or off.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            10. How to view the Redemption History?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. Go to the ‘HomePage’.</p>
            <li>
              2. Click on the ‘Rewards’ icon on the left-hand side of the
              HomePage.
            </li>
            <li>
              3. Within the Rewards section, select the 'Redemptions' option.
            </li>
            <p>
              a. The page displays the list of users who have redeemed their
              rewards, along with details about the products they selected to
              redeem.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>11. What is a Lead?</Accordion.Header>
          <Accordion.Body>
            <p>
              Leads are people who actually are interested in making the
              purchase of TMT bars and are referred by Architects/Engineers.
              When they refer a lead, they earn loyalty points.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>12. How to Accept/Reject Leads?</Accordion.Header>
          <Accordion.Body>
            <p>1. Open the HomePage.</p>
            <li>
              2. Click on the 'Requests' icon on the left side of the Homepage.
            </li>
            <li>3. Choose the 'Leads' option.</li>
            <p>
              a. The top part of the page displays the details of Total Lead
              Requests as well as those that are Pending/Accepted/Rejected.
            </p>
            <p>
              b. The page also displays a detailed list of leads and referrers.
            </p>
            <p>
              c. To manage the lead request, click on the ‘View Request’ Button
              on the right part of the page.
            </p>
            <p>
              d. Clicking on it, a window will pop up, review the details and
              click on the ‘Accept/Reject’ icon.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            13. How to view the status of Leads?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. Go to HomePage.</p>
            <p>
              2. Click on the 'Points' icon on the left side of the Homepage.
            </p>
            <p>3. Under Points, click on 'Leads' .</p>
            <p>
              a. The page provides a detailed list of leads along with the names
              of the referrers, showing whether each lead is
              Accepted/Rejected/Pending.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="13">
          <Accordion.Header>
            14. How to Update Promotional Ad Cards to HomePage?
          </Accordion.Header>
          <Accordion.Body>
            <p>1. Open HomePage</p>
            <p>2. Select the ‘Promotions’ icon on the left side of the page.</p>
            <p>
              3. Click on the Update button in the upper right corner of the Ad
              Spot section.
            </p>
            <p>a. A window will pop up, fill in the details.</p>
            <p>
              b. The poster image should be uploaded by clicking the ‘Upload’
              button
            </p>
            <p>c. The size of the poster image should be 328*160.</p>
            <p>
              d. Click on the ‘Update Ad Poster’ icon to update the details.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14">
          <Accordion.Header>
            15. How to log data to an Excel file?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              To save the data to an Excel file, go to the 'Requests' section,
              select ‘orders’ and click on the 'Export' icon located at the
              upper right part of the page.
            </p>
            <h5>About</h5>
            <p>
              The Loyalty Points Management app is a platform launched by Bansal
              TMT Sariya, a part of the well-known Bansal Group. The purpose is
              to provide Contractors/Engineers/Architects with an easy-to-use
              digital solution for overseeing their loyalty points. This
              application simplifies the process of tracking and monitoring the
              loyalty points earned through the purchases made with Bansal TMT.
              The app provides a clear and well-organized presentation of
              loyalty points balance and also helps users for staying informed
              about special promotions and offers associated with Bansal TMT
              products. Additionally, this app enables Contractors/
              Engineers/Architects to explore the variety of rewards available
              for redemption, thereby refining their overall shopping
              experience. This Loyalty Point Management App effectively
              transforms the management of loyalty points into an effortless and
              enjoyable task, granting users control over their journey to
              attain points and rewards.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HelpFaq;
