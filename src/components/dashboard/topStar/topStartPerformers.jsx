import React, { useState, useEffect } from 'react';
import DistributorAll from './distributorAll';
import DistributorMonthly from './distributorMonthly';
import EngArcAll from './engarcAll';
import EngArcMonthly from './engarcMonthly';
import ContactorAll from './contractorAll';
import ContactorMonthly from './contractorMonthly';

export default function TopStartPerformers() {

    const active_btn = 'btn btn-primary btn-sm'
    const inactive_btn = 'btn btn-light btn-sm'
    const [contractor_btn, setContractorBtn] = useState(active_btn);
    const [engarc_btn, setEngArcBtn] = useState(inactive_btn);
    const [distributor_btn, setDistributorBtn] = useState(inactive_btn);
    const [active_table, setActiveTable] = useState('contractor');
    const [selectedOption, setSelectedOption] = useState('all');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const toggleTableData = (type) => {
        if (type === 'contractor') {
            setContractorBtn(active_btn);
            setEngArcBtn(inactive_btn);
            setDistributorBtn(inactive_btn);
            setActiveTable('contractor');
        }
        else if (type === 'engarc') {

            setContractorBtn(inactive_btn);
            setEngArcBtn(active_btn);
            setDistributorBtn(inactive_btn);
            setActiveTable('engarc');
        } else {
            setContractorBtn(inactive_btn);
            setEngArcBtn(inactive_btn);
            setDistributorBtn(active_btn);
            setActiveTable('distributor');
        }
    }

    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header border-0">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={() => toggleTableData('contractor')} className={contractor_btn} type="button" id="add-points-button">Contractors</button>
                        <button onClick={() => toggleTableData('engarc')} className={engarc_btn} type="button" id="add-points-button" style={{ marginLeft: 6 }}>Engineers/Architects</button>
                        <button onClick={() => toggleTableData('distributor')} className={distributor_btn} type="button" id="add-points-button" style={{ marginLeft: 6 }}>Distributors</button>
                    </div>
                    <div className="d-flex align-items-center cs-settiong">
                        <select value={selectedOption}
                            onChange={handleSelectChange}
                            className="default-select status-select normal-select">
                            <option value="all">All Time</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>
                {active_table === 'distributor' && selectedOption === 'all' && <DistributorAll />}
                {active_table === 'distributor' && selectedOption === 'monthly' && <DistributorMonthly />}
                {active_table === 'engarc' && selectedOption === 'all' && <EngArcAll />}
                {active_table === 'engarc' && selectedOption === 'monthly' && <EngArcMonthly />}
                {active_table === 'contractor' && selectedOption === 'all' && <ContactorAll />}
                {active_table === 'contractor' && selectedOption === 'monthly' && <ContactorMonthly />}
            </div>
        </div>
    );
}