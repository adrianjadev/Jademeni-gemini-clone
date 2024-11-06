import React, { useContext }from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, showFooter } = useContext(Context);
    
  return (
    <div className='main'>
        <div className="nav">
            <p>Jade-meni</p>
            <img src={assets.jademeni_icon} alt="" />
            {/* <img src={assets.user_icon} alt="" /> */}
        </div>
        <div className="main-container">

            {!showResult
            ?<>
                <div className="greet">
                    <p><span id="greetings">Hello, I'm Jade-meni!</span></p>
                    <p>How can I help you today?</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <p>Suggest a software project idea focusing on React.js</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Create a full stack E-Commerce App using Next.js</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Suggest a series of best approach in using TypeScript</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.jademeni_icon} alt="" />
                    {loading 
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                    }

                </div>
            </div>
            }


            {/* main bottom */}
            <div className="main-bottom">
                <div className="search-box">
                    <input id="prompt-text" onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask Jade-meni!'/>
                    <div className="">
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input
                        ?<img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        :null
                        }
                    </div>
                </div>
                <p className="bottom-info">
                    {showFooter
                    ? "Jade-meni can make mistakes, so double-check it"
                    :null}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main