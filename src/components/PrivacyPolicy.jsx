import React from 'react'
import { useNavigate } from 'react-router-dom';
const PrivacyPolicyNew = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform your login logic here
  
      // If login is successful, navigate to the dashboard
      navigate('/');
    };
    return (
        <div style={{ width: "82vw", marginLeft: 265, marginTop: "90px" }}>
            <h2>Privacy Policy</h2>
            <p>This Privacy Policy explains how Bansal TMT may collect, use, store, disclose or otherwise process your personal data including personal data provided when using our Mobile Application and describes the rights you have with respect to your personal data.<br></br>
                Bansal TMT is committed to providing the highest level of protection regarding the processing of their employees’, vendors’ and clients’/customers’ personal data based on applicable data protection laws and regulations.<br />
                Personal data comprises all the details that Bansal TMT collects and processes directly or indirectly about you as an individual, for instance information about your identity and contact details (such as name, email-ID, contact number), including information received from third parties and information collected through use of Bansal TMT websites, cookies or other similar tools. Bansal TMT will first and foremost comply with local law where it exists.
            </p>
            <h2>Processing Personal Data</h2>
            <p>Bansal TMT may process your personal data where such relevant personally identifiable information is required to be processed for legitimate Bansal TMT purposes as follows, but not limited to:</p>
            <li>Processing applications for products and services;</li>
            <li>Providing products and services; (It is not feasible for an organisation to provide product / service without processing)</li>
            <li>Monitoring and improving our Mobile application and its content;</li>
            <li>Conducting market research and surveys with the aim of improving our products and services;</li>
            <li>Sending you information about our products and services for marketing purposes and promotions;</li>
            <li>Complying with applicable local or foreign law, regulation, policy, voluntary codes, directive, judgement or court order, as well as any contractual obligation ursuant to agreements between Bansal TMT and any authority, regulator or enforcement agency or body or any request coming from said entities.</li>
            <li>Establishing, exercising or defending legal rights in connection with legal proceedings (including any prospective legal proceedings) and seeking professional or legal advice in relation to such legal proceedings.</li>
            <li>Surveillance of premises. (Video Recording)</li>
            <p>Bansal TMT processes your personal data for the performance of the contracts/agreements concluded with you, compliance with applicable legal or regulatory obligations or Bansal TMT legitimate interests to provide you with adequate and qualitative products and services and to prevent against any excessive risk. Where providing the data is optional, and you choose not to share personal data, features like personalisation that use such data will not work for you.</p>
            <h2>Access to Personal Data</h2>
            <p>Your personal data processed by Bansal TMT will only be accessible by a limited list of recipients on a need to know basis or where required by law.<br />
                Our policy does not apply to third-party websites where our online advertisements are displayed, nor to linked third-party websites which we do not operate or control.<br />
                To the extent permitted by law, Bansal TMT may record and monitor your communications with Bansal TMT to ensure compliance with our legal and regulatory obligations and our internal policies.
            </p>
            <h2>Retention of Personal Information</h2>
            <p>Your personal data processed by Bansal TMT are kept in a form which permits your identification for no longer than is necessary for the purposes for which the personal data are processed in line with legal, regulatory or statutory obligations.
                At the expiry of such periods, your personal data will be deleted or archived to comply with legal retention obligations or in accordance with applicable statutory limitation periods.
            </p>
            <h2>How to access and control your personal data?</h2>
            <p>Subject to applicable law, regulations and/or industry guidelines, you may have the right to invoke a data subject right in relation to your personal data being processed by Bansal TMT.<br />
                Bansal TMT may be allowed by law, in particular in case of excessive or manifestly unfounded request, to charge a fee for fulfilling your request, subject to applicable conditions.<br />
                Bansal TMT shall provide information on action taken on a request pertaining to the Data Subject Rights without undue delay and in any event within one month of receipt of the request. That period may be extended by two further months where necessary, taking into account the complexity and number of the requests.<br />
                Bansal TMT shall inform the data subject of any such extension within one month of receipt of the request, together with the reasons for the delay.<br />
                To invoke your data subject rights, please use the data subject right request form or send an email to data protection officer (for contact details refer to the last section of this policy).<br />
                Finally, note that you are entitled to lodge a complaint with a competent Data Protection Authority where existing, concerning Bansal TMT’s compliance with the applicable data protection laws and regulations.<br />
            </p>
            <h2>Security</h2>
            <p>The security and confidentiality of your Personal Data is important to us and Bansal TMT has invested significant resources to protect the safekeeping and confidentiality of your personal data. When using external service providers acting as processors, we require that they adhere to the same standards as Bansal TMT. Regardless of where your personal information is transferred or stored, we take all steps reasonably necessary to ensure that personal data is kept secure.</p>
            <h2>Social Media</h2>
            <p>Bansal TMT operates channels, pages and accounts on some social media sites to inform, assist and engage with employees, vendors and clients/customers. Bansal TMT monitors and records comments and posts made on these channels about Bansal TMT in order to improve its products and services.<br />
                Please note that you must not communicate to Bansal TMT through such social media sites the following information:
            </p>
            <li>confidential personal data, including any information regarding your financial situation, bank account details, transactions, etc.</li>
            <li>sensitive personal data including (i) special categories of personal data meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation and (ii) other sensitive personal data such as criminal convictions and offences and national identification number; and</li>
            <li>excessive, inappropriate, offensive or insulting information towards individuals.</li>
            <li>Bansal TMT is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. Bansal TMT is only responsible for its own use of the personal data received through such sites.</li>
            <h2>Changes to this Privacy Policy</h2>
            <p>Bansal TMT may in its absolute discretion update this policy from time to time.<br />
                The use of the Bansal TMT Websites and any products and services supplied are subject to our Terms and Conditions.
            </p>
<br/>
<br/><br/><br/>
        </div>
    )
}

export default PrivacyPolicyNew