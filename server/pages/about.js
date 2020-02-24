import React from "react";
import Layout from "../components/Layout";

const About = () =>{
    return(
        
            <Layout title = "เกียวกับเรา"> 
            
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4" >
                    เราคือร้านอาหาร ที่เน้นอาหารอร่อยเท่านั้นจริงๆ ไม่ให้
                </p>
                <h4 className = "text-success">จาก เฮลตี้ คาเฟ่</h4>
            </div>
        
            </Layout>
    )
}
export default About;