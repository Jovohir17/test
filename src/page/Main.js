import React, {useEffect, useState} from 'react';

const Main = () => {
    const [activeButton, setActiveButton] = useState('task');
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('light'); // Default theme
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility
    const [selectedElement, setSelectedElement] = useState('element2'); // State for selected element

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        document.querySelector('.blur').classList.toggle('blurred', !isPopupOpen);
    };

    const handlePopupClick = (e) => {
        if (e.target.classList.contains('popup')) {
            setIsPopupOpen(false);
            document.querySelector('.blur').classList.remove('blurred');
        }
    };

    const handleElementClick = (element) => {
        setSelectedElement(element);
    };

    return (
        <div className="background ">
            <div className="blur">
                <div className="buttons">
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                       className={`massage ${isScrolled ? 'scrolled' : ''}`}
                       id="massage-button">
                        <img src="./imgs/ddd.png" alt=" "/>
                        <p>Написать</p>
                    </a>

                    <a href="mailto:example@gmail.com" className={`pc ${isScrolled ? 'hidden' : ''}`}>
                        <img src="./imgs/img.png" alt=" "/>
                    </a>

                    <a className={`theme ${isScrolled ? 'hidden' : ''}`} onClick={toggleTheme}>
                        <img src={theme === 'light' ? './imgs/moon-solid.svg' : './imgs/sun-solid.svg'}
                             alt="Toggle Theme"/>
                    </a>
                </div>

                <section>


                    {selectedElement === 'element1' && (
                        <div className="center">
                            <p className="gr">Page 1</p>
                        </div>
                    )}

                    {selectedElement === 'element2' && (
                        <div>
                            <div className="center">
                                <h1>“Проектирование и авава ав ав конструирование систем безопасности частной
                                    сети”</h1>
                            </div>

                            <div className="center">
                                <div className="button-container">
                                    <button
                                        className={`button ${activeButton === 'task' ? 'active' : ''}`}
                                        onClick={() => handleButtonClick('task')}
                                    >
                                        Моя задача
                                    </button>
                                    <button
                                        className={`button ${activeButton === 'worked' ? 'active' : ''}`}
                                        onClick={() => handleButtonClick('worked')}
                                    >
                                        Я отработал
                                    </button>
                                </div>
                            </div>

                            <div className="center">
                                <div className="dropdown-container">
                                    <label htmlFor="order-select">Отработал по заказу:</label>
                                    <select id="order-select" name="order-select">
                                        <option value="1">125 059 ₽</option>
                                        <option value="2">62 434 ₽</option>
                                        <option value="3">55 123 ₽</option>
                                        {/* Add other options as needed */}
                                    </select>
                                </div>
                            </div>

                            <div className="center">
                                <button className="add__button" onClick={togglePopup}>Добавить запись +</button>
                            </div>

                            {/* Block for tasks and worked sections */}
                            {activeButton === 'task' ? (
                                <>
                                    <p className="date">10 июля 2024</p>
                                    <div className="center">
                                        <div className="container">
                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Закупка и установка фаерволов</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">25 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center_left">
                                                <div className="card2">
                                                    <div className="center">
                                                        <p className="first">Настройка системы мониторинга сетевой
                                                            активности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">32 500 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="date">1 июля 2024</p>
                                    <div className="center">
                                        <div className="container contract">
                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">15 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">265 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center_left">
                                                <div className="card2">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">25 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="date">9 июня 2013</p>
                                    <div className="center">
                                        <div className="container contract">

                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">35 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">35 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="center_left">
                                                <div className="card2">
                                                    <div className="center">
                                                        <p className="first">Закупка и установка фаерволов</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">225 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="date">11 июня 2013</p>
                                    <div className="center">
                                        <div className="container contract">
                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">55 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">35 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="center_left">
                                                <div className="card2">
                                                    <div className="center">
                                                        <p className="first">Закупка и установка фаерволов</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">125 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <p className="date">23 июня 2023</p>
                                    <div className="center">
                                        <div className="container">
                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Закупка и установка фаерволов</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">25 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center_left">
                                                <div className="card2">
                                                    <div className="center">
                                                        <p className="first">Настройка системы мониторинга сетевой
                                                            активности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">32 500 ₽</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="date">11 июня 2013</p>
                                    <div className="center">
                                        <div className="container contract">
                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">55 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="center_left">
                                                <div className="card1">
                                                    <div className="center">
                                                        <p className="first">Проведение аудита текущей системы
                                                            безопасности</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">35 000 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="center_left">
                                                <div className="card2">
                                                    <div className="center">
                                                        <p className="first">Закупка и установка фаерволов</p>
                                                    </div>
                                                    <div className="center">
                                                        <p className="second">125 059 ₽</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </>
                            )}
                        </div>

                    )}


                    {selectedElement === 'element3' && (
                        <div className="center">
                            <p className="gr">Page 2</p>
                        </div>
                    )}

                    <div className="center">
                        <nav>

                            <div className="blocks">
                                <div className={`element1 ${selectedElement === 'element1' ? 'active' : ''}`}
                                     onClick={() => handleElementClick('element1')}>
                                    <div className="center">
                                        <img src="./imgs/dd.svg" alt="1"/>
                                    </div>
                                    <div className="center">
                                        <p>Заказы</p>
                                    </div>
                                </div>

                                <div className={`element2 ${selectedElement === 'element2' ? 'active' : ''}`}
                                     onClick={() => handleElementClick('element2')}>
                                    <div className="center">
                                        <img src="./imgs/dd2.svg" alt="1"/>
                                    </div>
                                    <div className="center">
                                        <p>Деньги</p>
                                    </div>
                                </div>

                                <div className={`element3 ${selectedElement === 'element3' ? 'active' : ''}`}
                                     onClick={() => handleElementClick('element3')}>
                                    <div className="center">
                                        <img src="./imgs/dd3.svg" alt="1"/>
                                    </div>
                                    <div className="center">
                                        <p>Ответственность</p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </section>

            </div>
            {/* Popup */}
            {isPopupOpen && (
                <div className="popup frame">
                    <div className="popup-content">
                        <p className="close" onClick={togglePopup}>&times;</p>
                        <div className="center">
                            <h2 className="title">Добавление записи</h2>
                        </div>

                        <div className="center">
                            <div className="input-group1">
                                <input placeholder="Сумма" type="number" id="amount" className="input"/>
                            </div>
                        </div>

                        <div className="center">
                            <div className="input-group2">
                                <label className="textarea im">Не обязательно</label>
                                <input id="comment" className="textarea" about="Не обязательно"
                                       placeholder="Комментарий"/>
                            </div>
                        </div>

                        <div className="center">
                            <button className="buttonn" onClick={togglePopup}>Добавить запись +</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;
