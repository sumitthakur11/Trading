import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  const [expiries, setExpiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState(new Date());
  const [strikePrices, setStrikePrices] = useState([]);
  const [toggleStatus, setToggleStatus] = useState(true);
  const [showCalender, setShowCalender] = useState(false);
  const [selectVertical, setSelectVertical] = useState('');
  const [toggleStatus2, setToggleStatus2] = useState(true);
  const [showCalender2, setShowCalender2] = useState(false);
  const [isExpirySelected, setIsExpirySelected] = useState(false);
  const [isStrikeSelected, setIsStrikeSelected] = useState(false);
  const [defaultstrikePrices, setDefaultStrikePrices] = useState("");
  const [numberOfLegs, setNumberOfLegs] = useState(() => {
    const storedNumberOfLegs = localStorage.getItem('numberOfLegs');
    return storedNumberOfLegs ? parseInt(storedNumberOfLegs) : 1;
  });
  const [legPLTs, setLegPLTs] = useState(() => {
    const storedLegPLTs = localStorage.getItem('legPLTs');
    return storedLegPLTs ? JSON.parse(storedLegPLTs) : Array.from({ length: numberOfLegs }, () => 1);
  });

  useEffect(() => {
    localStorage.setItem('legPLTs', JSON.stringify(legPLTs));
    localStorage.setItem('numberOfLegs', numberOfLegs.toString());
  }, [numberOfLegs, legPLTs]);

  const handleAddTrade = () => {
    setLegPLTs(prev => [...prev, 1]);
    setNumberOfLegs(prev => prev + 1);
  };

  const handleAddPLT = (legIndex) => {
    setLegPLTs(prev => {
      const updatedPLTs = [...prev];
      updatedPLTs[legIndex] += 1;
      return updatedPLTs;
    });
  };

  const handleSelectChange = async (event) => {
    setSelectVertical(event.target.value)
    setLoading(true)
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://127.0.0.1:5000/option_chain?option_type=${event.target.value}`);
        const response = await axios.get(`serverURL/option_chain?option_type=${event.target.value}`);
        setExpiries(response.data.records.expiryDates);
        setStrikePrices(response.data.records.strikePrices);
        setDefaultStrikePrices(response.data.records.underlyingValue)
        setLoading(false)
      } catch (error) {
        alert("Getting Error While Fetching API! Please Try Again!!!")
        setLoading(false)
      }
    };
    fetchData();
  };

  return (
    <div className="container-xl my-3">
      <div className="row">
        <div className="col-md-4 col-6">
          <button type="button" className="btn btn-success" onClick={handleAddTrade} disabled={!isExpirySelected || !isStrikeSelected}>+ Add Trade</button>
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-end order-md-2">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
              Exit All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#'>Trade 01 <span style={{ float: 'right' }}> <input type="checkbox" /></span></Dropdown.Item>
              <Dropdown.Item href='#'>Trade 02 <span style={{ float: 'right' }}> <input type="checkbox" /></span></Dropdown.Item>
              <Dropdown.Item href='#'>Trade 03 <span style={{ float: 'right' }}> <input type="checkbox" /></span></Dropdown.Item>
              <Dropdown.Item href='#'>Trade 04 <span style={{ float: 'right' }}> <input type="checkbox" /></span></Dropdown.Item>
              <Dropdown.Item href='#'>Trade 05 <span style={{ float: 'right' }}> <input type="checkbox" /></span></Dropdown.Item>
              <Dropdown.Item href='#'>Trade 06 <span style={{ float: 'right' }}> <input type="checkbox" /></span></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-4 col-12 text-center mt-md-0 mt-3">
          <button type="button" className="btn w-100" style={{ backgroundColor: '#e6e6e9', width: 'fit-content', borderRadius: '5px' }}><b>Terminal ON/OFF</b>&ensp; {toggleStatus ? <i className="fa fa-toggle-on text-primary" style={{ fontSie: '18px' }} onClick={() => setToggleStatus(false)} /> : <i className="fa fa-toggle-off text-primary" style={{ fontSize: '18px' }} onClick={() => setToggleStatus(true)} />}</button>
        </div>
      </div >
      <div className="mt-2">
        <div className="row">
          <div className="col-lg-6 mt-3">
            <div className="row">
              <div className="col-4">
                <button type="button" className="btn btn-light w-100" onClick={() => (setShowCalender(!showCalender), setShowCalender2(false))}>Trade Validity <i className="fa fa-angle-down" /></button>
              </div>
              <div className="col-4">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                    Trade Type
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Intra</Dropdown.Item>
                    <Dropdown.Item href='#'>Carry Fwd</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-4">
                <button type="button" className="btn btn-light w-100" onClick={() => (setShowCalender2(!showCalender2), setShowCalender(false))}>No Trading Zone <i className="fa fa-angle-down" /></button>
              </div>
            </div>
            {showCalender ? <div style={{ position: 'absolute', zIndex: '999' }}><Calendar onChange={onChange} value={value} /></div> : <></>}
            <div className='d-flex justify-content-end' style={{ position: 'relative' }}>{showCalender2 ? <div style={{ position: 'absolute', zIndex: '999' }}> <Calendar onChange={onChange} value={value} /></div> : <></>}</div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-7 offset-lg-4">
                <button type="button" className="btn btn-light w-100">{toggleStatus2 ? <i className="fa fa-toggle-on text-primary" style={{ fontSie: '18px' }} onClick={() => setToggleStatus2(false)} /> : <i className="fa fa-toggle-off text-primary" style={{ fontSize: '18px' }} onClick={() => setToggleStatus2(true)} />}&ensp;Active/Deactivate</button>
              </div>
              <div className="col-lg-4 col-sm-6 col-5">
                <button type="button" className="btn btn-light w-100">❌ Exit All</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="row">
          <div className="col-lg-6 mt-3">
            <div className="row">
              <div className="col-4">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                    Select Segment
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Cash</Dropdown.Item>
                    <Dropdown.Item href='#'>Currency</Dropdown.Item>
                    <Dropdown.Item href='#'>Ende</Dropdown.Item>
                    <Dropdown.Item href='#'>Comradery</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-4">
                {!loading ?
                  <select id="selectVertical" className='form-select' onChange={(e) => handleSelectChange(e)} value={selectVertical}>
                    <option value="">Select Vertical</option>
                    <option value="NIFTY">Nifty</option>
                    <option value="BANKNIFTY">BANKNIFTY</option>
                  </select>
                  :
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
              </div>
              <div className="col-4">
                {expiries.length !== 0 ?
                  <select id="expirySelect" className='form-select' onChange={() => setIsExpirySelected(true)}>
                    <option>Select Expiry</option>
                    {expiries.map((date, index) =>
                      <option key={index} value={date}>{date}</option>
                    )}
                  </select>
                  :
                  <select id="expirySelect" className='form-select'>
                    <option>Select Expiry</option>
                  </select>
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="row">
              <div className="col-lg-4 col-6 offset-lg-4 mt-2">
                <button type="button" className="btn btn-light w-100">Max Moving High</button>
              </div>
              <div className="col-lg-4 col-6 mt-2">
                <button type="button" className="btn btn-light w-100">Avg Moving</button>
              </div>
              <div className="col-lg-4 col-6 offset-lg-4 mt-2">
                <button type="button" className="btn btn-light w-100">Max Drawdown</button>
              </div>
              <div className="col-lg-4 col-6 mt-2">
                <button type="button" className="btn btn-light w-100">Up Avg Moving</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {defaultstrikePrices !== '' ? <h1 className='mt-3'>Current Spot Price <span className='bg-secondary text-white px-2 py-1 fs-3'>₹ {defaultstrikePrices}</span></h1> : <></>}
      {[...Array(numberOfLegs)].map((_, legIndex) => (
        <>
          <div className="mt-4">
            <div className="row" style={{ background: '#CCCCCC' }}>
              <div className="col-lg-6 my-3">
                <div className="row">
                  <div className="col-sm-4 col-3 text-center">
                    <h2>Leg {legIndex + 1}</h2>
                  </div>
                  <div className="col-sm-4 col-5">
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                        Trade Advice
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href='#'>Spot</Dropdown.Item>
                        <Dropdown.Item href='#'>Sequency</Dropdown.Item>
                        <Dropdown.Item href='#'>Cover</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" placeholder='Spot Price' />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-3">
                <div className="row">
                  <div className="col-lg-3 col-6 offset-lg-4">
                    <button type="button" className="btn btn-light w-100">PNL</button>
                  </div>
                  <div className="col-lg-3 col-6">
                    <button type="button" className="btn btn-light w-100">❌ Exit All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-5 col-9 mt-3">
              <div className="row">
                <div className="col-6">
                  {strikePrices.length !== 0 ?
                    <select id="strikePriceSelect" className='form-select' onChange={() => setIsStrikeSelected(true)}>
                      <option>Select Strike Price</option>
                      {strikePrices.map((Price, index) =>
                        <option key={index} value={Price}>{Price}</option>
                      )}
                    </select>
                    :
                    <select id="strikePriceSelect" className='form-select'>
                      <option>Select Strike Price</option>
                    </select>
                  }
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-success w-100">Automatic</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-2 col-3 mt-3">
              <input type="text" className='form-control' placeholder='Strike Price' defaultValue={defaultstrikePrices} disabled />
            </div>
            <div className="col-lg-3 col-sm-5 mt-3">
              <input type="text" className='form-control' placeholder='Nearest ATM' />
            </div>
            <div className="col-lg-2 col-6 mt-3">
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-light w-100">(-)</button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-danger w-100">(+)</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 mt-3">
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-light w-100">Call</button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-light w-100">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 mt-3 offset-lg-10 offset-6">
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-light w-100">Put</button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-light w-100">Sell</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-9 mt-3">
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-light w-100">Strike</button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-success w-100">Automatic</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-3 mt-3">
              <input type="text" className='form-control' placeholder='Value' />
            </div>
            <div className="col-lg-3 col-sm-6 mt-3">
              <div className="row">
                <div className="col-6">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                      SL
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Spot Point</Dropdown.Item>
                      <Dropdown.Item href='#'>Point</Dropdown.Item>
                      <Dropdown.Item href='#'>Value</Dropdown.Item>
                      <Dropdown.Item href='#'>Percentage</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-6">
                  <input type="text" placeholder='Manual Entry' className='form-control' />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3">
              <div className="row">
                <div className="col-6">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                      Trail SL
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Point</Dropdown.Item>
                      <Dropdown.Item href='#'>Percentage</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-6">
                  <input type="text" placeholder='Manual Entry' className='form-control' />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 offset-lg-5">
              <div className="row">
                <div className="col-6">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                      Target
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Spot Point</Dropdown.Item>
                      <Dropdown.Item href='#'>Point</Dropdown.Item>
                      <Dropdown.Item href='#'>Value</Dropdown.Item>
                      <Dropdown.Item href='#'>Percentage</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-6">
                  <input type="text" placeholder='Manual Entry' className='form-control' />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3">
              <div className="row">
                <div className="col-6">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
                      Timer
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Point</Dropdown.Item>
                      <Dropdown.Item href='#'>Percentage</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-6">
                  <input type="text" placeholder='Manual Entry' className='form-control' />
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-5 text-danger">
            Profit Lock and Trail
          </h2>
          {[...Array(legPLTs[legIndex])].map((_, pltIndex) => (
            <div key={pltIndex}>
              <div className="row">
                <div className="col-lg col-sm-4 mt-3">
                  <input type="text" className='form-control' placeholder='Active' />
                </div>
                <div className="col-lg col-sm-4 mt-3">
                  <input type="text" className='form-control' placeholder='Lock' />
                </div>
                <div className="col-lg col-sm-4 mt-3">
                  <input type="text" className='form-control' placeholder='Trail Profit' />
                </div>
                <div className="col-lg col-sm-6 mt-3">
                  <input type="text" className='form-control' placeholder='TARGET' />
                </div>
                <div className="col-lg col-sm-6 mt-3">
                  <button type="button" className="btn btn-success w-100" onClick={() => handleAddPLT(legIndex)}>+ Add Leg</button>
                </div>
              </div>
            </div>
          ))}
        </>
      ))}

      <div className="mt-4">
        <div className="row pb-5" style={{ background: '#CCCCCC' }}>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="row">
                <div className="col-6 mt-3">
                  <button type="button" className="btn btn-light w-100">Paper</button>
                </div>
                <div className="col-6 mt-3">
                  <button type="button" className="btn btn-success w-100">Live</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="row">
                <div className="col-6 mt-3">
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
                      Select Broker
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Zerodha <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>Angle One <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>Dhan <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>Fyer <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>5 Paisa <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>Kotak Neo <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-6 mt-3">
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
                      Select Amount
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>1234567890 <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>1234567890 <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>1234567890 <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>1234567890 <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>1234567890 <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                      <Dropdown.Item href='#'>1234567890 <span style={{ float: 'right' }}> <input type="checkbox" checked /></span></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2 col-sm-4 mt-3">
              <button type="button" className="btn btn-secondary w-100">Re Entry</button>
            </div>
            <div className="col-lg-2 col-sm-4 mt-3">
              <input type="text" className='w-100 form-control' />
            </div>
            <div className="col-lg-2 col-sm-4 mt-3">
              <input type="text" className='w-100 form-control' placeholder='Overall Loss' />
            </div>
          </div>

          <h4 className="mt-5 text-danger">
            Overall Profit Lock And Trail
          </h4>

          <div className="row">
            <div className="col-lg col-sm-4 mt-3">
              <input type="text" className='form-control' placeholder='Active' />
            </div>
            <div className="col-lg col-sm-4 mt-3">
              <input type="text" className='form-control' placeholder='Lock' />
            </div>
            <div className="col-lg col-sm-4 mt-3">
              <input type="text" className='form-control' placeholder='Trail Profit' />
            </div>
            <div className="col-lg col-sm-6 mt-3">
              <input type="text" className='form-control' placeholder='Overall TARGET' />
            </div>
            <div className="col-lg col-sm-6 mt-3">
              <input type="text" className='form-control' placeholder='Overall PNL' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-3' style={{ maxWidth: '500px', margin: 'auto' }}>
        <div className="row">
          <div className="col-sm-4 mt-3">
            <button type="button" className="btn btn-success w-100 btn-lg"><i className="fa fa-save" /> Save</button>
          </div>
          <div className="col-sm-4 mt-3">
            <button type="button" className="btn btn-secondary w-100 btn-lg">Approved</button>
          </div>
          <div className="col-sm-4 mt-3">
            <button type="button" className="btn btn-secondary w-100 btn-lg">Deployed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
