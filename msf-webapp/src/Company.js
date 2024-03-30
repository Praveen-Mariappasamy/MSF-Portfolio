import App from './App.js'
import './Company.css'
const Company = () => {
  return (
    <div className="containment">
      <App />
      <div className="maps">
        <h1>Explore Our Location</h1>
        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.250055888827!2d80.13529630826285!3d13.019741913772874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526059fad89299%3A0x78641c36452379c3!2s4th%20St%2C%20Sri%20Ranga%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710059785582!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Nature of Business</td>
            <td>Manufacturer</td>
          </tr>
          <tr>
            <td>Additional Business</td>
            <td>Supplier</td>
          </tr>
          <tr>
            <td>Company CEOs</td>
            <td>Mariappasamy and Gunabalan</td>
          </tr>
          <tr>
            <td>Total Number of Employees</td>
            <td>Upto 10 People</td>
          </tr>
          <tr>
            <td>Year of Establishment</td>
            <td>2001</td>
          </tr>
          <tr>
            <td>Legal Status of Firm</td>
            <td>Partnership Firm</td>
          </tr>
          <tr>
            <td>Annual Turnover</td>
            <td>Rs. 1 - 2 Crore</td>
          </tr>
          <tr>
            <td>GST Number</td>
            <td>33AAHFM7998J1ZK</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Moulivakkam, Chennai</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>Ontime delivery support all over chennai</td>
          </tr>
          <tr>
            <td>Certification</td>
            <td>TNPL authorised producer</td>
          </tr>
          <tr>
            <td>Assosciations</td>
            <td>Key Member of TACMA</td>
          </tr>
          <tr>
            <td>Customer support</td>
            <td>9840122784</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Company
