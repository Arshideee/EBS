import React from 'react'
import './Programes.css'
import { Container } from 'react-bootstrap'


function Programes() {
    return (
        // <div className="admission">
        //     <Container>
        //     <h2 className="admission-heading">Admission Programs</h2>

        //     <div className="program-section">
        //         <h3 className="program-heading">BBA Programs</h3>
        //         <ul className="program-list">
        //             <li className="program-item">BBA in General Management</li>
        //             <li className="program-item">BBA in Operations Management</li>
        //             <li className="program-item">BBA in Entrepreneurship</li>
        //             <li className="program-item">BBA in Business Analytics</li>
        //             <li className="program-item">BBA in Artificial Intelligence (AI) and Machine Learning (ML)</li>
        //             <li className="program-item">BBA in Healthcare Management</li>
        //             <li className="program-item">BBA in Hospitality and Tourism Management</li>
        //             <li className="program-item">BBA in Sports Management</li>
        //             <li className="program-item">BBA in Logistics and Supply Chain Management</li>
        //         </ul>
        //     </div>

        //     <div className="program-section">
        //         <h3 className="program-heading">MBA Programs</h3>
        //         <ul className="program-list">
        //             <li className="program-item">MBA in Entrepreneurship</li>
        //             <li className="program-item">MBA in Business Analytics</li>
        //             <li className="program-item">MBA in Human Resource Management</li>
        //             <li className="program-item">MBA in Healthcare Management</li>
        //             <li className="program-item">MBA in Hospitality and Tourism Management</li>
        //             <li className="program-item">MBA in Consultancy Services</li>
        //         </ul>
        //     </div>
        //     </Container>
        // </div>
        <div className="admission">
            <Container>
                <h2 className="section-title">Admission Programs</h2>

                <div className="program-section">
                    <h3 className="program-heading">BBA Programs</h3>
                    <ul className="program-list">
                    <li className="program-item">BBA in General Management</li>
        //             <li className="program-item">BBA in Operations Management</li>
        //             <li className="program-item">BBA in Entrepreneurship</li>
        //             <li className="program-item">BBA in Business Analytics</li>
        //             <li className="program-item">BBA in Artificial Intelligence (AI) and Machine Learning (ML)</li>
        //             <li className="program-item">BBA in Healthcare Management</li>
        //             <li className="program-item">BBA in Hospitality and Tourism Management</li>
        //             <li className="program-item">BBA in Sports Management</li>
        //             <li className="program-item">BBA in Logistics and Supply Chain Management</li>
                    </ul>
                </div>

                <div className="program-section">
                    <h3 className="program-heading">MBA Programs</h3>
                    <ul className="program-list">
                    <li className="program-item">MBA in Entrepreneurship</li>
        //             <li className="program-item">MBA in Business Analytics</li>
        //             <li className="program-item">MBA in Human Resource Management</li>
        //             <li className="program-item">MBA in Healthcare Management</li>
        //             <li className="program-item">MBA in Hospitality and Tourism Management</li>
        //             <li className="program-item">MBA in Consultancy Services</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Programes