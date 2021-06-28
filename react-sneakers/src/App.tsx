import React from 'react';

import sneakerLogo from './img/logo.png'
import userSVG from './img/user.svg'
import cartSVG from './img/cart.svg'
import plusSVG from './img/btn-plus.svg'
import oneSneakers from './img/sneakers/1.jpg'
import thoSneakers from './img/sneakers/2.jpg'

function App() {
    return (
        <div className="wrapper clear">
            <header className={'d-flex justify-between align-center p-40'}>
                <div className={'d-flex align-center'}>
                    <img width={40} height={40} src={sneakerLogo}/>
                    <div>
                        <h3 className={'text-uppercase'}>
                            REACT SNEAKERS
                        </h3>
                        <p className={'opacity-5'}>
                            Магазин луших кросовок
                        </p>
                    </div>
                </div>
                <ul className={'d-flex'}>
                    <li className={'mr-30'}>
                        <img src={cartSVG}/>
                        <span className={'ml-15пше '}>1250 руб.</span>
                    </li>
                    <li>
                        <img src={userSVG}/>
                    </li>
                </ul>
            </header>
            <div className={'content p-40'}>
                <h1 className={'mb-40'}>Все кросовки</h1>


                <div className={'d-flex'}>
                    <div className="card">
                        <img width={133} height={112} src={oneSneakers} alt={'Sneakers'}/>
                        <h5>Мужские кросивки Nike Blazer Mid Suede</h5>
                        <div className={'d-flex justify-between align-center'}>
                            <div className={'d-flex flex-column '}>
                                <span>Цена</span>
                                <b>12999 руб.</b>
                            </div>
                            <button className={'button'}>
                                <img width={11} height={11} src={plusSVG} alt={'plus'}/>
                            </button>
                        </div>

                    </div>
                    <div className="card">
                        <img width={133} height={112} src={thoSneakers} alt={'Sneakers'}/>
                        <h5>Мужские кросивки Nike Blazer Mid Suede</h5>
                        <div className={'d-flex justify-between align-center'}>
                            <div className={'d-flex flex-column '}>
                                <span>Цена</span>
                                <b>12999 руб.</b>
                            </div>
                            <button className={'button'}>
                                <img width={11} height={11} src={plusSVG} alt={'plus'}/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
