import React, { useEffect } from "react";
import { Divider, Space } from "antd";
import {
    MdLocationOn,
    MdEmail,
    MdPhoneIphone,
    MdWhatsapp,
} from "react-icons/md";
import logo from "../assets/contactus.jpg";

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="pl-4 lg:py-8 lg:text-left" style = {{marginLeft: '40px'}}>
            {/* <Divider>ContactUs</Divider> */}
            <h1 className="text-6xl mt-40">Make an impact that matters.</h1>
            <div className="text-2xl mt-20">
            Many ideas grow better when transplanted into another mind than the one where they sprang up.
            </div>
            <div className="text-2xl mt-10">
            Our goal at ADAL ASSOCIATES LLP is to build a team of individuals with competence, integrity, a 
            passion for excellence, a desire to learn, a willingness to work hard, and more importantly, 
            deep respect for their own commitments. A healthy work ethic and meritocracy, which rewards 
            superior performance faster than expected, will reward them in return. ADAL ASSOCIATES LLP offers a 
            challenging, stimulating and professional work environment where you will be an integral part 
            of the team. We offer an exciting opportunity for you to grow on both a professional and 
            personal level.
            </div>
            <div className="text-2xl mt-20">
            Send us your CV at info@adal.com
            </div>
            <div className="text-2xl mt-10">
            Your CV must contain details of your actual experience, preference if any, for specific 
            service areas, current and expected remuneration and the period within which you can join 
            if an offer is made.
            </div>
            <div className="text-2xl mt-20">
            Wishing you all success in your career ahead.
            </div>
        </div>
    );
}

export default Careers;
