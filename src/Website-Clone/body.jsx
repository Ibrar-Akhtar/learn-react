import './body.css';
import girl from '../Media/girl.png';
export default function Article(){

    return(
        <div className="bg-gray text-white" >
            <div className="flex flex-row flex-wrap m-5">
                <div className='flex flex-wrap items-center'>
                    <div className="order-1">
                        <h2 className='text-red font-bold'>Design <span className="text-green">Overview</span></h2>
                        <p>card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                        <p>card eu fugasddddddddasdptit anim id est laborum.card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                        <p>for more info click on this link <span className='text-purple'>www.jalalhiadar.com</span></p>
                    </div>
                    <div className="h-[150px] w-[200px] ml-1 overflow-hidden  order-2 div2">
                        <img className='h-full w-full object-cover' src={girl} alt='Girl in the fields'/>
                    </div>
                    <div className='order-3'>
                        <ul>
                            <li>card eu fugiat nulla pariatur</li>
                            <li>Exceptit anim id est laborum.</li>
                            <li>ard eu fugiat nul</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap m-5">
                <div>
                    <div>
                        <h2 className='text-red font-bold'>Blockquote <span className="text-green">Styling</span></h2>                
                        <p>card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                        <p>card eu fugiat nulla pariatur. Exceptit anim id est laborum.card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                        <p>for more info click on this link www.jalalhiadar.com</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap m-5">
                <div>
                    <div>
                        <h2 className='text-red font-bold'>Style this <span className="text-green">H2</span></h2>
                        <p>card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>


    );
};