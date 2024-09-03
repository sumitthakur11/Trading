import React, { useState } from 'react';
import '../style/CustomForm.css'
const CustomForm = () => {

    const [amount, setAmount] = useState(22500); // Initial value ₹22500

  // Function to handle input change
  const handleInputChange = (e) => {
    setAmount(e.target.value); // Update the amount state based on user input
  };

  const [amount2, setAmount2] = useState(300); // Initial value ₹22500

  // Function to handle input change
  const handleInputChange2 = (e) => {
    setAmount2(e.target.value); // Update the amount state based on user input
  };
  return (
    <form  className='form'>
        <div className='add_button'>
            <button className='btn_top'>+ Add Trade</button>

            <select className='select'>
                <option>Terminaal ON/ OFF</option>
                <option>ON</option>
                <option>OFF</option>
            </select>

            <select className='select'>
                <option>Exit All</option>
            </select>

        </div>

        <div className='select_main'>
            <div>
            <select className='select'>
                <option>Trade validity</option>
            </select>
            <select className='select'> 
                <option>Trade Type</option>
                <option>Intra</option>
                <option>Carry Fwd</option>
            </select>
            <select className='select'>
                <option>No traading zone</option>
            </select>
            </div>

            <div>
            <select className='select'>
                <option>Active/ Deactivate</option>
            </select>
            
                <button className='exit_btn'>Exit All</button>
            
            </div>
        </div>

        <div className='select_main select_main2'>
            
            <select className='select'>
                <option>Select Segment</option>
                <option>Cash</option>
                <option>Currency</option>
                <option>Ende</option>
                <option>Comradery</option>
            </select>
            <select className='select'>
                <option>Select Vertical</option>
            </select>

            <select className='select'>
                <option>Expiry</option>
            </select>

            <div className='input_text_div'>
                <p>Move having high</p>
                <input type='text' className='input_text' value={5.72} />
            </div>
            <div className='input_text_div'>
                <p>Max Drawdown</p>
                <input type='text' className='input_text' value={560} />
            </div>
            <div className='input_text_div'>
                <p>Avg Moving</p>
                <input type='text' className='input_text' value={560} />
            </div>
            <div className='input_text_div'>
                <p>Up Avg Moving</p>
                <input type='text' className='input_text' value={560} />
            </div>

        </div>

        <div className='section_3'> 
           <p>Currant Spot Price</p> 
           <input type='text' className='input_text3' value={`₹ ${amount}`} onChange={handleInputChange} />

        </div>

        <div className='section_4_main'>
            <div className='section_4'>
            <p>
                Leg 1
            </p>

            <select className='select'>
                <option>Trade Advice</option>
            </select>
                        <input type='text' className='input_section_5' />
            </div>


            <div className='leg_header'>

            
            <button className='pnl'>PNL</button>

            <button className='pnl'>Exit </button>
            </div>
            

        </div>
        <p className='input_section_5_p'>Nearest ATM</p>
        <div className='section_5'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

          
            <select className='select strike'>
                <option>Strike</option>
            </select>

          
            

            
           
                
            <input type='text' className='input_section_5' />

          
           

            <button className='btn_plus'>(+)</button>
            <button className='btn_-'>(-)</button>

            <div >          
                
                <button className='call_btn'>Call</button>
                <button className='call_btn'>Buy</button>

   </div>   
        </div>
        <span className='strike_p'> (highlight only if Strike selected in executions ) </span>
        
   <div className='call_btn_div'>          
                
                <button className='call_btn'>Put</button>
                <button className='call_btn'>Sell</button>

   </div> 

<p className='label_sec_5_1'>Value</p>
<p className='label_sec_5_2'>Manual Entry</p>
<p className='label_sec_5_3'>Manual Entry</p>

   <div className='section_5'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

          
           
          
            

            
           
                
            <input type='text' className='input_section_5 two' />

          
            <select className='select sl'>
                <option>SL</option>
            </select>

            <input type='text' className='input_section_5 three' />

            <select className='select sl'>
                <option>Trail SL</option>
            </select>

            <input type='text' className='input_section_5 four' />


          
        </div>

        <p className='section_5_value_label'>
        ( If selected manual then header should be lot qty) <br/>
 ( If selected Automatic then header should be value) 
        </p>


        <div className='section_5_3 section_5_3_2'>
          <p className='section_5_3_2_label'>Manual Entry</p>
    
            <select className='select sl'>
                <option>Target</option>
            </select>

            <input type='text' className='input_section_5 three' />

            <select className='select sl'>
                <option>Timer</option>
            </select>



          
        </div>

        <div className='profit_div_main'>
        <p className='profit_div_p'>  Profit Lock And Trail </p>

        <div className='profit_div'>

    <div className='profit'>
        <p className='profit_p'><b>Active</b> </p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'><b>Lock</b></p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'>TRAIL Profit</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'>TARGET</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <button className='btn_top profit_btn'>+ Add Leg</button>

            </div>

        </div>


{/* leg 2 */}
<div className='section_4_main'>
            <div className='section_4'>
            <p>
                Leg 2
            </p>

            <select className='select'>
                <option>Sequence</option>
            </select>
                        <input type='text' className='input_section_5' />
            <select className='select'>
                <option>Correction</option>
            </select>
            <input type='text' className='input_section_5' />

            
            <button className='btn_plus'>(+)</button>
            <button className='btn_-'>(-)</button>


            </div>

            <div className='leg_header'>

            
            <button className='pnl'>PNL</button>

            <button className='pnl'>Exit </button>
            </div>
            

        </div>
        <p className='input_section_5_p'>Nearest ATM</p>
        <div className='section_5'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

          
            <select className='select strike'>
                <option>Strike</option>
            </select>

          
            

            
           
                
            <input type='text' className='input_section_5' />

          
           

            <button className='btn_plus'>(+)</button>
            <button className='btn_-'>(-)</button>

            <div >          
                
                <button className='call_btn'>Call</button>
                <button className='call_btn'>Buy</button>

   </div>   
        </div>
        <span className='strike_p'> (highlight only if Strike selected in executions ) </span>
        
   <div className='call_btn_div'>          
                
                <button className='call_btn'>Put</button>
                <button className='call_btn'>Sell</button>

   </div> 

<p className='label_sec_5_1'>Value</p>
<p className='label_sec_5_2'>Manual Entry</p>
<p className='label_sec_5_3'>Manual Entry</p>

   <div className='section_5'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

          
           
          
            

            
           
                
            <input type='text' className='input_section_5 two' />

          
            <select className='select sl'>
                <option>SL</option>
            </select>

            <input type='text' className='input_section_5 three' />

            <select className='select sl'>
                <option>Trail SL</option>
            </select>

            <input type='text' className='input_section_5 four' />


          
        </div>

        <p className='section_5_value_label'>
        ( If selected manual then header should be lot qty) <br/>
 ( If selected Automatic then header should be value) 
        </p>


        <div className='section_5_3 section_5_3_2'>
          <p className='section_5_3_2_label'>Manual Entry</p>
    
            <select className='select sl'>
                <option>Target</option>
            </select>

            <input type='text' className='input_section_5 three' />

            <select className='select sl'>
                <option>Timer</option>
            </select>



          
        </div>

        <div className='profit_div_main'>
        <p className='profit_div_p'>  Profit Lock And Trail </p>

        <div className='profit_div'>

    <div className='profit'>
        <p className='profit_p'><b>Active</b> </p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'><b>Lock</b></p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'>TRAIL Profit</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'>TARGET</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <button className='btn_top profit_btn'>+ Add Leg</button>

            </div>

        </div>

        {/* leg 3*/}
        <div className='section_4_main'>
            <div className='section_4'>
            <p>
                Leg 3
            </p>

            <select className='select'>
                <option>Sequence</option>
            </select>
                        <input type='text' className='input_section_5' />
            <select className='select'>
                <option>Cover</option>
            </select>
            <input type='text' className='input_section_5' />

            
            <button className='btn_plus'>(+)</button>
            <button className='btn_-'>(-)</button>


            </div>

            <div className='leg_header'>

            
            <button className='pnl'>PNL</button>

            <button className='pnl'>Exit </button>
            </div>
            

        </div>
        <p className='input_section_5_p'>Nearest ATM</p>
        <div className='section_5'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

          
            <select className='select strike'>
                <option>Strike</option>
            </select>

          
            

            
           
                
            <input type='text' className='input_section_5' />

          
           

            <button className='btn_plus'>(+)</button>
            <button className='btn_-'>(-)</button>

            <div >          
                
                <button className='call_btn'>Call</button>
                <button className='call_btn'>Buy</button>

   </div>   
        </div>
        <span className='strike_p'> (highlight only if Strike selected in executions ) </span>
        
   <div className='call_btn_div'>          
                
                <button className='call_btn'>Put</button>
                <button className='call_btn'>Sell</button>

   </div> 

<p className='label_sec_5_1'>Value</p>
<p className='label_sec_5_2'>Manual Entry</p>
<p className='label_sec_5_3'>Manual Entry</p>

   <div className='section_5'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

          
           
          
            

            
           
                
            <input type='text' className='input_section_5 two' />

          
            <select className='select sl'>
                <option>SL</option>
            </select>

            <input type='text' className='input_section_5 three' />

            <select className='select sl'>
                <option>Trail SL</option>
            </select>

            <input type='text' className='input_section_5 four' />


          
        </div>

        <p className='section_5_value_label'>
        ( If selected manual then header should be lot qty) <br/>
 ( If selected Automatic then header should be value) 
        </p>


        <div className='section_5_3 section_5_3_2'>
          <p className='section_5_3_2_label'>Manual Entry</p>
    
            <select className='select sl'>
                <option>Target</option>
            </select>

            <input type='text' className='input_section_5 three' />

            <select className='select sl'>
                <option>Timer</option>
            </select>



          
        </div>

        <div className='profit_div_main'>
        <p className='profit_div_p'>  Profit Lock And Trail </p>

        <div className='profit_div'>

    <div className='profit'>
        <p className='profit_p'><b>Active</b> </p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'><b>Lock</b></p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'>TRAIL Profit</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
  
    <button className='btn_top profit_btn'>+ Add Leg</button>

            </div>

        </div>

        <div className='last_div_main'>
            <div className='last_div_btn_div'>
            <button className='call_btn '>Strike</button>
            <button className='call_btn'>Automatic</button>

            <select className='select last_timer'>
                <option>Select Broker</option>
            </select>
            <select className='select '>
                <option>Select Account</option>
            </select>
            </div>

        <p className='last_div_label'>Overall Loss</p>
            <div className='last_div_btn_div'>
          
            <button className='reenter_btn '>Re Entry</button>
            <input type='text' className='input_section_5 reenter_btn_input' />
      
            <div className='profit'>
        <input type='text' className='input_section_5 profit_input' />

    </div>


            </div>
            <div className='last_div_btn_profit_div'>
        <p className='profit_div_p'>  Overall Profit Lock And Trail</p>

        <div className='profit_div'>

    <div className='profit'>
        <p className='profit_p'><b>Active</b> </p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'><b>Lock</b></p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
    <div className='profit'>
        <p className='profit_p'>TRAIL Profit</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
  
    <div className='profit'>
        <p className='profit_p'>Overall Target</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>

    <div className='profit'>
        <p className='profit_p'>Overall PNL</p>
        <input type='text' className='input_section_5 profit_input' />

    </div>
            </div>

        </div>
        </div>
        <div className='save_btn_div_main'>
            <button className='save_btn'>Save</button>
            <button className='approve_btn'>Approved</button>

            <button className='approve_btn'>Deployed</button>

        </div>
    </form>
  );
};

export default CustomForm;
